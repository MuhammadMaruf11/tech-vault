import React from "react";
import { servicesData } from "./ServicesData";
import Service from "./Service";

const Services = () => {
  return (
    <>
      <div className="services-area ">
        <div className="container">
          <div className="row">
            {servicesData.map((serviceData) => (
              <Service key={serviceData.id} serviceData={serviceData} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
