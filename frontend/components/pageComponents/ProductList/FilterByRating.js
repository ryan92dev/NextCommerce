import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const FilterByRating = () => {
  return (
    <div className="flex flex-col mt-4">
      <div>
        <h3 className="text-lg font-semibold tracking-wide">Rating</h3>
      </div>

      <div className="flex flex-col mt-2">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="w-5 h-5 text-gray-600 rounded-md form-checkbox"
            checked
          />
          <div className="flex gap-1 mb-3 ml-2 text-gray-700">
            <AiFillStar className="text-xl text-yellow-400" />
            <AiFillStar className="text-xl text-yellow-400" />
            <AiFillStar className="text-xl text-yellow-400" />
            <AiFillStar className="text-xl text-yellow-400" />
            <AiFillStar className="text-xl text-yellow-400" />
          </div>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="w-5 h-5 text-gray-600 rounded-md form-checkbox"
            checked
          />
          <div className="flex gap-1 mb-3 ml-2 text-gray-700">
            <AiFillStar className="text-xl text-yellow-400" />
            <AiFillStar className="text-xl text-yellow-400" />
            <AiFillStar className="text-xl text-yellow-400" />
            <AiFillStar className="text-xl text-yellow-400" />
            <AiOutlineStar className="text-xl text-gray-400" />
          </div>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="w-5 h-5 text-gray-600 rounded-md form-checkbox"
            checked
          />
          <div className="flex gap-1 mb-3 ml-2 text-gray-700">
            <AiFillStar className="text-xl text-yellow-400" />
            <AiFillStar className="text-xl text-yellow-400" />
            <AiFillStar className="text-xl text-yellow-400" />
            <AiOutlineStar className="text-xl text-gray-400" />
            <AiOutlineStar className="text-xl text-gray-400" />
          </div>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="w-5 h-5 text-gray-600 rounded-md form-checkbox"
            checked
          />
          <div className="flex gap-1 mb-3 ml-2 text-gray-700">
            <AiFillStar className="text-xl text-yellow-400" />
            <AiFillStar className="text-xl text-yellow-400" />
            <AiOutlineStar className="text-xl text-gray-400" />
            <AiOutlineStar className="text-xl text-gray-400" />
            <AiOutlineStar className="text-xl text-gray-400" />
          </div>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="w-5 h-5 text-gray-600 rounded-md form-checkbox"
            checked
          />
          <div className="flex gap-1 mb-3 ml-2 text-gray-700">
            <AiFillStar className="text-xl text-yellow-400" />
            <AiOutlineStar className="text-xl text-gray-400" />
            <AiOutlineStar className="text-xl text-gray-400" />
            <AiOutlineStar className="text-xl text-gray-400" />
            <AiOutlineStar className="text-xl text-gray-400" />
          </div>
        </label>
      </div>
    </div>
  );
};

export default FilterByRating;
