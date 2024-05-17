import React from "react";

import "./NewCard.css";
// import surat from "../../images/destination-2.jpg";

const NewCard = ({ name, desc, img, id }) => {
  return (
    <div key={id} className="newscard_container">
      <div className="newscard_img_div">
        <img src={img} alt="surat" />
      </div>

      <div className="news_card_text_div">
        <h1>{name}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default NewCard;
