import React from "react";
import "./skills.css";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section className="skills_section section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My technical level</span>
      <SkillsCard />
    </section>
  );
};

export default Skills;
