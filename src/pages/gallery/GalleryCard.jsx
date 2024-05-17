import React from "react";

import "./GalleryCard.css";

const GalleryCard = ({ header, img, index, setIndexSlide, setOpenSlide }) => {
  return (
    <div
      onClick={() => setIndexSlide(index)}
      className="gallery_card_container"
    >
      <div onClick={() => setOpenSlide(true)} className="gallery_img_div">
        <img src={img} alt="surat" />
      </div>

      <div className="gallery_img_description">
        <h1>{header}</h1>
      </div>
    </div>
  );
};

export default GalleryCard;
