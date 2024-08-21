import React, { useEffect, useState, useContext } from "react";

import Header from "../components/Header";
import NewsCards from "../components/NewsMain/NewsCards";
import NewsBigCard from "../components/NewsMain/NewsBigCard";
import { axiosInstance } from "../utils/axiosInstance";
import formatDate from "../components/formatDate";
import { SebedimContext } from "../context/Context";

const NewsList = () => {
  const { dil } = useContext(SebedimContext);
  const [newsData, setNewsData] = useState([]);
  async function getAllNews(params) {
    axiosInstance.get("/guest/news/getAll").then((res) => {
      setNewsData(res?.data?.news);
    });
  }
  useEffect(() => {
    getAllNews();
  }, []);
  return (
    <div className="w-full px-6 lg:w-[95%] mx-auto">
      <Header
        header={dil == "en" ? "News" : "Habarlar"}
        visible={true}
        pathname={"/"}
      />

      <div className="w-full flex items-start justify-between gap-7 mb-[60px]">
        <div className="w-full  flex flex-col items-baseline justify-start gap-4">
          {Array.from(newsData).map((item, i) => (
            <NewsBigCard
              key={i}
              id={item?.uuid}
              header={dil == "en" ? item.name_en : item.name_tm}
              text={item.desc_en}
              date={formatDate(item?.createdAt)}
              hour={""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
