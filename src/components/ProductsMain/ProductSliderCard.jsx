import React, { useState } from "react";

import arrow from "../../images/news-arrow.svg";
import right from "../../images/arrow-right.svg";
import cancel from "../../images/cancel.svg";
import surat from "../../images/modalImg.png";

const ProductSliderCard = ({ item }) => {
  const [modalOpen, setModalOpen] = useState(false);
  console.log(item);
  return (
    <>
      <div
        onClick={() => setModalOpen(!modalOpen)}
        className="relative cursor-pointer w-full h-[400px] z-10"
      >
        <img
          src={item?.img || surat}
          alt="surat"
          className="w-full object-cover rounded-[20px] -z-10 h-full "
        />
        <img
          src={arrow}
          alt="arrow"
          className="absolute top-3 right-2 w-[15%] z-10 "
        />
        <div className="absolute bottom-3 z-10 right-[-10px] lg:right-3 w-full lg:w-[91%]">
          <p className="text-white break-words font-[manrope-semibold] text-[15px] w-full lg:w-[50%] mb-4">
            {item?.name_en}
          </p>
          <div className=" py-3 px-4 w-[90%] rounded-xl bg-white bg-opacity-70 flex items-center justify-between">
            <p className="text-[#007337] text-[13px] font-[manrope-medium] ">
              See Details
            </p>
            <img src={right} alt="right" />
          </div>
        </div>

        <div className="absolute top-0 right-0 left-0 bottom-0 rounded-[20px] bg-black bg-opacity-30"></div>
      </div>

      {/* {modalOpen && (
        <div className="  w-full fixed z-50 top-0 bottom-0 left-0 right-0 bg-black/50 flex items-center justify-center ">
          <div className="bg-white scrollHidden overflow-auto my-6 max-h-[70vh] relative p-[60px] rounded-[20px] w-[65%] h-fit">
            <img
              src={cancel}
              alt="cancel"
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setModalOpen(!modalOpen)}
            />

            <div className="w-full flex items-start gap-[50px] justify-between">
              <div className="w-full max-w-[350px]">
                <img
                  src={item?.img}
                  alt="surat"
                  className="w-full object-cover"
                />
              </div>

              <div className="w-[50%]">
                <h1 className="text-[#00391A] font-[outfit-semibold] text-[35px] mb-[30px] ">
                  {item?.name_en}
                </h1>
                <p className="text-[#00391A] font-[outfit-light] text-[18px]">
                  {item?.desc_en}
                </p>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default ProductSliderCard;
