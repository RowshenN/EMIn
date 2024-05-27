import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { axiosInstance } from "../../utils/axiosInstance";
import { SebedimContext } from "../../context/Context";
import "./GalleryInner.css";
import { FaArrowLeft } from "react-icons/fa";

const GalleryInner = () => {
  const navigate = useNavigate();
  const [gallery, setGallery] = useState([]);
  const [name, setName] = useState({
    name_en: "",
    name_tm: "",
    name_ru: "",
  });
  const { dil } = useContext(SebedimContext);
  useEffect(() => {
    getGallery();
  }, []);

  const { uuid } = useParams();

  const getGallery = async () => {
    await axiosInstance
      .get(`guest/gallery/getOne/${uuid}`)
      .then((res) => {
        console.log(res.data);
        setGallery(res.data.another);
        setName({
          ...name,
          name_en: res.data.name_en,
          name_ru: res.data.name_ru,
          name_tm: res.data.name_tm,
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-full mb-[60px]">
      <FaArrowLeft
        onClick={() => navigate("/gallery")}
        className="galleryInner_icon"
      />
      <div className="galleryInner_inner">
        <h1 data-aos="fade-down" className="galleyInner_header">
          {dil === "tm"
            ? name.name_tm
            : dil === "ru"
            ? name.name_ru
            : name.name_en}
        </h1>
        <div className="galleryInner_images_div">
          {gallery.map((item) => {
            return (
              <img
                data-aos="zoom-in-right"
                src={item.img}
                alt="surat"
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GalleryInner;
