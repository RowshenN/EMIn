import React, { useContext, useEffect, useState } from "react";

import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import SliderProductCard from "../../components/SliderProductCard/SliderProductCard";
import { SebedimContext } from "../../context/Context";
import { axiosInstance } from "../../utils/axiosInstance";

const HomeProductSlider = () => {
  const [catDatas, setCatDatas] = useState([]);
  async function getCatData(id) {
    axiosInstance.get("/guest/category/getAll").then((resp) => {
      setCatDatas(resp?.data);
    });
  }
  useEffect(() => {
    getCatData();
  }, []);
  const { dil } = useContext(SebedimContext);

  return (
    <div className="w-full lg:mb-[125px] mb-[60px]">
      <h1 className="text-white font-[outfit-semibold] lg:text-[35px] text-[28px] mb-5">
        {dil === "en"
          ? "For 10 years, Ragbat-dag has been a trusted name in Turkmenistan's chemical industry."
          : "10 ýyl bäri Ragbat-dag Türkmenistanda himiýa senagatynda ynamdar at bolup gelýär ."}
      </h1>

      <p className="text-white font-[outfit-light] text-[15px] w-[95%] lg:mb-[70px] mb-[50px]">
        {dil === "en"
          ? "That's why we source our products from carefully vetted international suppliers and prioritize meticulous handling and storage. Our dedication to quality and safety is unwavering. We work closely with Turkmen businesses to understand their unique needs, ensuring we deliver the right solutions for your specific applications."
          : "Şonuň üçin önümlerimizi seresaplylyk bilen barlanan halkara çeşmelerinden alýarys üpjün edijiler we ünsli işlemegi we saklamagy ileri tutýarlar. Bagyşlamak hiline we howpsuzlygyna üýtgewsizdir. Türkmenler bilen ýakyndan işleşýäris üpjün edýändigimizi üpjün edip, özboluşly zerurlyklaryna düşünmek üçin kärhanalar aýratyn programmalaryňyz üçin dogry çözgütler."}
      </p>

      <div className="lg:mb-[100px] hidden lg:block mb-0 pb-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="relative h-[425px] "
          scrollbar={false}
        >
          {catDatas.map((item, i) => (
            <SwiperSlide key={i}>
              <SliderProductCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full lg:hidden grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {catDatas.map((item, i) => (
          <SliderProductCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default HomeProductSlider;
