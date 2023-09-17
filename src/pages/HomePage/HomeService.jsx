import React from "react";
import { servicesData } from "../../components/Services/ServicesData";
import Service from "../../components/Services/Service";
import ServiceTitle from "../../components/Services/ServiceTitle";

const HomeService = () => {
  return (
    <div className="services-area fix">
      <div className="container">
        <ServiceTitle />
        <div className="row wow animate__zoomIn" data-wow-delay=".6s">
          {servicesData.slice(0, 3).map((serviceData) => (
            <Service key={serviceData.id} serviceData={serviceData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeService;
