import React, { useContext } from "react";

import "./Card.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { SebedimContext } from "../../context/Context";

const Card = ({ img, location, wagt, persons, description, price }) => {
  const { dil } = useContext(SebedimContext);
  return (
    <div className="packeges_card_div">
      <div className="packages_inner_card">
        <div className="card_img_div">
          <img src={img} alt="surat" />
        </div>

        <div className="card_info_div">
          <div className="card_info_inner">
            <FaLocationDot className="card_icon" />
            <p>{location}</p>
          </div>

          <div className="card_info_inner">
            <FaCalendarDays className="card_icon" />
            <p>
              {wagt}{" "}
              {wagt === 1
                ? dil === "tm"
                  ? "Gun"
                  : dil === "ru"
                  ? "день"
                  : "day"
                : dil === "tm"
                ? "gun"
                : dil === "ru"
                ? "дни"
                : "day"}
            </p>
          </div>

          <div className="card_info_inner">
            <FaLocationDot className="card_icon" />
            <p>
              {persons}{" "}
              {persons !== 1
                ? dil === "tm"
                  ? "adam"
                  : dil === "ru"
                  ? "люди"
                  : "people"
                : dil === "tm"
                ? "adam"
                : dil === "ru"
                ? "человек"
                : "person"}
            </p>
          </div>
        </div>

        <div className="card_inner_description">
          <div className="card_description_inner">
            <p className="card_inner_price">{price}</p>
            <p className="card_description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
