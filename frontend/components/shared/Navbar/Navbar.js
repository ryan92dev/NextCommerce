import React from "react";
import MenuBar from "./MenuBar";
import MidBar from "./MidBar";
import TopBar from "./TopBar";

const Navbar = () => {
  return (
    <div className="">
      <div className="relative h-40 bg-gray-500">
        <div className="flex flex-col items-center justify-between h-full">
          <div className="flex-none w-full h-12 bg-gray-600">
            <TopBar />
          </div>
          <div className="w-full h-full">
            <MidBar />
          </div>
        </div>
      </div>
      <div className="w-full h-12 bg-gray-600 ">
        <MenuBar />
      </div>
    </div>
  );
};

export default Navbar;
