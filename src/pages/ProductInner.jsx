import React, { useEffect, useState, useContext } from "react";
import Header from "../components/Header";

import surat from "../images/NewImg.png";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import formatDate from "../components/formatDate";
import { SebedimContext } from "../context/Context";

const ProductInner = () => {
  const { dil } = useContext(SebedimContext);
  const { id } = useParams();
  console.log(id);
  const [newsData, setNewsData] = useState();
  async function getAllNews(params) {
    axiosInstance.get("/guest/product/getOne/" + id).then((res) => {
      setNewsData(res?.data);
    });
  }

  useEffect(() => {
    getAllNews();
  }, []);

  // Output: 20 August 2024 12:25
  return (
    <div className="w-full px-6 lg:w-[60%] mx-auto">
      <Header
        header={dil == "en" ? "Product" : "Haryt"}
        visible={true}
        pathname={"/"}
      />

      <div className="w-full">
        <div className="flex items-center justify-start gap-4 text-white font-[outfit-light] text-[14px] mb-5">
          <p>{formatDate(newsData?.createdAt)}</p>
        </div>

        <h1 className="text-white font-[outfit-bold] text-[25px] lg:text-[36px] mb-[50px] ">
          {dil == "en" ? newsData?.name_en : newsData?.name_tm}
        </h1>

        <div>
          <img
            className="h-[400px] object-cover w-full"
            src={newsData?.img}
            alt="surat"
          />
        </div>

        <p className="text-white font-[outfit-light] text-[16px] my-[50px]">
          {dil == "en" ? newsData?.desc_en : newsData?.desc_tm}
        </p>
      </div>
    </div>
  );
};

export default ProductInner;
