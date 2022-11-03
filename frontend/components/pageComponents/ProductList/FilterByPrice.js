import React, { useState } from "react";

const FilterByPrice = () => {
  const [price, setPrice] = useState(0);
  console.log(price);

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div className="flex flex-col mt-4">
      <div>
        <h3 className="text-lg font-semibold tracking-wide">Price</h3>
        <div className="w-full">
          <input
            type="range"
            onChange={handlePriceChange}
            value={price}
            min="0"
            max="100"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterByPrice;
