import React, { useState } from "react";
import "./services.css";
import ServicesCard from "./ServicesCard";
import { serviceCategory } from "./services_data";

export default function Services() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">What i offer</span>

      <div className="services_container container grid">
        {serviceCategory.map((service) => (
          <ServicesCard
            key={service.id}
            toggleTab={toggleTab}
            toggleState={toggleState}
            service={service}
          />
        ))}
      </div>
    </section>
  );
}
