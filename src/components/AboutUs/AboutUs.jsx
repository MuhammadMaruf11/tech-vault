import React from "react";
import "./AboutUs.css";
// import SignCEO from "../../assets/img/signature/signature-ceo.png";
import AboutImg from "../../assets/img/about/staff-augments.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="about-us-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-content">
                <div className="banner-title">
                  <span>
                    <i className="fa-solid fa-circle"></i>about us
                    <i className="fa-solid fa-circle"></i>
                  </span>
                </div>
                <div className="banner-heading">
                  <h2>
                    Trusted By Worldwide Clients Since{" "}
                    <span className="text-theme-2">2020</span>
                  </h2>
                </div>
                <div className="banner-description mb-5">
                  <span>
                    We are passionate about
                    <strong className="text-theme-2">
                      {" "}
                      Software Development
                    </strong>
                    . Our journey began 2020, and since then, we have been
                    dedicated to best software solutions to our clients. .
                  </span>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="about-child-wrap">
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
                  <div className="col-md-6">
                    <div className="about-child-wrap">
                      <div className="about-child-icon">
                        <i className="fa-solid fa-gamepad"></i>
                      </div>
                      <div className="about-child-content">
                        <div className="about-child-title">
                          <h4>easy to reach</h4>
                        </div>
                        <div className="about-child-description">
                          <p>
                            <strong className="text-theme-2">
                              Accessible:{" "}
                            </strong>
                            Our team is readily available for your questions,
                            ideas, and support, ensuring your convenience.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-child-wrap">
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
                  <div className="col-md-6">
                    <div className="about-child-wrap">
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
                <div className="banner-btn d-flex justify-content-between">
                  <button className="btn">Get in Touch</button>
                  {/* <div className="signature-ceo">
                    <img src={SignCEO} alt="sign" />
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-us-img ms-lg-4">
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
