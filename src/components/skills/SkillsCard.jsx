import React from "react";
import { competences } from "./competences_data";
import BentoItem from "./BentoItem";

export default function SkillsCard() {
  const frontendSkills = competences.find(
    (competence) => competence.category === "Frontend Development"
  );
  const backendSkills = competences.find(
    (competence) => competence.category === "Backend Development"
  );
  const competentSkills = competences.find(
    (competence) => competence.category === "Competent Skills"
  );
  const cmsDevelopmentSkills = competences.find(
    (competence) => competence.category === "CMS Development"
  );
  return (
    <div className="rows_container">
      <div className="row row-1">
        <BentoItem large category={frontendSkills} />
        <BentoItem category={backendSkills} />
      </div>
      <div className="row row-2">
        <BentoItem category={cmsDevelopmentSkills} />
        <BentoItem category={competentSkills} />
      </div>
    </div>
  );
}
