import type { NextPage } from "next";
import Image from "next/image";
import FeatureGrid from "../components/branding/FeatureGrid";
import OpenGraph from "../components/branding/util/OpenGraph";

const Home: NextPage = () => {
  return (
    <>
      <OpenGraph
        title="Imageing"
        url="https://imageing.org/"
        image="https://imageing.org/assets/Mark.png"
        description="request changes here too!"
      />

      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <Image
              className="hover:scale-110 transition-all duration-500 ease-in-out hover:drop-shadow-2xl"
              src="/assets/Mark.png"
              alt="Splash"
              width={200}
              height={200}
            />
            <p className="py-6">
              some app to do with images, i wasn't given info. (request changes
              for what i gotta replace here)
            </p>
            {/** request changes for what i gotta replace here */}
            <button className="btn btn-primary">downbad</button>{" "}
          </div>
        </div>
      </div>

      <FeatureGrid />
    </>
  );
};

export default Home;
