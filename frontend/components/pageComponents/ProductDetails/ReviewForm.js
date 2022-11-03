import React from "react";
import { AiFillStar } from "react-icons/ai";

const ReviewForm = () => {
  return (
    <div className="w-full p-4 mt-4 border">
      <h3 className="text-2xl font-bold tracking-wide">Add a Review</h3>
      <div className="mt-4">
        <p>All fields are required. We will not publish your email address</p>
        <div className="flex items-center gap-1 my-3 text-gray-700">
          <h4>Your Ratings: </h4>
          <AiFillStar className="text-xl text-yellow-400" />
          <AiFillStar className="text-xl text-yellow-400" />
          <AiFillStar className="text-xl text-yellow-400" />
          <AiFillStar className="text-xl text-yellow-400" />
          <AiFillStar className="text-xl text-yellow-400" />
        </div>

        <div>
          <input
            type="text"
            placeholder="Comment*"
            className="w-full p-4 text-gray-500 border focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          />
          <div className="flex gap-3 mt-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-1/2 p-4 text-gray-500 border focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-1/2 p-4 text-gray-500 border focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>
          <button className="w-full p-4 mt-4 text-white bg-yellow-400 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
