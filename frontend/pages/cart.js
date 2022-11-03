import React from "react";
import ShoppingCartTable from "../components/pageComponents/Cart/ShoppingCartTable";
import Navbar from "../components/shared/Navbar/Navbar";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="w-full px-4 mx-auto mt-4 max-w-7xl xl:px-0">
        <div className="flex items-center justify-center w-full h-40 bg-gray-300">
          <div>
            <h1 className="text-4xl font-bold">Shopping Cart</h1>
          </div>
        </div>

        <div className="mt-10">
          <ShoppingCartTable />
        </div>
      </div>
    </>
  );
};

export default Cart;
