import React from "react";

const ProductDescriptionTab = () => {
  return (
    <div>
      <div>
        <h3 className="text-lg font-semibold tracking-wide">
          Product Information
        </h3>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec
          nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
          amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices
          nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate
          sem tristique cursus. Nunc nec porttitor turpis. In eu risus enim. In
          vitae mollis elit. Vivamus finibus vel mauris ut vehicula. Nullam a
          magna porttitor, dictum risus nec, faucibus sapien. Lorem ipsum dolor
          sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat
          mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra
          non, semper suscipit, posuere a, pede. Donec nec justo eget felis
          facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean
          dignissim pellentesque felis. Phasellus ultrices nulla quis nibh.
          Quisque a lectus. Donec consectetuer ligula vulputate sem tristique
          cursus.
        </p>
      </div>

      <div className="flex mt-4">{/* <ReviewForm /> */}</div>
    </div>
  );
};

export default ProductDescriptionTab;
