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
    <footer className="footer-area">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
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
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6">
              <div className="copyright-text">
                <p className="text-white">&copy; 2023 Tech Vault Ltd.</p>
              </div>
            </div>
            <div className="col-md-6 text-end">
              <div className="copyright-text">
                <p className="text-white">
                  Developed by:{" "}
                  <Link
                    to="https://digitaldecoderltd.com/"
                    target="_blank"
                    className="text-theme"
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
