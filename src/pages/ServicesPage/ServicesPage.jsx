import React from "react";
import Services from "../../components/Services/Services";
import Layout from "../Layout/Layout";

const ServicesPage = () => {
  return (
    <Layout>
      <div className="service-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Our Services</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services />
    </Layout>
  );
};

export default ServicesPage;
