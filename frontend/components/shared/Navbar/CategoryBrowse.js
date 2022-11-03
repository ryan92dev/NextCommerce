import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const CategoryBrowse = () => {
  return (
    <div className="  absolute min-w-[180px] top-full translate-y-1 z-10  bg-slate-100">
      <ul className="flex flex-col w-full gap-1">
        <li className="flex items-center justify-between w-full px-4 py-2">
          <span>Category 1</span>
          <AiOutlineRight className="w-4 h-4 " />
        </li>{" "}
        <li className="flex items-center justify-between w-full px-4 py-2">
          <span>Category 1</span>
          <AiOutlineRight className="w-4 h-4 " />
        </li>{" "}
        <li className="flex items-center justify-between w-full px-4 py-2">
          <span>Category 1</span>
          <AiOutlineRight className="w-4 h-4 " />
        </li>{" "}
        <li className="flex items-center justify-between w-full px-4 py-2">
          <span>Category 1</span>
          <AiOutlineRight className="w-4 h-4 " />
        </li>
      </ul>
    </div>
  );
};

export default CategoryBrowse;
