import React from "react";

import "./StepCard.css";

const StepCard = ({ header, description, img }) => {
  return (
    <div className="stepcard_container">
      <div className="stepcard_inner">
        <div className="stepcard_inner_icon_div">
          <img src={img} alt="surat" className="stepcard_inner_icon" />
        </div>
        <h1>{header}</h1>

        <div
          style={{ width: "25%", height: ".25px" }}
          className="stepcard_line"
        ></div>

        <div
          style={{ width: "50%", marginTop: "-10px", height: "1px" }}
          className="stepcard_line"
        ></div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default React.memo(StepCard);
