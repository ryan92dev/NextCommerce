import React from "react";

const PopularCategories = () => {
  return (
    <div className="w-full px-4 mx-auto mt-6 max-w-7xl xl:px-0">
      <div className="flex items-center justify-center">
        <h3 className="text-2xl font-semibold tracking-wider">
          Popular Categories
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-6 my-6 max-w-7xl sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <div className="flex flex-col justify-between h-52 bg-slate-300">
          <div className="flex-1"></div>
          <div className="h-10">
            <h3 className="flex items-center justify-center font-semibold tracking-wide">
              Category 1
            </h3>
          </div>
        </div>
        <div className="flex flex-col justify-between h-52 bg-slate-300">
          <div className="flex-1"></div>
          <div className="h-10">
            <h3 className="flex items-center justify-center font-semibold tracking-wide">
              Category 1
            </h3>
          </div>
        </div>
        <div className="flex flex-col justify-between h-52 bg-slate-300">
          <div className="flex-1"></div>
          <div className="h-10">
            <h3 className="flex items-center justify-center font-semibold tracking-wide">
              Category 1
            </h3>
          </div>
        </div>
        <div className="flex flex-col justify-between h-52 bg-slate-300">
          <div className="flex-1"></div>
          <div className="h-10">
            <h3 className="flex items-center justify-center font-semibold tracking-wide">
              Category 1
            </h3>
          </div>
        </div>
        <div className="flex flex-col justify-between h-52 bg-slate-300">
          <div className="flex-1"></div>
          <div className="h-10">
            <h3 className="flex items-center justify-center font-semibold tracking-wide">
              Category 1
            </h3>
          </div>
        </div>
        <div className="flex flex-col justify-between h-52 bg-slate-300">
          <div className="flex-1"></div>
          <div className="h-10">
            <h3 className="flex items-center justify-center font-semibold tracking-wide">
              Category 1
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
