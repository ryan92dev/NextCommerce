import React from "react";
import ProductListComponent from "../components/pageComponents/ProductList/ProductListComponent";
import Navbar from "../components/shared/Navbar/Navbar";

const ProductList = () => {
  return (
    <div>
      <Navbar />

      <ProductListComponent />
    </div>
  );
};

export default ProductList;
