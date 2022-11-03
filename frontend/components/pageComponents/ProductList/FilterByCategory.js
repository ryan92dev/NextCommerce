import React from "react";

const FilterByCategory = () => {
  return (
    <div className="flex flex-col mt-4">
      <div>
        <h3 className="text-lg font-semibold tracking-wide">Category</h3>
      </div>

      <div className="flex flex-col mt-2">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="w-5 h-5 text-gray-600 rounded-md form-checkbox"
            checked
          />
          <span className="ml-2 text-gray-700">All</span>
        </label>
        <label className="inline-flex items-center mt-3">
          <input
            type="checkbox"
            className="w-5 h-5 text-gray-600 rounded-md form-checkbox"
          />
          <span className="ml-2 text-gray-700">Electronics</span>
        </label>
        <label className="inline-flex items-center mt-3">
          <input
            type="checkbox"
            className="w-5 h-5 text-gray-600 rounded-md form-checkbox"
          />
          <span className="ml-2 text-gray-700">Electronics</span>
        </label>
        <label className="inline-flex items-center mt-3">
          <input
            type="checkbox"
            className="w-5 h-5 text-gray-600 rounded-md form-checkbox"
          />
          <span className="ml-2 text-gray-700">Electronics</span>
        </label>
        <label className="inline-flex items-center mt-3">
          <input
            type="checkbox"
            className="w-5 h-5 text-gray-600 rounded-md form-checkbox"
          />
          <span className="ml-2 text-gray-700">Electronics</span>
        </label>
        <label className="inline-flex items-center mt-3">
          <input
            type="checkbox"
            className="w-5 h-5 text-gray-600 rounded-md form-checkbox"
          />
          <span className="ml-2 text-gray-700">Electronics</span>
        </label>
        <label className="inline-flex items-center mt-3">
          <input
            type="checkbox"
            className="w-5 h-5 text-gray-600 rounded-md form-checkbox"
          />
          <span className="ml-2 text-gray-700">Electronics</span>
        </label>
      </div>
    </div>
  );
};

export default FilterByCategory;
