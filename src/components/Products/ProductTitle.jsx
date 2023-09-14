import React from "react";
import { Link } from "react-router-dom";

const ProductTitle = () => {
  return (
    <div className="row mb-4 align-items-center">
      <div className="col-md-8 col-lg-6 col-xl-5">
        <div className="banner-title">
          <span>
            <i className="fa-solid fa-circle"></i>Products
            <i className="fa-solid fa-circle"></i>
          </span>
        </div>
        <div className="banner-heading">
          <h2>Our Products</h2>
        </div>
        {/* <div className="banner-description">
          <p>
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Omnis Id
            Atque Dignissimos Repellat Quae Ullam.
          </p>
        </div> */}
      </div>
      <div className="col-md-4 text-end offset-xl-3 offset-lg-2">
        <div className="see-services-btn">
          <Link to="/products" className="btn">
            See All Products <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductTitle;
