import React, { useEffect, useState, useContext } from "react";

// import surat from "../images/blog-inner.png";
// import surat2 from "../images/blog-inner-2.png";
import Navigation from "../components/navbars/Navigation";
import AreYouReady from "../components/AreYouReady";
import HomeBlogCart from "../components/HomeBlogCart";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import { SebedimContext } from "../context/Context";

const BlogInner = () => {
  const { dil } = useContext(SebedimContext);
  const [blog, setBlog] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const { id } = useParams();

  const getHotelInner = async () => {
    try {
      const response = await axiosInstance.get(`/blog/${id}/details`, {
        headers: {
          "Accept-Language": dil,
        },
      });
      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setBlog(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

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

  useEffect(() => {
    getHotelInner();
    getHotels();
  }, [dil,id]);

  const lastThreeBlogs = blogs.length - 3;
  const NewBlogs = Array.from(blogs).slice(lastThreeBlogs, blogs.length);

  const sentences = blog?.description?.split(". ");
  const cleanedSentences = sentences?.map((s) => s.trim());
  const fisryt_desc = cleanedSentences?.slice(0, 5);
  const last_desc = cleanedSentences?.slice(5, cleanedSentences.length);

  const dateString = blog?.created_at;
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Pad with '0'
  const day = String(date.getDate()).padStart(2, "0"); // Pad with '0'
  return (
    <>
      <Navigation />
      <div className="sm:w-[94%] md:w-[90%] mx-auto sm:mt-[32px] md:mt-[37px] sm:mb-[140px] md:mb-[190px] ">
        <div className="w-full  sm:h-[300px] md:h-[523px]  rounded-[22px] sm:mb-2 md:mb-[33px]">
          <img
            src={blog?.banner}
            alt="sell"
            className="w-full h-full rounded-[22px] object-cover"
          />
        </div>

        <div className="w-[95%] mx-auto">
          <div className="mb-[26px]">
            <div className="w-full md:flex-row sm:flex-col sm:justify-start flex sm:items-baseline md:items-center md:justify-between mb-[18px]">
              <p className="sm:text-[18px] md:text-[30px] md:mb-0 sm:mb-2 font-[poppins-semibold] ">
                {blog?.name}
              </p>
              <p className="text-[#717171] sm:text-[16px] md:text-[18px] font-[poppins-regular]  ">
                {`${year}-${month}-${day}`}
              </p>
            </div>

            <p className="sm:text-[12px] md:text-[18px] font-[poppins-regular] sm:mb-4 md:mb-[26px]">
              {blog?.images?.length > 0 ? fisryt_desc : blog?.description}
            </p>
          </div>

          {blog?.images?.length > 0 && (
            <div className="w-full md:flex-row sm:flex-col flex items-start justify-center sm:gap-[23px] md:gap-[40px] sm:mb-[43px] md:mb-[145px] ">
              <div className="sm:w-full md:w-[50%] sm:h-full md:h-[429px]">
                <img
                  src={blog?.images?.[0]}
                  alt="surat"
                  className="w-full h-full object-cover rounded-[22px]"
                />
              </div>

              <div className="sm:w-full md:w-[50%]">
                <p className="sm:text-[12px] md:text-[18px] font-[poppins-regular] sm:mb-4 md:mb-[26px] ">
                  {last_desc}
                </p>
              </div>
            </div>
          )}

          {/* News */}
          <div className="w-full">
            <p className="sm:text-[20px] md:text-[30px] font-[poppins-semibold] mb-[29px] ">
              {dil === "tk"
                ? "Habarlar"
                : dil === "ru"
                ? "Новости"
                : dil === "tr"
                ? "Haberler"
                : "News"}
            </p>

            <div className="w-full grid sm:gap-[15px] md:gap-[30px] sm:grid-cols-1 md:grid-cols-auto-fit-150">
              {Array.from(NewBlogs).map((item) => {
                return <HomeBlogCart key={item.id} item={item} />;
              })}
            </div>
          </div>
        </div>
      </div>

      <AreYouReady />
    </>
  );
};

export default BlogInner;
