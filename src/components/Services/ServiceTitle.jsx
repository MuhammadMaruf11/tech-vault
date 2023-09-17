import React from "react";
import { Link } from "react-router-dom";

const ServiceTitle = () => {
  return (
    <div className="row mb-4 align-items-center">
      <div className="col-md-8 col-lg-6 col-xl-5">
        <div
          className="banner-content wow animate__fadeInLeft"
          data-wow-delay=".3s"
        >
          <div className="banner-title">
            <span>
              <i className="fa-solid fa-circle"></i>services
              <i className="fa-solid fa-circle"></i>
            </span>
          </div>
          <div className="banner-heading">
            <h2>
              What Services we <span className="text-theme-2">offer</span>
            </h2>
          </div>
          <div className="banner-description">
            <span>
              We offer a comprehensive range of{" "}
              <strong className="text-theme-2">software solutions</strong>{" "}
              tailored to meet the unique needs of businesses across various
              industries. Our services include:
            </span>
          </div>
        </div>
      </div>
      <div className="col-md-4 text-end offset-xl-3 offset-lg-2">
        <div
          className="see-services-btn wow animate__fadeInRight"
          data-wow-delay=".3s"
        >
          <Link to="/services" className="btn">
            See All Services <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceTitle;
