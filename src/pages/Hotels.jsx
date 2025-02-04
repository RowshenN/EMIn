import React, { useEffect, useState } from "react";

import HotleCards from "../components/hotels/HotleCards";
import surat from "../images/hotelMain.png";
import Navigation from "../components/navbars/Navigation";
import AreYouReady from "../components/AreYouReady";
import { axiosInstance } from "../utils/axiosInstance";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [current, setCurrent] = useState(hotels.current_page);

  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };

  const IndexOfLastPost = current * hotels.per_page;
  const IndexOfFirst = IndexOfLastPost - hotels.per_page;
  const CurrentCards = hotels?.slice(IndexOfFirst,IndexOfLastPost);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(hotels.length / hotels.per_page); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrent(pageNumber)

  useEffect(() => {
    getHotels();
  }, []);

  const getHotels = async () => {
    await axiosInstance
      .get("/hotels")
      .then((res) => {
        setHotels(res.data.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navigation />
      <div className="w-[90%] mx-auto mt-6 mb-[170px]">
        <div className="w-full relative rounded-[23px] mb-[61px] ">
          <img src={surat} alt="surat" className=" w-full object-cover" />
          <p className="absolute top-[35%] left-[43%] text-white text-[50px] font-[poppins-semibold] ">
            Hotels
          </p>
        </div>

        <div className="w-full">
          <h1 className="text-[32px] font-[poppins-semibold]">
            Find your good hotel
          </h1>

          <p className="text-[16px] font-[poppins-regular] w-[50%] mb-[48px] mt-4 ">
            Lorem ipsum dolor sit amet consectetur. Quam placerat viverra
            phasellus lorem viverra massa purus platea.
          </p>

          <div>
            <div className="w-full grid gap-[30px] grid-cols-auto-fill-250 ">
              {Array.from(hotels).map((item) => {
                return (
                  <HotleCards
                    key={item.id}
                    item={item}
                  />
                );
              })}
            </div>
            <div className="w-full mt-[40px] flex items-center gap-5 justify-center">
              {/* <Pagination
                current={current}
                onChange={onChange}
                total={50}
                itemActiveBg="red"
              /> */}
              {pageNumbers.map((number) => {
                return (
                  <div
                    key={number}
                    onClick={() => paginate(number)}
                    className="cursor-pointer bg-[#009833] text-white py-1 flex items-center justify-center px-3 rounded-full"
                  >
                    <p className="text-[14px] font-[poppins-regular] ">
                      {number}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <AreYouReady />
    </>
  );
};

export default Hotels;
