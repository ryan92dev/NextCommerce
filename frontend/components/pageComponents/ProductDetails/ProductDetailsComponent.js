import React from "react";
import { AiFillStar } from "react-icons/ai";
import ProductDetailsTabs from "./ProductDetailsTabs";
import RelatedProducts from "./RelatedProducts";

const ProductDetailsComponent = () => {
  return (
    <div className="w-full px-4 mx-auto mt-6 max-w-7xl xl:px-0">
      <div>
        <div className="flex gap-10">
          <div className="flex flex-col-reverse flex-1 gap-2 mb-auto lg:mb-0 xl:flex-row">
            <div className="flex gap-2 xl:flex-col">
              <div className="w-32 h-32 bg-gray-400 aspect-square "></div>
              <div className="w-32 h-32 bg-gray-400 aspect-square "></div>
            </div>
            <div className="bg-gray-400 max-h-[500px] aspect-1"></div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between ">
                <h2 className="text-2xl text-gray-500">Sony Playstation 5</h2>
              </div>
              <div className="flex gap-2">
                <div className="flex gap-1 mb-3 text-gray-700">
                  <AiFillStar className="text-xl text-yellow-400" />
                  <AiFillStar className="text-xl text-yellow-400" />
                  <AiFillStar className="text-xl text-yellow-400" />
                  <AiFillStar className="text-xl text-yellow-400" />
                  <AiFillStar className="text-xl text-yellow-400" />
                </div>
                <span className="text-sm text-gray-500">5 Reviews</span>
              </div>
              <div className="flex gap-2">
                <span className="text-2xl font-semibold text-gray-700">
                  $499.99
                </span>
                <span className="text-sm text-gray-500 line-through">
                  $599.99
                </span>
              </div>
              <div className="flex gap-2">
                <span className="text-sm text-gray-500">In Stock</span>
                <span className="text-sm text-gray-500">|</span>
                <span className="text-sm text-gray-500">Free Shipping</span>
              </div>

              <div className="flex gap-2">
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  quod, voluptate, quia, voluptas quas voluptatem quibusdam
                  voluptatum quae quidem quos natus. Quisquam, quae. Quisquam
                  voluptas, quae quod quibusdam quos quia.
                </p>
              </div>

              <div className="flex flex-col gap-5 mt-4">
                <div className="flex items-center">
                  <div className="w-20">
                    <h3>Color:</h3>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                    <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                    <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-20">
                    <h3>Size:</h3>
                  </div>
                  <select
                    className="flex px-4 py-1 text-gray-500 border item-center"
                    name=""
                    id=""
                  >
                    <option value="">Small</option>
                    <option value="">Medium</option>
                    <option value="">Large</option>
                  </select>
                </div>
                <div className="flex items-center">
                  <div className="w-20">
                    <h3>Quantity:</h3>
                  </div>
                  <select
                    className="flex px-4 py-1 text-gray-500 border item-center"
                    name=""
                    id=""
                  >
                    <option value="">Small</option>
                    <option value="">Medium</option>
                    <option value="">Large</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-2 mt-6">
                <button className="px-4 py-2 text-sm font-semibold text-white bg-gray-700 rounded-md">
                  Add to Cart
                </button>
                <button className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-md">
                  Add to Wishlist
                </button>
              </div>

              <div className="h-[1px] w-full bg-gray-100 mt-4 mb-2"></div>

              <div className="flex items-center gap-3">
                <h4 className="text-gray-500 ">Category: </h4>
                <h4 className="text-gray-500 ">Electronics, Games</h4>
              </div>
              <div className="flex items-center gap-4">
                <h3 className="text-gray-500">Share:</h3>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-10 ">
          {/* Tabs */}
          <ProductDetailsTabs />
        </div>

        <div className="w-full mt-10 ">
          <RelatedProducts />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsComponent;
