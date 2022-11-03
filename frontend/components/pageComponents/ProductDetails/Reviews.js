import React from "react";
import { AiFillStar } from "react-icons/ai";

const Reviews = () => {
  return (
    <div className="p-4 mt-4 border">
      <div className="flex ">
        <div className="flex justify-center flex-[1] flex-col">
          <h3>John Doe</h3>
          <div className="flex gap-1 my-3 text-gray-700">
            <AiFillStar className="text-xl text-yellow-400" />
            <AiFillStar className="text-xl text-yellow-400" />
            <AiFillStar className="text-xl text-yellow-400" />
            <AiFillStar className="text-xl text-yellow-400" />
            <AiFillStar className="text-xl text-yellow-400" />
          </div>
          <p className="text-sm text-gray-500">May 10, 2021</p>
        </div>
        <div className="flex flex-[6] flex-col">
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod,
            voluptate, quia, voluptas quas voluptatem quibusdam voluptatum quae
            quidem quos natus. Quisquam, quae. Quisquam voluptas, quae quod
            quibusdam quos quia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
