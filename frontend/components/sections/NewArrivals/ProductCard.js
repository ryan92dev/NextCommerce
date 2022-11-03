import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const ProductCard = () => {
  return (
    <div className="w-56 h-auto pb-4 bg-gray-100">
      <div className="w-56 h-56 bg-gray-500"></div>
      <div className="flex flex-col px-4 py-2">
        <p className="mb-2 text-sm text-gray-500">Games, PS4</p>
        <h3 className="text-lg font-semibold tracking-wide ">
          Sony Playstation 5
        </h3>
        <div className="flex items-center gap-2">
          <p className="text-2xl font-bold tracking-wide">$150</p>
          <p className="text-sm text-gray-500 line-through">$200</p>
        </div>
        <div className="flex items-center justify-between w-full mt-3">
          <div className="flex">
            <AiFillStar className="text-yellow-400" />
            <AiFillStar className="text-yellow-400" />
            <AiFillStar className="text-yellow-400" />
            <AiFillStar className="text-yellow-400" />
            <AiOutlineStar className="text-yellow-400" />
          </div>
          <span className="text-sm">(2 Reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
