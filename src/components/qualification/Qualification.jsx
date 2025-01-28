// Qualification.jsx
import React, { useState } from "react";
import "./qualification.css";
import { qualificationCategory, qualificationData } from "./qualification_data";
import QualificationTabs from "./QualificationTabs";
import QualificationContent from "./QualificationContent";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personal journey</span>

      <div className="qualification_container container">
        <QualificationTabs
          categories={qualificationCategory}
          activeTab={toggleState}
          onTabClick={toggleTab}
        />
        <div className="qualification_sections">
          {qualificationData.map((category) => (
            <QualificationContent
              key={category.id}
              isActive={toggleState === category.id}
              qualifications={category.data}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
