import React from "react";
import "./Footer.css";

import Logo from "../../assets/img/logo/footer-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-area footer-bg">
      <Link
        className="d-none"
        to="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.unfe.org%2Ffooter-2%2Ffooter-background%2F&psig=AOvVaw15s4QJSt_UmlLp8V14J7kp&ust=1694669542380000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqGAoTCODfpJLupoEDFQAAAAAdAAAAABClAQ"
      >
        copy right
      </Link>
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div className="footer-logo">
              <img src={Logo} alt="footer" />
            </div>
            <div className="footer-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem temporibus ipsa ab cumque ad ipsam quaerat?
            </div>
            <form action="">
              <div className="footer-input-wrap">
                <label htmlFor="subscribe">Subscribe News Letter</label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email Address"
                  id="subscribe"
                  name="email"
                />
                <button type="submit" className="subscribe-btn">
                  Subscribe
                </button>
                <span>*we will not share your personal info</span>
              </div>
            </form>
          </div>
          <div className="col-xl-2">
            <div className="footer-widget">
              <div className="footer-widget-title">
                <h5>Useful Links</h5>
              </div>
              <ul>
                <li>
                  <Link to="">
                    <i className="fa-solid fa-arrow-right-long"></i>goggle
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa-solid fa-arrow-right-long"></i>dribble
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa-solid fa-arrow-right-long"></i>linkedin
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa-solid fa-arrow-right-long"></i>wikipedia
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2">
            <div className="footer-widget">
              <div className="footer-widget-title">
                <h5>Resources</h5>
              </div>
              <ul>
                <li>
                  <Link to="">
                    <i className="fa-solid fa-arrow-right-long"></i>support
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa-solid fa-arrow-right-long"></i>dashboard
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa-solid fa-arrow-right-long"></i>drivers
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa-solid fa-arrow-right-long"></i>projects
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="footer-widget">
              <div className="footer-widget-title">
                <h5>Contact Information</h5>
              </div>
              <div className="footer-contact">
                <ul>
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <Link to="mailto:techvault@gmail.com">
                      techvault@gmail.com
                    </Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-location-dot"></i>
                    abc, xyz, Dhaka, Bangladesh
                  </li>
                  <li>
                    <i className="fa-solid fa-mobile-button"></i>
                    <Link to="tel:+8801999999999">01999999999</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-social">
                <ul>
                  <li>
                    <Link to="">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <i className="fa-brands fa-youtube"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <i className="fa-brands fa-instagram"></i>
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
    </footer>
  );
};

export default Footer;
