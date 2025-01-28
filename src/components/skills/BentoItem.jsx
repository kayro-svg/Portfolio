import React from "react";

export default function BentoItem({ large, category }) {
  const itemSize = large ? "large_item" : "small_item";
  return (
    <div className={`col-box ${itemSize}`}>
      <h3 className="skills_title">{category.category}</h3>
      <div className="skills_box">
        <div className="skills_group">
          {category.skills.map((skill, index) => (
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
  );
}
