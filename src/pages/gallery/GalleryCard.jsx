import React from "react";
import { useNavigate } from "react-router-dom";

import "./GalleryCard.css";

const GalleryCard = ({ header, img, uuid }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/galleryInner/${uuid}`)}
      className="gallery_card_container"
      data-aos="zoom-in-right"
    >
      <div className="gallery_img_div">
        <img src={img} alt="surat" />
      </div>

      <div className="gallery_img_description">
        <h1>{header}</h1>
      </div>
    </div>
  );
};

export default GalleryCard;
