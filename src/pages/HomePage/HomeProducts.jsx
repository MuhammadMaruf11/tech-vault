import React from "react";
import ProductTitle from "../../components/Products/ProductTitle";
import Product from "../../components/Products/Product";
import { productsData } from "../../components/Products/Products-data";

const HomeProducts = () => {
  return (
    <div className="products-area fix">
      <div className="container">
        <ProductTitle />
        <div className="row wow animate__zoomIn" data-wow-delay=".6s">
          {productsData.slice(0, 3).map((productData) => (
            <Product key={productData.id} productData={productData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
