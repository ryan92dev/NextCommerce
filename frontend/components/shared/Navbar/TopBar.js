import React from "react";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between h-full px-4 mx-auto xl:px-0 max-w-7xl">
      <div className="flex">
        <h2>Welcome to NextCommerce</h2>
      </div>
      <div>
        <span>Social Icons</span>
      </div>
    </div>
  );
};

export default TopBar;
