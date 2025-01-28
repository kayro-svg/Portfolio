// QualificationContent.jsx
import React from "react";
import PropTypes from "prop-types";
import QualificationItem from "./QualificationItem";

const QualificationContent = ({ isActive, qualifications }) => {
  return (
    <div
      className={
        isActive
          ? "qualification_content qualification_content-active"
          : "qualification_content"
      }
    >
      {qualifications.map((qual, index) => (
        <QualificationItem
          key={index}
          title={qual.title}
          subtitle={qual.subtitle}
          date={qual.date}
          content={qual.content}
          isLeft={index % 2 === 0}
        />
      ))}
    </div>
  );
};

QualificationContent.propTypes = {
  isActive: PropTypes.bool.isRequired,
  qualifications: PropTypes.array.isRequired,
};

export default QualificationContent;
