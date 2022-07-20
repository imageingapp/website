import { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm, PersistentFile } from "formidable";
import absoluteUrl from 'next-absolute-url'

const IMAGE_BASE_URL = 'https://imageing.org/shared/';

declare module 'formidable' {
    interface FileJSON {
        newFilename: string;
    }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const form = new IncomingForm({
            keepExtensions: true,
            uploadDir: "./shared",
        });
        form.parse(req, async function (err, fields, files) {
            if (err) {
                console.log(err);
                res.status(500).json({ error: err.message });
                return;
            }
            const file = files[Object.keys(files)[0]]
            if (file) {
                if (file instanceof PersistentFile) {
                    console.log(process.env.API_SECRET)
                    if (fields?.token === process.env.API_SECRET) {
                        const { origin } = absoluteUrl(req);
                        return res.status(200).json({
                            message: 'success',
                            url: `${origin}/${file.toJSON().newFilename}`,
                        });
                    } else {
                        file.destroy();
                        return res.status(401).json({
                            error: 'You are not authorized for this endpoint. Please provide a valid token or get support at \'https://imageing.org/discord\'.',
                        });
                    }
                } else {
                    console.log(files)
                    return res.status(500).json({ error: 'There has been an issue on server side. Please try again or get support at \'https://imageing.org/discord\'.' });
                }
            } else {
                return res.status(40).json({ error: 'Provide a file to the request body. Please try again or get support at \'https://imageing.org/discord\'.' });
            }
        });
    } else {
        res.writeHead(501, { Location: '/' }).end()
    }
}

export const config = {
    api: {
        bodyParser: false,
    }
}