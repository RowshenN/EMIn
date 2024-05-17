import React, { useState, useEffect, useContext } from "react";

import "./Gallery.css";
import HomeMain from "../../components/homemain/HomeMain";
import Footer from "../../components/footer/Footer";
import GalleryCard from "./GalleryCard";
import { axiosInstance } from "../../utils/axiosInstance";
import { SebedimContext } from "../../context/Context";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import cancel from "../../images/cancel.svg";
import Address from "../../components/address/Address";
import Navigation2 from "../../components/Navigation2/Navigation2";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  // const [openSlide, setOpenSlide] = useState(false);
  // const [indexSlide, setIndexSlide] = useState(0);
  const { dil } = useContext(SebedimContext);
  useEffect(() => {
    getGallery();
  }, []);

  const getGallery = async () => {
    await axiosInstance
      .get("guest/gallery/getAll")
      .then((res) => {
        console.log(res.data);
        setGallery(res.data);
      })
      .catch((err) => console.log(err));
  };

  // console.log(gallery);

  // const nextSlide = () => {
  //   if (indexSlide == gallery.length - 1) {
  //     setIndexSlide(0);
  //   }
  //   setIndexSlide((prev) => prev + 1);
  //   console.log(indexSlide);
  // };

  // const prevSlide = () => {
  //   if (indexSlide == 0) {
  //     setIndexSlide(gallery.length - 1);
  //   }
  //   setIndexSlide((prev) => prev - 1);
  //   console.log(indexSlide);
  // };

  return (
    <React.Fragment>
      {/* <HomeMain /> */}
      <Address />
      <Navigation2 />
      <div className="gallery_container">
        <div data-aos="zoom-in-right" className="gallery_inner_container">
          {gallery.map((item, i) => {
            return (
              <React.Fragment>
                <GalleryCard
                  key={item.id + "t"}
                  img={item.img}
                  index={i}
                  // setIndexSlide={setIndexSlide}
                  header={
                    dil === "tm"
                      ? item?.name_tm
                      : dil === "ru"
                      ? item?.name_ru
                      : item?.name_en
                  }
                  // setOpenSlide={setOpenSlide}
                />
              </React.Fragment>
            );
          })}
        </div>

        {/* {openSlide && (
          <div data-aos="fade-up" className="gallery_image_slider">
            <div className="gallery_image_slider_inner">
              <button
                onClick={() => setOpenSlide(false)}
                className="gallery_image_cancel"
              >
                <img src={cancel} alt="cancel" />
              </button>
              <button
                className="prevButton"
                onClick={() => prevSlide()}
                style={{ top: "47%", left: "-8%" }}
              >
                <FaArrowLeft />
              </button>
              <img
                data-aos="zoom-out"
                id="galley_img"
                src={gallery[indexSlide].img}
                alt="surat"
              />
              <button
                className="prevButton"
                onClick={() => nextSlide()}
                style={{ top: "47%", right: "-8%" }}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        )} */}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default React.memo(Gallery);
