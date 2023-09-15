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
                    Why Our Customers Choose <span>working</span> with us
                  </h2>
                </div>
                <div className="banner-description mb-5">
                  <span>
                    LLorem ipsum dolor sit amet consectetur adipisicing elit. A
                    officia molestiae dolorum tempora ut accusamus cupiditate!
                    Nesciunt tempora reiciendis libero voluptate!
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Neque repellendus minima reiciendis nobis
                            dolore obcaecati.
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
                          <h4>Uniqe Solutions</h4>
                        </div>
                        <div className="about-child-description">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Neque repellendus minima reiciendis nobis
                            dolore obcaecati.
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Neque repellendus minima reiciendis nobis
                            dolore obcaecati.
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
