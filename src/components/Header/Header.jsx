import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/img/logo/header-logo.png";
import SunIcon from "../../assets/img/icon/sun.png";
import MoonIcon from "../../assets/img/icon/moon.png";

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

  const headerClassName = isHeaderFixed
    ? "header-area header-fixed"
    : "header-area";

  const [isDarkMode, setIsDarkMode] = useState(true); // Set it to true initially

  // Load the user's preference from local storage on component mount
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    setIsDarkMode(savedMode === "true");
  }, []);

  // Update dark mode preference in local storage and on state change
  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode);
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className={`${headerClassName} fix`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler bg-white order-2"
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
            className="collapse navbar-collapse justify-content-end order-lg-1 order-2"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/clients-portfolio">Clients Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link to="/team">Team</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="dark-mode-toggle d-none ms-auto order-lg-5 order-1 me-2 me-lg-0">
            <input
              className="d-none"
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleDarkMode}
              id="toggleMode"
            />
            <label className="toggle-btn" htmlFor="toggleMode">
              {isDarkMode ? (
                <>
                  <img title="Light Mode" src={SunIcon} alt="sun" />
                  <Link
                    className="d-none"
                    to="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepnglogos.com%2Fpics%2Fsun&psig=AOvVaw3eT9IKnyuMq9TOOItDOQKa&ust=1694856876260000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOCC04KorIEDFQAAAAAdAAAAABAG"
                  >
                    copyright
                  </Link>
                </>
              ) : (
                <>
                  <img title="Dark Mode" src={MoonIcon} alt="moon" />
                  <Link
                    className="d-none"
                    to="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngimg.com%2Fimage%2F25419&psig=AOvVaw1oPifbDoBZoNPSgtjUNrjG&ust=1694856757519000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJDG5qqorIEDFQAAAAAdAAAAABAE"
                  >
                    copyright
                  </Link>
                </>
              )}
            </label>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
