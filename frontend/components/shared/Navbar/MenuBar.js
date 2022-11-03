import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import CategoryBrowse from "./CategoryBrowse";

const MenuBar = () => {
  return (
    <div className="flex items-center justify-between h-full mx-auto max-w-7xl">
      <div className="relative h-full justify-between  min-w-[180px] w-[180px] flex bg-gray-300">
        <CategoryBrowse />
        <div className="flex items-center gap-4 ml-3 ">
          <AiOutlineMenu className="text-xl" />
          <p className="">Categories</p>
        </div>
        <div className="flex items-center mr-3">
          <IoMdArrowDropdown className="text-xl" />
        </div>
      </div>
      <div className="flex justify-end flex-1 pr-4 xl:pr-0">
        <ul className="flex items-center gap-4">
          <li className="inline-block">
            <a href="#">Home</a>
          </li>
          <li className="inline-block">
            <a href="#">Shop</a>
          </li>
          <li className="inline-block">
            <a href="#">Login</a>
          </li>
          <li className="inline-block">
            <a href="#">Register</a>
          </li>
          <li className="inline-block">
            <a href="#">Account</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
