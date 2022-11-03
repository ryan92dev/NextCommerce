import React, { useState } from "react";
import ProductDescriptionTab from "./ProductDescriptionTab";
import ReviewComponent from "./ReviewComponent";

const tabsData = [
  {
    label: "Product Description",
    content: <ProductDescriptionTab />,
  },
  {
    label: "Reviews",
    content: <ReviewComponent />,
  },
];

const ProductDetailsTabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div>
      <div className="flex space-x-3 border-b">
        {/* Loop through tab data and render button for each. */}
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`py-2 border-b-4 transition-colors duration-300 ${
                idx === activeTabIndex
                  ? "border-teal-500"
                  : "border-transparent hover:border-gray-200"
              }`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex(idx)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {/* Show active tab content. */}
      <div className="py-4">
        <div>{tabsData[activeTabIndex].content}</div>
      </div>
    </div>
  );
};

export default ProductDetailsTabs;
