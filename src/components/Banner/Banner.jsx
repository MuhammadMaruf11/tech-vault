import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="banner-area banner-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="banner-content">
                <div className="banner-title">
                  <span>
                    <i className="fa-solid fa-circle"></i>software development
                    <i className="fa-solid fa-circle"></i>
                  </span>
                </div>
                <div className="banner-heading">
                  <h1>
                    Providing The Best Services & Software Developemnt{" "}
                    <span>Solutions</span>
                  </h1>
                </div>
                <div className="banner-description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eaque magnam minus distinctio alias praesentium fugit! Eaque
                    magnam minus distinctio alias praesentium fugit!
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
