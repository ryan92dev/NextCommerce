import React from "react";

const ShoppingCartTable = () => {
  return (
    <div className="w-full">
      <table className="w-full border-t ">
        <thead className="">
          <tr className="">
            <th className="w-2/12 border-b border-l border-r">Image</th>
            <th className="border-b border-r ">Product Name</th>
            <th className="w-2/12 border-b border-r">Quantity</th>
            <th className="w-1/12 border-b border-r">Unit Price</th>
            <th className="w-1/12 border-b border-r">Total</th>
            <th className="w-1/12 border-b border-r"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="flex justify-center py-3 border-b border-l border-r">
              <div>
                <div className="w-20 h-20 bg-gray-300"></div>
              </div>
            </td>
            <td className="border-b border-r ">
              <div className="flex flex-col px-4 my-4">
                <div className="flex justify-between">
                  <p className="text-xs text-gray-400">Games, Electronics</p>
                  <p className="text-xs text-gray-400">SKU: 123456789</p>
                </div>
                <h3 className="text-lg font-semibold">Playstation 5</h3>
                <p className="text-xs text-gray-400">Brand: Sony</p>
                <p className="text-xs text-gray-400">Selected Color: Black</p>
              </div>
            </td>
            <td className="border-b border-r ">
              <div className="flex items-center justify-center w-full">
                <button className="w-10 h-10 bg-gray-400">-</button>
                <input
                  type="text"
                  placeholder="0"
                  className="w-10 h-10 text-center border"
                />
                <button className="w-10 h-10 bg-gray-400">+</button>
              </div>
            </td>
            <td className="border-b border-r ">
              <div className="flex items-center justify-center">
                <p className="text-lg font-semibold">$ 500</p>
              </div>
            </td>
            <td className="border-b border-r ">
              <div className="flex items-center justify-center">
                <p className="text-lg font-semibold">$ 500</p>
              </div>
            </td>
            <td className="border-b border-r ">
              <div className="flex items-center justify-center">
                <button className="w-10 h-10 bg-gray-400">x</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCartTable;
