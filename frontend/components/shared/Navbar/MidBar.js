import React from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineHeart,
} from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";

const MidBar = () => {
  return (
    <div className="flex items-center justify-between w-full h-full gap-3 px-4 mx-auto xl:px-0 max-w-7xl">
      <div className="flex items-center">
        <h2 className="text-2xl font-bold">NextCommerce</h2>
      </div>
      <div className="flex items-center justify-center flex-1 h-14">
        <div className="relative flex w-full h-full max-w-xl border rounded-sm">
          <div className="flex justify-between items-center px-4  min-w-[150px] w-[150px] border-r  h-full">
            <p>Categories</p>
            <IoMdArrowDropdown className="ml-2 text-xl" />
          </div>
          <input
            type="text"
            className="w-full h-full px-2 py-4 text-sm placeholder-gray-500 bg-transparent border-none outline-none"
            placeholder="Search for products, brands and more"
          />
          <AiOutlineSearch className="absolute text-2xl -translate-y-1/2 right-2 top-1/2" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center">
          <div className="mr-4">
            <BsTelephone className="text-4xl" />
          </div>
          <div className="flex flex-col justify-center mr-10">
            <p>Call Us Now:</p>
            <span>+012 23456789</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center justify-center">
            <AiOutlineHeart className="text-4xl" />
            <p>Wishlist</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <AiOutlineShoppingCart className="text-4xl" />
            <p>Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidBar;
