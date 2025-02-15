import React, { useState, useContext } from "react";

import plus from "../../images/testimon green +.svg";
import icon from "../../images/Testimonials.png";
import bigsurat from "../../images/testimon-big.svg";
import { ReactComponent as StarEmpty } from "../../images/empty-star.svg"; // Import as component
import { ReactComponent as StarFilled } from "../../images/filled-star.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { message } from "antd";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import TestimonialCards from "../testimonials/TestimonialCards";
import { SebedimContext } from "../../context/Context";
import { axiosInstance } from "../../utils/axiosInstance";

const HotelTestimonial = ({ id, hotel_tests }) => {
  const { dil } = useContext(SebedimContext);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0); // Initialize rating to 0
  const [hoverRating, setHoverRating] = useState(0); // For hover effect
  const [submitting, setSubmitting] = useState(false); // Add submitting state
  const [hotels, setHotels] = useState([]);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const handleStarHover = (index) => {
    setHoverRating(index + 1);
  };

  const handleStarLeave = () => {
    setHoverRating(0);
  };

  const stars = Array.from({ length: 5 }, (_, i) => {
    const StarIcon = i < (hoverRating || rating) ? StarFilled : StarEmpty;
    return (
      <StarIcon
        key={i}
        width={20}
        height={20}
        onClick={() => handleStarClick(i)}
        onMouseEnter={() => handleStarHover(i)}
        onMouseLeave={handleStarLeave}
        className="star-icon !w-[20px !h-[20px] object-cover cursor-pointer"
      />
    );
  });

  const [testimonial, setTestimonial] = useState({
    reviewable_id: id,
    full_name: "",
    message: "",
    rating: rating,
  });
  //   useEffect(() => {
  //     getTestimonial();
  //   }, []);

  //   const getTestimonial = async () => {
  //     try {
  //       const response = await axiosInstance.get(`/testimonials`, {
  //         headers: {
  //           "Accept-Language": dil,
  //         },
  //       });
  //       setHotels(response.data.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  const posTestimonial = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      message.warning("Please select a rating before submitting.");
      return;
    }

    if (!testimonial.message) {
      message.warning("Please write a testimonial before submitting.");
      return;
    }

    if (!testimonial.full_name) {
      message.warning("Please enter your full name before submitting.");
      return;
    }

    const data = {
      // Create a plain JavaScript object
      reviewable_id: testimonial.reviewable_id,
      full_name: testimonial.full_name,
      message: testimonial.message,
      rating: rating, // Use the rating state directly
    };

    setSubmitting(true);
    try {
      const response = await axiosInstance.post("/hotels/testimonials", data, {
        // Send the object
        headers: {
          "Content-Type": "application/json", // VERY IMPORTANT! Tell the server it's JSON
        },
      });

      message.success("Testimonial submitted successfully!");
      setTestimonial({
        full_name: "",
        message: "",
        rating: 0,
      });
      console.log(response);
      setOpen(false)
    } catch (error) {
      console.error("Error submitting testimonial:", error);
      message.error("Error submitting testimonial. Please try again.");

      // More detailed error handling for debugging:
      if (error.response) {
        console.error("Response data:", error.response.data); // Log response data
        console.error("Response status:", error.response.status); // Log status code
        console.error("Response headers:", error.response.headers); // Log headers
      } else if (error.request) {
        console.error("Request:", error.request); // Log request if no response
      } else {
        console.error("Error message:", error.message); // Log error message
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full relative overflow-hidden md:mb-[130px]">
      <div className="w-full flex items-center justify-center sm:mb-[30px] md:mb-[70px]">
        <div className="flex w-fit mx-auto items-center justify-center gap-2 relative">
          <h1 className="md:text-[50px] sm:text-[24px] lg:text-[61px] font-[poppins-bold] ">
            {dil === "tk"
              ? "Synlar"
              : dil === "ru"
              ? "Отзывы"
              : dil === "tr"
              ? "Müşteri yorumları"
              : "Testimonials"}
          </h1>
          <img
            onClick={() => setOpen(true)}
            src={plus}
            alt="plus"
            className="cursor-pointer object-cover md:w-[38px] sm:w-[18px] "
          />
          <img
            src={icon}
            alt="icon"
            className="absolute w-full -z-10 top-1 bottom-0 left-0 right-0"
          />
        </div>
      </div>

      <div className="w-[92%] float-right z-10">
        <Swiper
          breakpoints={{
            320: {
              width: 320,
              slidesPerView: 1.4,
            },
            760: {
              width: 760,
              slidesPerView: 2.3,
            },
            1200: {
              width: 1200,
              slidesPerView: 3.3,
            },
          }}
          slidesPerView={3.3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="relative h-[300px]"
          scrollbar={false}
        >
          {hotel_tests?.map((item) => (
            <SwiperSlide key={item.id}>
              <TestimonialCards item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <img
        src={bigsurat}
        alt="surat"
        className="absolute w-fit -z-10 left-0 top-8"
      />

      {open && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setOpen(false);
            }
          }}
          className="fixed  bg-black/20 z-50 flex items-center justify-center top-0 left-0 bottom-0 right-0"
        >
          <div className="rounded-[20px] w-[320px] z-30 bg-white py-5 sm:px-5 xs:px-[27px] ">
            <div className="w-full flex gap-6 items-center justify-between mb-4">
              <p className="text-[16px] font-[poppins-semibold] ">
                Testimonial
              </p>
              <div className="flex items-center justify-center gap-1">
                {stars}
                <p className="text-[16px] font-[poppins-semibold]">{rating}</p>
              </div>
            </div>

            <form className="w-full flex flex-col items-baseline justify-center gap-3">
              <textarea
                value={testimonial.message}
                onChange={(e) =>
                  setTestimonial({ ...testimonial, message: e.target.value })
                }
                className="w-full min-h-[100px] py-[7px] px-[11px] bg-[#FAFAFA] rounded-[6px] border border-solid border-[#DADADA] outline-none font-[poppins-regular] "
                placeholder="Text"
              ></textarea>
              <input
                value={testimonial.full_name}
                onChange={(e) =>
                  setTestimonial({ ...testimonial, full_name: e.target.value })
                }
                className="w-full p-[11px] bg-[#FAFAFA] rounded-[6px] border border-solid border-[#DADADA] outline-none font-[poppins-regular] "
                type="text"
                placeholder="Fullname"
              />
              <button
                className="w-full text-[16px] font-[poppins-medium] py-[13px] bg-[#009833] rounded-[6px] outline-none flex items-center justify-center text-white"
                onClick={(e) => posTestimonial(e)}
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Add"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelTestimonial;
