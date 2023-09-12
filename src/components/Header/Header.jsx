import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from '../../assets/img/logo/header-logo.png'

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                {" "}
                <Link to="/">Home</Link>
              </li>
              <li class="nav-item">
                {" "}
                <Link to="/services">Services</Link>
              </li>
              <li class="nav-item">
                {" "}
                <Link to="/products">Products</Link>
              </li>
              <li class="nav-item">
                {" "}
                <Link to="/clients-portfolio">Clients Portfolio</Link>
              </li>
              <li class="nav-item">
                {" "}
                <Link to="/career">Career</Link>
              </li>
              <li class="nav-item">
                {" "}
                <Link to="/about">About</Link>
              </li>
              <li class="nav-item">
                {" "}
                <Link to="/team">Team</Link>
              </li>
              <li class="nav-item">
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
