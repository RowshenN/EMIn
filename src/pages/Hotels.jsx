import React, { useEffect, useState } from "react";

import HotleCards from "../components/hotels/HotleCards";
import surat from "../images/hotelMain.png";
import Navigation from "../components/navbars/Navigation";
import AreYouReady from "../components/AreYouReady";
import { axiosInstance } from "../utils/axiosInstance";
import Pagination from "../components/Pagination";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [current, setCurrent] = useState(hotels.current_page);
  const [tests, setTests] = useState([]);
  const [pages, setPages] = useState([]);

  const [filter, setFilter] = useState({
    limit: 10,
    page: 1,
    search_query: "",
    deleted: null,
    active: null,
    order: 0,
  });

  useEffect(() => {
    getHotels();
  }, []);

  const getHotels = async () => {
    await axiosInstance
      .get("/hotels")
      .then((data) => {
        setHotels(data.data.data);
        console.log(data.data);
        setTests(data.data);
        let i = 1;
        let array = [];
        let end = data?.data?.count / filter?.limit;
        if (data?.data?.count % filter?.limit > 0) {
          end = end + 1;
        }
        while (i <= end) {
          array.push(i);
          i++;
        }
        setPages([...array]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="sm:w-[94%] md:w-[95%] mx-auto">
        <Navigation />
      </div>
      <div className="w-[90%] mx-auto mt-6 sm:mb-[70px] md:mb-[170px]">
        <div className="w-full relative sm:mb-6 md:mb-[64px] ">
          <img
            src={surat}
            alt="surat"
            className="rounded-[23px] sm:h-[123px] md:h-full w-full object-cover"
          />
          <p className="absolute sm:top-[26%] xs:top-[35%] sm:left-[35%] xs:left-[40%] md:left-[43%] text-white md:text-[35px] sm:text-[26px] lg:text-[50px] font-[poppins-semibold] ">
            Hotels
          </p>
        </div>

        <div className="w-full">
          <h1 className="sm:text-[18px] md:text-[32px] font-[poppins-semibold]">
            Find your good hotel
          </h1>

          <p className="sm:text-[12px] md:text-[16px] font-[poppins-regular] sm:w-full md:w-[50%] mb-[48px] mt-4 ">
            Lorem ipsum dolor sit amet consectetur. Quam placerat viverra
            phasellus lorem viverra massa purus platea.
          </p>

          <div>
            <div className="w-full grid sm:gap-[15px] md:gap-[30px] sm:grid-cols-2 md:grid-cols-auto-fill-250 ">
              {/* {Array.from(hotels).map((item) => {
                return (
                  <HotleCards
                    key={item.id}
                    item={item}
                  />
                );
              })} */}
              <HotleCards />
              <HotleCards />
              <HotleCards />
              <HotleCards />
              <HotleCards />
              <HotleCards />
              <HotleCards />
              <HotleCards />
            </div>
            <div className="w-full mt-[40px] flex items-center gap-5 justify-center">
              <Pagination
                meta={tests?.count}
                filter={filter}
                pages={pages}
                next={() => setFilter({ ...filter, page: filter.page + 1 })}
                prev={() => setFilter({ ...filter, page: filter.page - 1 })}
                goTo={(item) => setFilter({ ...filter, page: item })}
              />
            </div>
          </div>
        </div>
      </div>

      <AreYouReady />
    </>
  );
};

export default Hotels;
