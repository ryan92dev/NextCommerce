import React from "react";

const ProductFilterTitle = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-sm font-semibold tracking-wide text-gray-500">
          Filters:
        </h1>
        <button className="flex items-center">
          <span className="text-sm font-semibold tracking-wide text-blue-500">
            Clear Filters
          </span>
        </button>
      </div>

      <div className="h-[1px] w-full mt-6 bg-gray-200"></div>
    </>
  );
};

export default ProductFilterTitle;
