import React from "react";
import Layout from "../Layout/Layout";
import ContactUs from "./../../components/ContactUs/ContactUs";

const ContactPage = () => {
  return (
    <Layout>
      <div className="service-bg">
        <div className="container">
          <div className="row">
            <div className="services-title">
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
    </Layout>
  );
};

export default ContactPage;
