import React from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import "./Achievements.css";

const Achievements = () => {
  return (
    <>
      <div className="achievements-area achievement-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="achievements-wrap">
                <div className="achievements-icon">
                  <i className="fa-solid fa-people-roof"></i>
                </div>
                <Odometer value={100} format="(.ddd),dd" />
                <div className="achievements-title">
                  <h5>Finished Projects</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="achievements-wrap">
                <div className="achievements-icon">
                  <i className="fa-solid fa-arrows-to-circle"></i>
                </div>
                <Odometer value={50} format="(.ddd),dd" />
                <div className="achievements-title">
                  <h5>Create Jobs</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="achievements-wrap">
                <div className="achievements-icon">
                  <i className="fa-solid fa-user"></i>
                </div>
                <Odometer value={1000} format="(.ddd),dd" />
                <div className="achievements-title">
                  <h5>Happy Customers</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="achievements-wrap">
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
