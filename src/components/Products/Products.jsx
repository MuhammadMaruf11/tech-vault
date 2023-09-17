import React from "react";
import { productsData } from "./Products-data";
import Product from "./Product";

const Products = () => {
  return (
    <>
      <div className="products-area fix">
        <div className="container">
          <div className="row wow animate__zoomIn" data-wow-delay=".6s">
            {productsData.map((productData) => (
              <Product key={productData.id} productData={productData} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
