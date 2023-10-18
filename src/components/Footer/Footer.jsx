import React, { useState } from "react";
import "./Footer.css";

import Logo from "../../assets/img/logo/footer-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handlenewsletter = (e) => {
    e.preventDefault();
    console.log("Subscribed with email: ", email);
    setEmail("");
  };
  return (
    <footer className="footer-area fix">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xl-4 mb-lg-0 mb-4">
              <div
                className="footer-items-wrap wow animate__fadeIn"
                data-wow-delay=".3s"
              >
                <div className="footer-logo mb-4">
                  <img src={Logo} alt="footer" />
                </div>
                <div className="footer-description">
                  Contact us and follow us on social media to stay updated.
                  <strong className="text-theme"> Subscribe </strong> to our
                  newsletter for the latest insights. Your success is our
                  priority."
                </div>
                <form onSubmit={handlenewsletter}>
                  <div className="footer-input-wrap">
                    <label htmlFor="subscribe">Subscribe News Letter</label>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email Address"
                      id="subscribe"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="subscribe-btn">
                      Subscribe
                    </button>
                    <span>*we will not share your personal info</span>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-2 col-6 mb-lg-0 mb-3">
              <div
                className="footer-widget wow animate__fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="footer-widget-title">
                  <h5>Useful Links</h5>
                </div>
                <ul>
                  <li>
                    <Link
                      target="_blank"
                      to="https://www.facebook.com/profile.php?id=61551441031104"
                    >
                      <i className="fa-solid fa-arrow-right-long"></i>Facebook
                    </Link>
                  </li>
                  <li>
                    <Link target="_blank" to="">
                      <i className="fa-solid fa-arrow-right-long"></i>Github
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      to="https://www.linkedin.com/in/techvault-ltd-680410292/?_l=en_US"
                    >
                      <i className="fa-solid fa-arrow-right-long"></i>linkedin
                    </Link>
                  </li>
                  <li>
                    <Link target="_blank" to="">
                      <i className="fa-solid fa-arrow-right-long"></i>Youtube
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6 mb-lg-0 mb-3">
              <div
                className="footer-widget wow animate__fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="footer-widget-title">
                  <h5>Pages</h5>
                </div>
                <ul>
                  <li>
                    <Link to="/about">
                      <i className="fa-solid fa-arrow-right-long"></i>About us
                    </Link>
                  </li>
                  <li>
                    <Link to="/services">
                      <i className="fa-solid fa-arrow-right-long"></i>our
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/clients-portfolio">
                      <i className="fa-solid fa-arrow-right-long"></i>clients
                      portfolio
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects">
                      <i className="fa-solid fa-arrow-right-long"></i>Our
                      projects
                    </Link>
                  </li>
                  <li>
                    <Link to="/team">
                      <i className="fa-solid fa-arrow-right-long"></i>Our Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <i className="fa-solid fa-arrow-right-long"></i>Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="footer-widget wow animate__fadeInUp"
                data-wow-delay=".9s"
              >
                <div className="footer-widget-title">
                  <h5>Contact Information</h5>
                </div>
                <div className="footer-contact">
                  <ul>
                    <li>
                      <i className="fa-solid fa-envelope"></i>
                      <Link
                        to="mailto:info@techvaultltd.com"
                        className="text-lowercase"
                      >
                        info@techvaultltd.com
                      </Link>
                    </li>
                    <li>
                      <i className="fa-solid fa-location-dot"></i>
                      E-9/6, China Town, Naya Paltan, Dhaka-1000
                    </li>
                    <li>
                      <i className="fa-solid fa-phone"></i>
                      <Link to="tel:+9613661122">+9613661122</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-social">
                  <ul>
                    <li>
                      <Link
                        target="_blank"
                        to="https://www.facebook.com/profile.php?id=61551441031104"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa-brands fa-youtube"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="_blank"
                        to="https://www.linkedin.com/in/techvault-ltd-680410292/?_l=en_US"
                      >
                        <i className="fa-brands fa-linkedin"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6">
              <div
                className="copyright-text wow animate__fadeInLeft"
                data-wow-delay=".3s"
              >
                <p className="text-white">&copy; 2023 Tech Vault Ltd.</p>
              </div>
            </div>
            <div className="col-md-6 text-end">
              <div
                className="copyright-text wow animate__fadeInRight"
                data-wow-delay=".3s"
              >
                <p className="text-white">
                  Developed by:{" "}
                  <Link
                    to="https://digitaldecoderltd.com/"
                    target="_blank"
                    className="text-black"
                  >
                    <strong>Digital Decoder Ltd</strong>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
