import { marked } from "marked";
import type { InferGetStaticPropsType } from "next";
import OpenGraph from "../components/branding/util/OpenGraph";

export const getStaticProps = async () => {
  const terms = await fetch(
    `https://raw.githubusercontent.com/ImageingApp/meta/main/TERMS.md`
  );

  return {
    props: {
      content: marked.parse(await terms.text())
    }
  };
};

function Terms({ content }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <OpenGraph
        title="Terms of Service"
        url="https://imageing.org/terms"
        description="Terms of Service"
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

export default Terms;
