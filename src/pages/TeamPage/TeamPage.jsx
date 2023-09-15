import React from "react";
import Layout from "../Layout/Layout";
import OurTeam from "./../../components/OurTeam/OurTeam";

const TeamPage = () => {
  return (
    <Layout>
      <div className="service-bg">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>Our Team</h2>
            </div>
          </div>
        </div>
      </div>
      <OurTeam />
    </Layout>
  );
};

export default TeamPage;
