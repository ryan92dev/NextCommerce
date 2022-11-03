import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductCardGridView = () => {
  return (
    <div className="w-full border shadow-md">
      <div>
        <div className="h-48 bg-slate-500"></div>
        <div className="p-4">
          <p className="text-sm text-gray-500">Games, PS4</p>
          <h3 className="font-semibold tracking-wide ">Sony Playstation 5</h3>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-xl font-bold tracking-wide">$150</p>
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
    </div>
  );
};

export default ProductCardGridView;
