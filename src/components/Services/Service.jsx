import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";

const Service = ({ serviceData }) => {
  const { title, icon, des } = serviceData || {};
  return (
    <>
      <div className="col-md-6 col-xl-4">
        <div className="service-wrap">
          <div className="service-icon">
            <i className={icon}></i>
          </div>
          <div className="service-items">
            <div className="service-title">
              <h3>{title}</h3>
            </div>
            <div className="service-description">
              <p>{des.slice(0, 120)}...</p>
            </div>
          </div>
          {/* <div className="service-link">
            <Link to="#">
              Read More <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Service;
