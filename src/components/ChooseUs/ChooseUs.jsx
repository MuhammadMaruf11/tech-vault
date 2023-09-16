import React from "react";
import "./ChooseUs.css";
import ChooseImg from "../../assets/img/about/choose-us.jpg";

const ChooseUs = () => {
  return (
    <>
      <div className="about-us-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-us-img">
                <img src={ChooseImg} alt="about_us" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-content">
                <div className="banner-title">
                  <span>
                    <i className="fa-solid fa-circle"></i>why choose us
                    <i className="fa-solid fa-circle"></i>
                  </span>
                </div>
                <div className="banner-heading">
                  <h2>
                    Why Our Customers Choose{" "}
                    <span className="text-theme-2">working</span> with us
                  </h2>
                </div>
                <div className="banner-description mb-5">
                  <span>
                    We are your trusted partner for exceptional software
                    solutions. Our commitment to excellence and customer
                    satisfaction sets us apart. Here's why you should choose us:
                  </span>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="about-child-wrap">
                      <div className="about-child-icon">
                        <strong>01</strong>
                      </div>
                      <div className="about-child-content">
                        <div className="about-child-title">
                          <h4>Latest Technologies</h4>
                        </div>
                        <div className="about-child-description">
                          <p>
                            <strong className="text-theme-2">
                              Stay Ahead:{" "}
                            </strong>
                            We leverage the latest technologies to keep you
                            ahead of the curve. Our expertise in cutting-edge
                            tools and frameworks ensures that your software
                            solutions are always at the forefront of innovation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="about-child-wrap">
                      <div className="about-child-icon">
                        <strong>02</strong>
                      </div>
                      <div className="about-child-content">
                        <div className="about-child-title">
                          <h4>Unique Solutions</h4>
                        </div>
                        <div className="about-child-description">
                          <p>
                            <strong className="text-theme-2">
                              Tailored for You:{" "}
                            </strong>
                            We understand that one size doesn't fit all. Our
                            approach is centered around delivering unique,
                            customized solutions that precisely meet your
                            business needs. Your success is our top priority.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="about-child-wrap">
                      <div className="about-child-icon">
                        <strong>03</strong>
                      </div>
                      <div className="about-child-content">
                        <div className="about-child-title">
                          <h4>Powerful Strategies</h4>
                        </div>
                        <div className="about-child-description">
                          <p>
                            <strong className="text-theme-2">
                              {" "}
                              Driving Success:{" "}
                            </strong>
                            Our team of experts is dedicated to crafting
                            powerful strategies that help you achieve your
                            goals. Whether it's streamlining operations,
                            increasing efficiency, or boosting profitability,
                            we've got you covered.
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
