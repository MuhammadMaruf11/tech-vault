import React from "react";
import Layout from "../Layout/Layout";
import Portfolio from "../../components/Portfolio/Portfolio";

const ClientsPage = () => {
  return (
    <Layout>
      <div className="service-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Our Clients</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Portfolio />
    </Layout>
  );
};

export default ClientsPage;
