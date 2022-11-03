import React from "react";
import ProductFilter from "./ProductFilter";
import { AiOutlineArrowDown, AiOutlineDown } from "react-icons/ai";
import ProductCardListView from "./ProductCardListView";
import ProductCardGridView from "./ProductCardGridView";

const ProductListComponent = () => {
  return (
    <div className="w-full px-4 mx-auto mt-4 max-w-7xl xl:px-0">
      <div className="flex items-center justify-center w-full h-40 bg-gray-300">
        <div>
          <h1 className="text-4xl font-bold">Product List</h1>
        </div>
      </div>

      <div className="w-full mt-4 h-[1px] px-4 bg-gray-200"></div>

      <div className="flex h-full gap-6 mt-6">
        <div className="h-full w-60">
          <ProductFilter />
        </div>

        <div className="flex-1 h-10 py-4 ">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <h1 className="text-sm font-semibold tracking-wide text-gray-500">
              Showing 1-12 of 12 results
            </h1>

            <div className="mt-3 md:mt-0">
              <div className="flex items-center gap-2">
                <p className="text-sm">Sort by: </p>
                <div className="relative flex items-center">
                  <select className="w-32 px-2 py-1 text-sm text-gray-500 bg-white border-2 rounded appearance-none">
                    <option>Default</option>
                    <option>Most Popular</option>
                    <option>Most Rated</option>
                    <option>Newest Arrivals</option>
                  </select>
                  <AiOutlineDown className="absolute text-xs text-gray-500 right-1.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>
            </div>
          </div>

          <div className="h-[1px] w-full mt-6 bg-gray-200"></div>

          <div className="flex flex-col w-full gap-3 mt-6 ">
            <ProductCardListView />
          </div>

          <div className="grid grid-cols-1 gap-3 mt-6 md:grid-cols-2 lg:grid-cols-4 ">
            <ProductCardGridView />
            <ProductCardGridView />
            <ProductCardGridView />
            <ProductCardGridView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListComponent;
