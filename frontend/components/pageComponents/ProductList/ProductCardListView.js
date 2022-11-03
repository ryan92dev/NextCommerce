import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductCardListView = () => {
  return (
    <div className="flex justify-between gap-3 bg-gray-200">
      <div className="flex w-48 h-48 bg-gray-100"></div>
      <div className="flex flex-col flex-1 gap-1 p-4">
        <p className="text-sm text-gray-400">Games, PS5 </p>
        <h1 className="mt-2 text-xl font-semibold">Product Name</h1>
        <p className="w-[80%] text-sm text-gray-500 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptate, quod, quia, quae voluptates quibusdam voluptatibus
        </p>
      </div>
      <div className="flex flex-col justify-center p-4 bg-gray-100 w-36">
        <div className="flex items-center justify-center gap-2">
          <p className="text-xl font-semibold">$100</p>
          <p className="text-sm text-gray-400 line-through">$200</p>
        </div>
        <div className="flex items-center justify-center mt-3">
          <AiFillStar className="text-xl text-yellow-400" />
          <AiFillStar className="text-xl text-yellow-400" />
          <AiFillStar className="text-xl text-yellow-400" />
          <AiFillStar className="text-xl text-yellow-400" />
          <AiOutlineStar className="text-xl text-gray-400" />
        </div>
        <p className="inline-flex justify-center mt-1 text-sm text-gray-400">
          (2 Reviews)
        </p>
        <div className="flex items-center justify-center mt-3">
          <button className="px-4 py-2 text-sm font-semibold text-white bg-gray-800 rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardListView;
