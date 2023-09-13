import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/img/logo/header-logo.png";

const Header = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClassName = isHeaderFixed ? "header-area header-fixed" : "header-area";

  return (
    <header className={headerClassName}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                {" "}
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link to="/services">Services</Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link to="/products">Products</Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link to="/clients-portfolio">Clients Portfolio</Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link to="/career">Career</Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link to="/about">About</Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link to="/team">Team</Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
