import React from "react";
import Layout from "../Layout/Layout";
import AboutUs from "../../components/AboutUs/AboutUs";
import AboutUsTeam from "../../components/AboutUs/AboutUsTeam";

const AboutPage = () => {
  return (
    <Layout>
      <div className="section-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>About Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutUs />
      <AboutUsTeam />
    </Layout>
  );
};

export default AboutPage;
