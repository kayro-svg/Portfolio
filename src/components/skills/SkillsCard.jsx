import React from "react";
import { competences } from "./competences_data";

export default function SkillsCard() {
  return (
    <div className="skills_container container grid">
      {competences.map((competence, index) => (
        <div className="skills_content" key={index}>
          <h3 className="skills_title">{competence.category}</h3>
          <div className="skills_list">
            <div className="skills_box">
              <div className="skills_group">
                {competence.skills.map((skill, index) => (
                  <div className="skills_data" key={index}>
                    <i className="bx bx-badge-check"></i>
                    <div>
                      <h3 className="skills_name">{skill.name}</h3>
                      <span className="skills_level">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
