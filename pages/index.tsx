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
		description="Imageing is a modern image sharing app for Android and iOS. Like ShareX, it allows you to edit, upload and share images or screenshots to a host of your choice."
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
              Imageing is a modern image sharing app for Android and iOS. Like ShareX, it allows you to edit, upload and share images or screenshots to a host of your choice.
            </p>
            <button className="btn btn-primary btn-disabled">Download</button>
          </div>
        </div>
      </div>

      <FeatureGrid />
    </>
  );
};

export default Home;
