import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const HeroSlider = () => {
  return (
    <div className="relative flex w-full h-full bg-gray-800">
      <div className="absolute -translate-y-1/2 left-10 top-1/2">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50">
          <AiOutlineLeft className="w-4 h-4 m-auto" />
        </div>
      </div>
      <div className="absolute -translate-y-1/2 right-10 top-1/2">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50">
          <AiOutlineRight className="w-4 h-4 m-auto" />
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
