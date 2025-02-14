import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work_card" key={item.id}>
      <img src={item.image} alt="" className="work_img" />
      <h3 className="work_title">{item.title}</h3>
      <a
        href={item.url}
        target="_blank"
        className="work_button"
        rel="noreferrer"
      >
        View project <i className="bx bx-right-arrow-alt work_button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
