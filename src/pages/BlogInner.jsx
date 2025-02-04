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

  const lastThreeBlogs = blogs.length-3
  const NewBlogs = Array.from(blogs).slice(lastThreeBlogs,blogs.length)

  console.log(blogs.length);
  
  return (
    <>
      <Navigation />
      <div className="w-[90%] mx-auto mt-[37px] mb-[190px] ">
        <div className="w-full rounded-[22px] mb-[33px]">
          <img src={blog?.banner} alt="sell" className="w-full h-[523px] rounded-[22px] object-cover" />
        </div>

        <div className="w-[95%] mx-auto">
          <div className="mb-[26px]">
            <div className="w-full flex items-center justify-between mb-[18px]">
              <p className="text-[30px] font-[poppins-semibold] ">
                {blog?.name}
              </p>
              <p className="text-[#717171] text-[18px] font-[poppins-regular]  ">
                18 Oct 2024
              </p>
            </div>

            <p className="text-[18px] font-[poppins-regular] mb-[26px]">
              {blog?.description}
            </p>

            <p className="text-[18px] font-[poppins-regular]">
              Lorem ipsum dolor sit amet consectetur. Urna auctor consectetur
              nullam cras massa. Vel vitae ante lacus condimentum eget consequat
              pretium ut. Malesuada felis ut ut pellentesque ultrices in.
              Interdum lorem dui amet rhoncus morbi dolor vel.
            </p>
          </div>

          <div className="w-full flex items-start justify-center gap-[40px] mb-[145px] ">
            <div className="w-[50%] h-[429px] rounded-[22px]">
              <img src={surat2} alt="surat" className="w-full h-full object-cover" />
            </div>

            <div className="w-[50%]">
              <p className="text-[18px] font-[poppins-regular] mb-[26px] ">
                Lorem ipsum dolor sit amet consectetur. Urna auctor consectetur
                nullam cras massa. Vel vitae ante lacus condimentum eget
                consequat pretium ut. Malesuada felis ut ut pellentesque
                ultrices in. Interdum lorem dui amet rhoncus morbi dolor vel.
              </p>

              <p className="text-[18px] font-[poppins-regular]">
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
            <p className="text-[30px] font-[poppins-semibold] mb-[29px] ">News</p>

            <div className="w-full grid gap-[30px] grid-cols-auto-fit-150">
              {Array.from(NewBlogs).map((item) => {
                return (
                  <HomeBlogCart key={item.id} item={item}/>
                )
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
