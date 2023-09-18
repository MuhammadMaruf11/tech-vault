import React from "react";
import "./Achievements.css";
import "odometer/themes/odometer-theme-default.css";
import Odometer from "react-odometerjs";

const Achievements = () => {
  return (
    <>
      <div className="achievements-area achievement-bg fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-lg-0 mb-4">
              <div
                className="achievements-wrap wow animate__fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="achievements-icon">
                  <i className="fa-solid fa-people-roof"></i>
                </div>
                <Odometer value={100} animation="count" />
                <div className="achievements-title">
                  <h5>Finished Projects</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-lg-0 mb-4">
              <div
                className="achievements-wrap wow animate__fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="achievements-icon">
                  <i className="fa-solid fa-arrows-to-circle"></i>
                </div>
                <Odometer value={50} format="(.ddd),dd" />
                <div className="achievements-title">
                  <h5>Create Jobs</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-md-0 mb-4">
              <div
                className="achievements-wrap wow animate__fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="achievements-icon">
                  <i className="fa-solid fa-user"></i>
                </div>
                <Odometer value={1000} format="(,ddd).dd" />
                <div className="achievements-title">
                  <h5>Happy Customers</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-lg-0">
              <div
                className="achievements-wrap wow animate__fadeInUp"
                data-wow-delay=".9s"
              >
                <div className="achievements-icon">
                  <i className="fa-solid fa-crosshairs"></i>
                </div>
                <Odometer value={10} format="(.ddd),dd" />
                <div className="achievements-title">
                  <h5>Years of Experience</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
