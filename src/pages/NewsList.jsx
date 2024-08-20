import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import NewsCards from "../components/NewsMain/NewsCards";
import NewsBigCard from "../components/NewsMain/NewsBigCard";
import { axiosInstance } from "../utils/axiosInstance";

const NewsList = () => {
  const [newsData, setNewsData] = useState([]);
  async function getAllNews(params) {
    axiosInstance.get("/guest/news/getAll").then((res) => {
      setNewsData(res?.data);
    });
  }
  useEffect(() => {
    getAllNews();
  }, []);
  return (
    <div className="w-full px-6 lg:w-[75%] mx-auto">
      <Header header={"News"} visible={true} pathname={"/"} />

      <div className="w-full flex items-start justify-between gap-7 mb-[60px]">
        <div className="w-full  flex flex-col items-baseline justify-start gap-4">
          {newsData.map((item, i) => (
            <NewsBigCard
              key={i}
              header={item.name_en}
              text={item.desc_en}
              date={item.createdAt}
              hour={"12:50"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
