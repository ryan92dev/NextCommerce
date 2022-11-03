import React from "react";
import HeroSlider from "../HeroSlider";

const Hero = () => {
  return (
    <div>
      <div className="flex h-[500px] w-full max-w-7xl mx-auto my-3 bg-gray-300">
        <HeroSlider />
      </div>
      <div className="flex w-full h-24 bg-gray-600 ">
        <div className="flex w-full h-24 bg-gray-600"></div>
      </div>
    </div>
  );
};

export default Hero;
