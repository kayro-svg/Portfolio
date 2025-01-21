import React, { useEffect, useRef } from "react";

export default function ServicesDescription({
  toggleState,
  toggleTab,
  description,
}) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        toggleTab(0);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleTab]);

  return (
    <div
      className={
        toggleState === description.id
          ? "services_modal active-modal"
          : "services_modal"
      }
    >
      <div className="services_modal-content" ref={modalRef}>
        <i
          onClick={() => toggleTab(0)}
          className="uil uil-times services_modal-close"
        ></i>

        <h3 className="services_modal-title">{description.title}</h3>
        <p className="services_modal-description">{description.description}</p>
        <ul className="services_modal-services grid">
          {description.services.map((service, index) => (
            <li className="services_modal-service" key={index}>
              <i className="uil uil-check-circle services_modal-icon"></i>
              <p className="services_modal-info">{service.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
