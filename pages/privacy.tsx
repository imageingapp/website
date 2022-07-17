import { marked } from "marked";
import type { InferGetStaticPropsType } from "next";
import OpenGraph from "../components/branding/util/OpenGraph";

export const getStaticProps = async () => {
  const privacy = await fetch(
    `https://raw.githubusercontent.com/ImageingApp/meta/main/PRIVACY.md`
  );

  return {
    props: {
      content: marked.parse(await privacy.text())
    },
    revalidate: 3600
  };
};

function Privacy({ content }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <OpenGraph
        title="Privacy Policy"
        url="https://imageing.org/privacy"
        description="Privacy Policy"
        color="#2f3136"
      />
      <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <div className="w-full font-mono px-4 md:px-6 text-xl leading-normal">
          <article
            dangerouslySetInnerHTML={{
              __html: content
            }}
            className="prose lg:prose-xl"
          />
        </div>
      </div>
    </>
  );
}

export default Privacy;
