import React from "react";
import { servicesData } from "./ServicesData";
import Service from "./Service";

const Services = () => {
  return (
    <>
      <div className="services-area fix">
        <div className="container">
          <div className="row wow animate__zoomIn" data-wow-delay=".6s">
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
