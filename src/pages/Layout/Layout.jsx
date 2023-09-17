import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

// import wow js for add animation
import WOW from "wowjs";

const Layout = ({ children }) => {
  useEffect(() => {
    const wow = new WOW.WOW({
      boxClass: "wow", // default CSS class name for animation (required)
      animateClass: "animate__animated", // default CSS class name for animated effect (required)
      offset: 0, // distance to the element when triggering the animation
      mobile: true, // enable animation on mobile devices
      live: true, // act on asynchronously loaded content
    });
    wow.init();
  }, []);
  return (
    <>
      <Header />
      <main style={{ paddingTop: "79px" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
