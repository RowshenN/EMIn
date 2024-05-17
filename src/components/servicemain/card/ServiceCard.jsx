import React from "react";

import "./ServiceCard.css";

const ServiceCard = ({ text, header, img }) => {
  return (
    <div className="service_card">
      <div className="service_card_inner">
        <div className="service_card_icon_div">
          <img src={img} alt="surat" className="service_card_icon" />
        </div>
        <div className="service_card_text_div">
          <h1>{header}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ServiceCard);
