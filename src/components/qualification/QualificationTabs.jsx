// QualificationTabs.jsx
import React from "react";
import PropTypes from "prop-types";

const QualificationTabs = ({ categories, activeTab, onTabClick }) => {
  return (
    <div className="qualification_tabs">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={
            activeTab === cat.id
              ? "qualification_button qualification_active button--flex"
              : "qualification_button button--flex"
          }
          onClick={() => onTabClick(cat.id)}
        >
          {cat.icon}
          {cat.category}
        </button>
      ))}
    </div>
  );
};

QualificationTabs.propTypes = {
  categories: PropTypes.array.isRequired,
  activeTab: PropTypes.number.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default QualificationTabs;
