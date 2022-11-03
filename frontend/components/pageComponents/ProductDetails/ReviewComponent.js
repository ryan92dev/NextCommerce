import React from "react";
import ReviewForm from "./ReviewForm";
import Reviews from "./Reviews";

const ReviewComponent = () => {
  return (
    <div>
      <div>
        <h3 className="text-lg font-semibold tracking-wide">Reviews (3)</h3>
      </div>
      <div className="flex flex-col gap-2">
        <Reviews />
        <Reviews />
        <Reviews />
        <Reviews />
        <Reviews />
      </div>

      <div className="flex mt-4">
        <ReviewForm />
      </div>
    </div>
  );
};

export default ReviewComponent;
