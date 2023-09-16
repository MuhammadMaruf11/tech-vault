import React from "react";
import { productsData } from "./Products-data";
import Product from "./Product";

const Products = () => {
  return (
    <>
      <div className="products-area ">
        <div className="container">
          <div className="row">
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
