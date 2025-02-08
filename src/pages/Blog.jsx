import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import surat1 from "../images/block-image.png";
import surat2 from "../images/blovk-image2.png";
import surat from "../images/blogmain.png";
import Navigation from "../components/navbars/Navigation";
import BlogCart from "../components/BlogCart";
import AreYouReady from "../components/AreYouReady";
import { axiosInstance } from "../utils/axiosInstance";

const Blog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getHotels();
  }, []);

  const getHotels = async () => {
    await axiosInstance
      .get("/blogs")
      .then((res) => {
        setBlogs(res.data.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const TopFour = blogs.slice(0, 4);
  const otherBlogs = blogs.slice(4, blogs.length);
  return (
    <>
      <div className="sm:w-[94%] md:w-[95%] mx-auto">
        <Navigation />
      </div>
      <div className="w-[90%] mx-auto mt-6 sm:mb-[160px] md:mb-[170px]">
        <div className="w-full relative sm:mb-10 md:mb-[64px] ">
          <img
            src={surat}
            alt="surat"
            className="rounded-[23px] sm:h-[123px] md:h-full w-full object-cover"
          />
          <p className="absolute sm:top-[28%] xs:top-[35%] sm:left-[37%] xs:left-[40%] md:left-[43%] text-white md:text-[35px] sm:text-[26px] lg:text-[50px] font-[poppins-semibold] ">
            Blog
          </p>
        </div>

        <div className="md:w-full xl:w-[90%] mx-auto">
          <div className="w-full mb-[44px]">
            <div className="mb-[44px] w-full md:flex-row sm:flex-col flex items-start justify-center md:gap-[40px] xl:gap-[51px] ">
              <div className="sm:w-full md:w-[30%] md:mb-0 sm:mb-[25px] ">
                <p className="sm:text-[20px] md:text-[32px] font-[poppins-semibold] sm:mb-[14px] md:mb-[25px] ">
                  Popular
                </p>
                <p className="sm:text-[12px] md:text-[16px] font-[poppins-regular] sm:mb-[47px] md:mb-[119px]">
                  Lorem ipsum dolor sit amet consectetur. Quam placerat viverra
                  phasellus lorem viverra massa purus platea.
                </p>

                <BlogCart item={TopFour[0]} />
              </div>

              <div className=" sm:w-full md:w-[70%] ">
                <p className="md:block sm:hidden text-[32px] font-[poppins-semibold] mb-[25px]">
                  Articles
                </p>
                <div
                  className="cursor-pointer"
                  onClick={() => navigate(`/blog-inner/${TopFour[1].id}`)}
                >
                  <div className="mb-[18px] w-full">
                    <img
                      // src={TopFour[1]?.banner}
                      src={surat1}
                      alt="surat"
                      className="w-full sm:h-[200px] md:h-[497px] rounded-[22px] object-cover"
                    />
                  </div>
                  <p className="sm:text-[18px] md:text-[24px] font-[poppins-semibold]">
                    {/* {TopFour[1]?.name} */} Exploring the Wonders of the
                    Northern Lights
                  </p>
                  <p className="sm:text-[14px] md:text-[16px] font-[poppins-regular] text-[#717171]">
                    18 Oct 2024
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
                  onClick={() => navigate("/blog-inner")}
                >
                  <div className="mb-[18px] w-full rounded-[22px]">
                    <img
                      className="w-full sm:h-[200px] md:h-[275px] xl:h-[314px] rounded-[22px] object-cover"
                      // src={TopFour[3]?.banner}
                      src={surat2}
                      alt="alt"
                    />
                  </div>
                  <p className="sm:text-[18px] md:text-[24px] font-[poppins-semibold]">
                    {/* {TopFour[3]?.name} */} 5 Surprising Facts About
                    Amsterdam Nights
                  </p>
                  <p className="sm:text-[14px] md:text-[16px] font-[poppins-regular] text-[#717171]">
                    18 Oct 2024
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full grid sm:gap-[25px] md:gap-[30px] sm:grid-cols-1 md:grid-cols-auto-fit-150">
            {/* {Array.from(otherBlogs).map((item) => {
              return <BlogCart key={item.id} item={item} />;
            })} */}
            <BlogCart />
            <BlogCart />
            <BlogCart />
            <BlogCart />
            <BlogCart />
          </div>
        </div>
      </div>

      <AreYouReady />
    </>
  );
};

export default Blog;
