import React from "react";
import FilterByCategory from "./FilterByCategory";
import FilterByPrice from "./FilterByPrice";
import FilterByRating from "./FilterByRating";
import ProductFilterTitle from "./ProductFilterTitle";

const ProductFilter = () => {
  return (
    <div className="px-4 py-4 bg-gray-100 rounded-sm">
      <div className="">
        <ProductFilterTitle />
      </div>

      <div className="flex flex-col gap-10">
        <FilterByPrice />
        <FilterByCategory />
        <FilterByRating />
      </div>
    </div>
  );
};

export default ProductFilter;
