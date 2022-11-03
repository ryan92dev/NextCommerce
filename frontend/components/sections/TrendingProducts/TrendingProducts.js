import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import TrendingProductCard from "./TrendingProductCard";

const TrendingProducts = () => {
  return (
    <div className="w-full px-4 mx-auto mt-6 max-w-7xl xl:px-0">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold tracking-wider">
          Trending Products
        </h3>
        <div>
          <ul className="flex">
            <li className="border-t border-b border-l">
              <button className="px-6 py-2">
                <p className="text-sm font-semibold">Top Rated</p>
              </button>
            </li>
            <li className="border-t border-b ">
              <button className="px-6 py-2">
                <p className="text-sm font-semibold">Best Sellers</p>
              </button>
            </li>
            <li className="border-t border-b">
              <button className="flex items-center gap-2 px-6 py-2">
                <p className="text-sm font-semibold">Price </p>
                <span>
                  <AiOutlineArrowDown />
                </span>
              </button>
            </li>
            <li className="border-t border-b border-r">
              <button className="flex items-center gap-2 px-6 py-2">
                <p className="text-sm font-semibold">Price </p>
                <span>
                  <AiOutlineArrowUp />
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <TrendingProductCard />
          <TrendingProductCard />
          <TrendingProductCard />
          <TrendingProductCard />
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
