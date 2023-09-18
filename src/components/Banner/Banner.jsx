import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="banner-area banner-bg fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-9">
              <div
                className="banner-content wow animate__zoomIn"
                data-wow-delay=".3s"
              >
                <div className="banner-title">
                  <span>
                    <i className="fa-solid fa-circle"></i>software development
                    <i className="fa-solid fa-circle"></i>
                  </span>
                </div>
                <div className="banner-heading">
                  <h1>
                    Providing The Best Services & Software
                    <span className="text-theme-2"> Solutions</span>
                  </h1>
                </div>
                <div className="banner-description">
                  <p>
                    We are dedicated to providing you with the best services and
                    cutting-edge{" "}
                    <strong className="text-theme-2">
                      software development solutions
                    </strong>
                    . Our mission is to empower your business with innovative
                    technology, exceptional quality, and a commitment to your
                    success. Discover how we can transform your vision into
                    reality and propel your business forward."
                  </p>
                </div>
                <div className="banner-btn">
                  <button className="btn">start now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
