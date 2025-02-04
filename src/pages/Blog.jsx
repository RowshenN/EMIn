import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const otherBlogs = blogs.slice(4, blogs.length)
  return (
    <>
      <Navigation />
      <div className="w-[90%] mx-auto mt-6 mb-[170px]">
        <div className="w-full relative rounded-[23px] mb-[61px] ">
          <img src={surat} alt="surat" className=" w-full object-cover" />
          <p className="absolute top-[35%] left-[43%] text-white text-[50px] font-[poppins-semibold] ">
            Blog
          </p>
        </div>

        <div className="w-[90%] mx-auto">
          <div className="w-full mb-[44px]">
            <div className="mb-[44px] w-full flex items-start justify-center gap-[51px] ">
              <div className="w-[30%]">
                <p className="text-[32px] font-[poppins-semibold] mb-[25px] ">
                  Popular
                </p>
                <p className="text-[16px] font-[poppins-regular] mb-[119px]">
                  Lorem ipsum dolor sit amet consectetur. Quam placerat viverra
                  phasellus lorem viverra massa purus platea.
                </p>

                <BlogCart
                  item={TopFour[0]}
                />
              </div>

              <div className="w-[70%] ">
                <p className="text-[32px] font-[poppins-semibold] mb-[25px]">
                  Articles
                </p>
                <div
                  className="cursor-pointer"
                  onClick={() => navigate(`/blog-inner/${TopFour[1].id}`)}
                >
                  <div className="mb-[18px] w-full">
                    <img src={TopFour[1]?.banner} alt="surat" className="w-full h-[497px] rounded-[22px] object-cover" />
                  </div>
                  <p className="text-[24px] font-[poppins-semibold]">
                    {TopFour[1]?.name}
                  </p>
                  <p className="text-[16px] font-[poppins-regular] text-[#717171]">
                    18 Oct 2024
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex items-start justify-center gap-[51px] ">
              <div className="w-[30%]">
                <BlogCart
                  item={TopFour[2]}
                />
              </div>

              <div className="w-[70%]">
                <div
                  className="cursor-pointer"
                  onClick={() => navigate("/blog-inner")}
                >
                  <div className="mb-[18px] w-full rounded-[22px]">
                    <img className="w-full h-[314px] rounded-[22px] object-cover" src={TopFour[3]?.banner} alt="alt" />
                  </div>
                  <p className="text-[24px] font-[poppins-semibold]">
                    {TopFour[3]?.name}
                  </p>
                  <p className="text-[16px] font-[poppins-regular] text-[#717171]">
                    18 Oct 2024
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full grid gap-[30px] grid-cols-auto-fit-150">
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
