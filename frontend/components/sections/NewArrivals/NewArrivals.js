import React from "react";
import ProductCard from "./ProductCard";

const NewArrivals = () => {
  return (
    <div className="w-full px-4 mx-auto mt-6 max-w-7xl xl:px-0">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold tracking-wider">New Arrivals</h3>
        <button className="px-6 py-2 border">
          <p className="text-sm font-semibold">View All</p>
        </button>
      </div>

      <div className="flex gap-10 my-6 overflow-hidden ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default NewArrivals;
