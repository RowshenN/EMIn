import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import surat1 from "../images/block-image.png";
import surat2 from "../images/blovk-image2.png";
import surat from "../images/blogmain.png";
import Navigation from "../components/navbars/Navigation";
import BlogCart from "../components/BlogCart";
import AreYouReady from "../components/AreYouReady";
import { axiosInstance } from "../utils/axiosInstance";

import { SebedimContext } from "../context/Context";

const Blog = () => {
  const { dil } = useContext(SebedimContext);
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getHotels();
  }, [dil]);

  const getHotels = async () => {
    try {
      const response = await axiosInstance.get(`/blogs`, {
        headers: {
          "Accept-Language": dil,
        },
      });
      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setBlogs(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const TopFour = blogs.slice(0, 4);
  const otherBlogs = blogs.slice(4, blogs.length);

  const dateString1 = TopFour[1]?.created_at;
  const date1 = new Date(dateString1);
  const year1 = date1.getFullYear();
  const month1 = String(date1.getMonth() + 1).padStart(2, "0"); // Pad with '0'
  const day1 = String(date1.getDate()).padStart(2, "0"); // Pad with '0'

  const dateString3 = TopFour[3]?.created_at;
  const date3 = new Date(dateString3);
  const year3 = date3.getFullYear();
  const month3 = String(date3.getMonth() + 1).padStart(2, "0"); // Pad with '0'
  const day3 = String(date3.getDate()).padStart(2, "0"); // Pad with '0'
  return (
    <>
      <Navigation />
      <div className="w-[90%] mx-auto mt-6 sm:mb-[160px] md:mb-[170px]">
        <div className="w-full flex items-center justify-center relative sm:mb-10 md:mb-[64px] ">
          <img
            src={surat}
            alt="surat"
            className="rounded-[23px] sm:h-[123px] md:h-full w-full object-cover"
          />
          <p className="absolute text-white md:text-[35px] sm:text-[26px] lg:text-[50px] font-[poppins-semibold] ">
            {dil === "tk"
              ? "Blog"
              : dil === "ru"
              ? "Блог"
              : dil === "tr"
              ? "Blog"
              : "Blog"}
          </p>
        </div>

        <div className="md:w-full xl:w-[90%] mx-auto">
          <div className="w-full mb-[44px]">
            <div className="mb-[44px] w-full md:flex-row sm:flex-col flex items-start justify-center md:gap-[40px] xl:gap-[51px] ">
              <div className="sm:w-full md:w-[30%] md:mb-0 sm:mb-[25px] ">
                <p className="sm:text-[20px] md:text-[32px] font-[poppins-semibold] sm:mb-[14px] md:mb-[25px] ">
                  {dil === "tk"
                    ? "Meşhur"
                    : dil === "ru"
                    ? "Популярный"
                    : dil === "tr"
                    ? "Popüler"
                    : "Popular"}
                </p>
                <p className="sm:text-[12px] md:text-[16px] font-[poppins-regular] sm:mb-[47px] md:mb-[119px]">
                  {dil === "tk"
                    ? "Emin Hyzmat syýahat kärhanasyndan syýahat habarlary, wiza täzelikleri we ýörite teklipler bilen tanyş boluň! Täze ýerleri biziň bilen öwreniň."
                    : dil === "ru"
                    ? "Будьте в курсе последних новостей о путешествиях, обновлениях виз и специальных предложениях от туристического агентства Emin Hyzmat! Открывайте новые направления вместе с нами."
                    : dil === "tr"
                    ? "Emin Hyzmat seyahat acentesinden en son seyahat haberleri, vize güncellemeleri ve özel teklifleri takip edin! Yeni destinasyonları bizimle keşfedin."
                    : "Stay updated with the latest travel news, visa updates, and special offers from Emin Hyzmat Travel Agency! Explore new destinations with us."}
                </p>

                <BlogCart item={TopFour[0]} />
              </div>

              <div className=" sm:w-full md:w-[70%] ">
                <p className="md:block sm:hidden text-[32px] font-[poppins-semibold] mb-[25px]">
                  {dil === "tk"
                    ? "Habarlar"
                    : dil === "ru"
                    ? "Новости"
                    : dil === "tr"
                    ? "Haberler"
                    : "News"}
                </p>
                <div
                  className="cursor-pointer"
                  onClick={() => navigate(`/blog-inner/${TopFour[1].id}`)}
                >
                  <div className="mb-[18px] w-full">
                    <img
                      src={TopFour[1]?.banner}
                      alt="surat"
                      className="w-full sm:h-[200px] md:h-[530px] rounded-[22px] object-cover"
                    />
                  </div>
                  <p className="sm:text-[18px] md:text-[24px] font-[poppins-semibold]">
                    {TopFour[1]?.name}
                  </p>
                  <p className="sm:text-[14px] md:text-[16px] font-[poppins-regular] text-[#717171]">
                    {`${year1}-${month1}-${day1}`}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:flex-row sm:flex-col flex items-start justify-center sm:gap-[25px] md:gap-[51px] ">
              <div className="sm:w-full md:w-[30%]">
                <BlogCart item={TopFour[2]} />
              </div>

              <div className="sm:w-full md:w-[70%]">
                <div
                  className="cursor-pointer"
                  onClick={() => navigate(`/blog-inner/${TopFour[3].id}`)}
                >
                  <div className="mb-[18px] w-full rounded-[22px]">
                    <img
                      className="w-full sm:h-[200px] md:h-[275px] xl:h-[314px] rounded-[22px] object-cover"
                      src={TopFour[3]?.banner}
                      alt="alt"
                    />
                  </div>
                  <p className="sm:text-[18px] md:text-[24px] font-[poppins-semibold]">
                    {TopFour[3]?.name}
                  </p>
                  <p className="sm:text-[14px] md:text-[16px] font-[poppins-regular] text-[#717171]">
                    {`${year3}-${month3}-${day3}`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full grid sm:gap-[25px] md:gap-[30px] sm:grid-cols-1 md:grid-cols-auto-fit-150">
            {Array.from(otherBlogs).map((item) => {
              return <BlogCart key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>

      <AreYouReady />
    </>
  );
};

export default Blog;
