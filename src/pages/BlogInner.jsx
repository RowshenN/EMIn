import React, { useEffect, useState } from "react";

import surat from "../images/blog-inner.png";
import surat2 from "../images/blog-inner-2.png";
import Navigation from "../components/navbars/Navigation";
import AreYouReady from "../components/AreYouReady";
import HomeBlogCart from "../components/HomeBlogCart";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";

const BlogInner = () => {
  const [blog, setBlog] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getHotelInner();
  }, []);

  const getHotelInner = async () => {
    await axiosInstance
      .get(`/blog/${id}/details`)
      .then((res) => {
        setBlog(res.data.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

  const lastThreeBlogs = blogs.length - 3;
  const NewBlogs = Array.from(blogs).slice(lastThreeBlogs, blogs.length);

  console.log(blogs.length);

  return (
    <>
      <div className="sm:w-[94%] md:w-[95%] mx-auto">
        <Navigation />
      </div>
      <div className="sm:w-[94%] md:w-[90%] mx-auto sm:mt-[32px] md:mt-[37px] sm:mb-[140px] md:mb-[190px] ">
        <div className="w-full rounded-[22px] sm:mb-2 md:mb-[33px]">
          <img
            // src={blog?.banner}
            src={surat}
            alt="sell"
            className="w-full sm:h-[300px] md:h-[523px] rounded-[22px] object-cover"
          />
        </div>

        <div className="w-[95%] mx-auto">
          <div className="mb-[26px]">
            <div className="w-full md:flex-row sm:flex-col sm:justify-start flex sm:items-baseline md:items-center md:justify-between mb-[18px]">
              <p className="sm:text-[18px] md:text-[30px] md:mb-0 sm:mb-2 font-[poppins-semibold] ">
                {/* {blog?.name} */} Hiking in the Karakum desert
              </p>
              <p className="text-[#717171] sm:text-[16px] md:text-[18px] font-[poppins-regular]  ">
                18 Oct 2024
              </p>
            </div>

            <p className="sm:text-[12px] md:text-[18px] font-[poppins-regular] sm:mb-4 md:mb-[26px]">
              {/* {blog?.description} */} Lorem ipsum dolor sit amet
              consectetur. Sit fermentum nulla sit nunc curabitur pretium
              faucibus nibh turpis. Etiam ullamcorper eget mollis velit rhoncus
              amet. Posuere molestie dictum neque ultricies tincidunt vel
              convallis at. Amet egestas molestie adipiscing senectus quam
              egestas ultricies. In fringilla luctus fames molestie mauris
              sollicitudin adipiscing arcu turpis. Feugiat consequat ipsum eu
              nunc sed quis. Volutpat odio auctor integer vitae curabitur duis.
              Odio fringilla posuere aliquam nunc elit nisl fermentum rhoncus.
              Eleifend sed pellentesque auctor mauris vel. Magna donec consequat
              quis mi curabitur quam. Arcu neque suspendisse aenean volutpat
              adipiscing venenatis etiam nisl. Eleifend nunc eu a sagittis
              vitae. Amet enim lobortis ridiculus lacus. Nullam lorem mattis
              convallis laoreet volutpat mauris praesent. Aliquet in ornare
              aliquam quam. A faucibus ante eu nibh nibh volutpat. Libero nisl
              elementum erat in egestas integer vitae. Mattis volutpat tortor
              facilisis amet. Quis elementum leo sit felis. Mi tellus ut cras
              purus amet ipsum massa.
            </p>

            <p className="sm:text-[12px] md:text-[18px] font-[poppins-regular]">
              Lorem ipsum dolor sit amet consectetur. Urna auctor consectetur
              nullam cras massa. Vel vitae ante lacus condimentum eget consequat
              pretium ut. Malesuada felis ut ut pellentesque ultrices in.
              Interdum lorem dui amet rhoncus morbi dolor vel.
            </p>
          </div>

          <div className="w-full md:flex-row sm:flex-col flex items-start justify-center sm:gap-[23px] md:gap-[40px] sm:mb-[43px] md:mb-[145px] ">
            <div className="sm:w-full md:w-[50%] sm:h-full md:h-[429px]">
              <img
                src={surat2}
                alt="surat"
                className="w-full h-full object-cover rounded-[22px]"
              />
            </div>

            <div className="sm:w-full md:w-[50%]">
              <p className="sm:text-[12px] md:text-[18px] font-[poppins-regular] sm:mb-4 md:mb-[26px] ">
                Lorem ipsum dolor sit amet consectetur. Urna auctor consectetur
                nullam cras massa. Vel vitae ante lacus condimentum eget
                consequat pretium ut. Malesuada felis ut ut pellentesque
                ultrices in. Interdum lorem dui amet rhoncus morbi dolor vel.
              </p>

              <p className="sm:text-[12px] md:text-[18px] font-[poppins-regular]">
                Lorem ipsum dolor sit amet consectetur. Sit fermentum nulla sit
                nunc curabitur pretium faucibus nibh turpis. Etiam ullamcorper
                eget mollis velit rhoncus amet. Posuere molestie dictum neque
                ultricies tincidunt vel convallis at. Amet egestas molestie
                adipiscing senectus quam egestas ultricies. In fringilla luctus
                fames molestie mauris sollicitudin adipiscing arcu turpis.
                Feugiat consequat ipsum eu nunc sed quis. Volutpat odio auctor
                integer vitae curabitur duis. Odio fringilla posuere aliquam
                nunc elit nisl fermentum rhoncus. Eleifend sed pellentesque
                auctor mauris vel. Magna donec consequat quis mi curabitur quam.
                Arcu neque suspendisse aenean volutpat adipiscing venenatis
                etiam nisl. Eleifend nunc eu a sagittis vitae. Amet enim
                lobortis ridiculus lacus. Nullam lorem mattis convallis laoreet
                volutpat mauris praesent.{" "}
              </p>
            </div>
          </div>

          {/* News */}
          <div className="w-full">
            <p className="sm:text-[20px] md:text-[30px] font-[poppins-semibold] mb-[29px] ">
              News
            </p>

            <div className="w-full grid sm:gap-[15px] md:gap-[30px] sm:grid-cols-1 md:grid-cols-auto-fit-150">
              {/* {Array.from(NewBlogs).map((item) => {
                return <HomeBlogCart key={item.id} item={item} />;
              })} */}
              <HomeBlogCart />
              <HomeBlogCart />
              <HomeBlogCart />
              <HomeBlogCart />
              <HomeBlogCart />
              <HomeBlogCart />
            </div>
          </div>
        </div>
      </div>

      <AreYouReady />
    </>
  );
};

export default BlogInner;
