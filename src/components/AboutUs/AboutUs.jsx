import React from "react";
import "./AboutUs.css";
// import SignCEO from "../../assets/img/signature/signature-ceo.png";
import AboutImg from "../../assets/img/about/staff-augments.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="about-us-area fix">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-lg-0 mb-5">
              <div
                className="banner-content wow animate__fadeInLeft"
                data-wow-delay=".3s"
              >
                <div className="banner-title">
                  <span>
                    <i className="fa-solid fa-circle"></i>about us
                    <i className="fa-solid fa-circle"></i>
                  </span>
                </div>
                <div className="banner-heading">
                  <h2>
                    Trusted By Worldwide Clients Since{" "}
                    <span className="text-theme-2">2019</span>
                  </h2>
                </div>
                <div className="banner-description mb-5">
                  <span>
                    We are passionate about
                    <strong className="text-theme-2">
                      {" "}
                      Software Development
                    </strong>
                    . Our journey began 2019, and since then, we have been
                    dedicated to best software solutions to our clients. .
                  </span>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-xl-6 col-lg-12 col-md-6">
                  <div
                    className="about-child-wrap wow animate__fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="about-child-icon">
                      <i className="fa-solid fa-medal"></i>
                    </div>
                    <div className="about-child-content">
                      <div className="about-child-title">
                        <h4>first on field</h4>
                      </div>
                      <div className="about-child-description">
                        <p>
                          <strong className="text-theme-2">
                            {" "}
                            Innovators:{" "}
                          </strong>
                          We pioneer innovative solutions, setting industry
                          standards with cutting-edge products.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-6">
                  <div
                    className="about-child-wrap wow animate__fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <div className="about-child-icon">
                      <i className="fa-solid fa-gamepad"></i>
                    </div>
                    <div className="about-child-content">
                      <div className="about-child-title">
                        <h4>easy to reach</h4>
                      </div>
                      <div className="about-child-description">
                        <p>
                          <strong className="text-theme-2">Accessible: </strong>
                          Our team is readily available for your questions,
                          ideas, and support, ensuring your convenience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-6">
                  <div
                    className="about-child-wrap wow animate__fadeInUp"
                    data-wow-delay=".9s"
                  >
                    <div className="about-child-icon">
                      <i className="fa-solid fa-map-location"></i>
                    </div>
                    <div className="about-child-content">
                      <div className="about-child-title">
                        <h4>worldwide services</h4>
                      </div>
                      <div className="about-child-description">
                        <p>
                          <strong className="text-theme-2">
                            Global Reach:
                          </strong>{" "}
                          Providing diverse solutions worldwide, bringing a
                          global perspective to every project.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-6">
                  <div
                    className="about-child-wrap wow animate__fadeInUp"
                    data-wow-delay="1.1s"
                  >
                    <div className="about-child-icon">
                      <i className="fa-solid fa-gears"></i>
                    </div>
                    <div className="about-child-content">
                      <div className="about-child-title">
                        <h4>27/7 support</h4>
                      </div>
                      <div className="about-child-description">
                        <p>
                          <strong className="text-theme-2">
                            Always Available:
                          </strong>{" "}
                          Our dedicated support team is available around the
                          clock, ensuring timely assistance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-us-img ms-lg-4 wow animate__fadeInRight"
                data-wow-delay=".3s"
              >
                <img src={AboutImg} alt="about_us" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
