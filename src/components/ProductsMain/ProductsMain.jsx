import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import file from "../../images/file-download.svg";
import button from "../../images/product_button.svg";
import CategoryName from "./CategoryName";
import ProductSliderCard from "./ProductSliderCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { axiosInstance } from "../../utils/axiosInstance";
import { SebedimContext } from "../../context/Context";

const ProductsMain = ({ visibility }) => {
  const [cat, setCat] = useState([]);
  const [catDatas, setCatDatas] = useState([]);
  const [catId, setCatId] = useState("");
  async function getCatData(id) {
    axiosInstance.get("/guest/product/getAll?categoryId=" + id).then((resp) => {
      setCatDatas(resp?.data?.products);
      setCatId(id);
    });
  }

  async function getAll() {
    axiosInstance
      .get("/guest/category/getAll")
      .then((res) => {
        setCat(res.data);
        getCatData(res?.data?.[0]?.id);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getAll();
  }, []);
  const navigate = useNavigate();
  const { dil } = useContext(SebedimContext);
  return (
    <div className="w-full lg:mb-[125px] mb-[70px]">
      {visibility && (
        <div className="w-full flex lg:flex-row flex-col items-start lg:items-center justify-start lg:justify-between mb-11">
          <div className="lg:w-[55%] w-full mb-[40px] lg:mb-0">
            <h1 className="text-white font-[outfit-semibold] text-[35px] mb-4">
              {dil === "en" ? "Our Products" : "Önümlerimiz"}
            </h1>
            <p className="text-white font-[outfit-light] text-[15px]">
              {dil === "en"
                ? "We go beyond simply supplying chemicals. Ragbat-dag offers a comprehensive suite of services designed to streamline your operations and enhance your business performance."
                : "Diňe himiki maddalar bilen üpjün etmekden has ýokary. Ragbat-dag a tertipleşdirmek üçin döredilen giňişleýin hyzmatlar toplumy amallar we iş netijäňizi ýokarlandyrmak."}
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 bg-white py-2 px-3 rounded-xl text-[#00391A] sm:text-[14px] md:text-[16px] font-[outfit-regular]">
            <img src={file} className="sm:w-[30px] md:w-[39px]" alt="file" />
            <p>
              {" "}
              {dil === "en"
                ? "Download Catalogue"
                : "Katalogy göçürip alyň"}{" "}
              (PDF)
            </p>
          </div>
        </div>
      )}

      <div className="w-full">
        <div className="w-full flex flex-wrap items-center justify-center md:justify-start gap-3 mb-10">
          {cat.map((cats, i) => (
            <CategoryName cat={cats} click={getCatData} key={i} />
          ))}
        </div>

        <div className="w-full lg:flex hidden items-start justify-center gap-3 h-full">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="relative h-[460px] w-full"
            scrollbar={false}
          >
            {catDatas?.map((item, i) => (
              <SwiperSlide className="h-full">
                <ProductSliderCard item={item} key={i} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            onClick={() => navigate(`/category-inner?categoryId=${catId}`)}
            className="w-[142px] cursor-pointer rounded-r-2xl flex flex-col items-center justify-center bg-[#A0FB00D9] bg-opacity-85 h-[225px] lg:h-[400px]"
          >
            <p className="text-center mb-4 text-[#00391A] font-[outfit-regular] text-[20px] ">
              {dil === "en" ? "See All Products" : "Ähli önümler"}
            </p>
            <img src={button} className="w-[40px]" alt="button" />
          </div>
        </div>

        <div className="grid lg:hidden sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {catDatas?.map((item, i) => (
            <ProductSliderCard item={item} key={i} />
          ))}
        </div>
        <button
          onClick={() => navigate(`/category-inner?categoryId=${catId}`)}
          className="w-full my-8 py-5 rounded-2xl outline-none lg:hidden block font-[manrope-semibold] text-[#00391A] text-[15px] md:text-[18px] bg-white"
        >
          {dil === "en" ? "See All Products" : "Ähli önümler"}
        </button>
      </div>
    </div>
  );
};

export default ProductsMain;
