import React from "react";
import ProductDetailsComponent from "../../../components/pageComponents/ProductDetails/ProductDetailsComponent";
import RelatedProducts from "../../../components/pageComponents/ProductDetails/RelatedProducts";
import Navbar from "../../../components/shared/Navbar/Navbar";

const ProductDetails = () => {
  return (
    <>
      <div>
        <Navbar />
        <ProductDetailsComponent />
      </div>
    </>
  );
};

export default ProductDetails;
