import React from "react";
import Layout from "../Layout/Layout";
import Products from "../../components/Products/Products";

const ProductsPage = () => {
  return (
    <Layout>
      <div className="service-bg">
        <div className="container">
          <div className="row">
            <div className="services-title">
              <h2>Our Products</h2>
            </div>
          </div>
        </div>
      </div>
      <Products />
    </Layout>
  );
};

export default ProductsPage;
