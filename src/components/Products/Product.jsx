import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Product = ({ productData }) => {
  const { title, img, url } = productData || {};
  return (
    <div className="col-lg-4">
      
      <Link className="product-wrap" target="_blank" to={url}>
        <div
          className=" product-bg"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="product-info">
          <div className="product-title">
            <h4>{title}</h4>
            <i className="fa-solid fa-arrow-right-long"></i>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
