import React from "react";
import "./OurTeam.css";
import { teamData } from "./OurTeamData";
import { Link } from "react-router-dom";

const OurTeam = () => {
  return (
    <>
      <div className="team-area fix">
        <div className="container">
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
                    our team <span className="text-theme-2">members</span>
                  </h2>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4 text-end offset-xl-3 offset-lg-2">
              <div className="see-services-btn">
                <Link to="/services" className="btn">
                  See All Services{" "}
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div> */}
          </div>
          <div className="row wow animate__zoomIn" data-wow-delay=".6s">
            {teamData &&
              teamData.map((index) => {
                return (
                  <div key={index.id} className="col-lg-4 col-xl-3 col-md-6">
                    <div className=" profile-wrap">
                      <div className="profile-img-top">
                        {" "}
                        <img src={index.img} alt="" />
                      </div>{" "}
                      <div className="profile-body text-center">
                        <h5 className="profile-title mb-0">{index.name}</h5>
                        <small>{index.designation}</small>
                      </div>
                      {/* <div className="-description">

                                    <p className="-text">Some quick example text to build on the  title and make up the bulk of the 's content.</p>

                                </div> */}
                      <div className="profile-social">
                        <Link
                          className="px-2"
                          to="#"
                          onClick={() => window.open(index.facebook)}
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          className="px-2"
                          to="#"
                          onClick={() => window.open(index.github)}
                        >
                          <i className="fa-brands fa-github"></i>
                        </Link>
                        <Link
                          className="px-2"
                          to="#"
                          onClick={() => window.open(index.linkedin)}
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                        <Link
                          className="px-2"
                          to="#"
                          onClick={() =>
                            (window.location = `mailto:${index.email}`)
                          }
                        >
                          <i className="fa-solid fa-envelope"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
