// QualificationItem.jsx
import React from "react";
import PropTypes from "prop-types";
import TimelineIndicator from "./TimelineIndicator";

const QualificationItem = ({ title, subtitle, date, content, isLeft }) => {
  return (
    <div className="qualification_data">
      {isLeft ? (
        <>
          <div style={{ textAlign: "end" }}>
            <h3 className="qualification_title">{title}</h3>
            <span className="qualification_subtitle">{subtitle}</span>
            <div className="qualification_calender">
              <i className="uil uil-calender-alt"></i> {date}
            </div>
            {content && content.length > 0 && (
              <ul className="qualification_content_list">
                {content.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
          <TimelineIndicator />
        </>
      ) : (
        <>
          <div></div>
          <TimelineIndicator />
          <div>
            <h3 className="qualification_title">{title}</h3>
            <span className="qualification_subtitle">{subtitle}</span>
            <div className="qualification_calender">
              <i className="uil uil-calender-alt"></i> {date}
            </div>

            {content && content.length > 0 && (
              <ul className="qualification_content_list">
                {content.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
};

QualificationItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.array,
  isLeft: PropTypes.bool.isRequired,
};

export default QualificationItem;
