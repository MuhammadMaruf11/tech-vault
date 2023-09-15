import React from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import "./Achievements.css";
import { Link } from "react-router-dom";

const Achievements = () => {
  return (
    <>
      <div className="achievements-area achievement-bg">
        <Link
          className="d-none"
          to="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-backgrounds&psig=AOvVaw3epK-yhJljhxoQDeNVyq9h&ust=1694691637608000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPilnLrAp4EDFQAAAAAdAAAAABAI"
        >
          copyright
        </Link>
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
