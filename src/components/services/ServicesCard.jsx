import React from "react";
import ServicesDescriptionModal from "./ServicesDescriptionModal";
import { servicesDescription } from "./services_data";

export default function ServicesCard({ toggleState, toggleTab, service }) {
  return (
    <div className="services_content">
      <div className="services_icon_title">
        {service.icon}
        <h3 className="services_title">{service.title}</h3>
      </div>

      <span className="services_button" onClick={() => toggleTab(service.id)}>
        View More
        <i className="uil uil-arrow-right services_button-icon"></i>
      </span>
      {servicesDescription.map((description, index) => (
        <ServicesDescriptionModal
          key={index}
          toggleState={toggleState}
          toggleTab={toggleTab}
          description={description}
        />
      ))}
    </div>
  );
}
