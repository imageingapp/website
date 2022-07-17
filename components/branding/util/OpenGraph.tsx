import Head from "next/head";

interface IOpenGraph {
  title?: string;
  url: string;
  image?: string;
  description?: string;
  color?: string;
}

export default function OpenGraph({
  title,
  url,
  image,
  description,
  color
}: IOpenGraph) {
  return (
    <Head>
      <meta property="og:type" content="website" />
      {title && <title>{title}</title>}
      {title && <meta property="og:title" content={title} />}
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      {description && <meta property="og:description" content={description} />}
      {color && <meta property="theme-color" content={color} />}
    </Head>
  );
}
