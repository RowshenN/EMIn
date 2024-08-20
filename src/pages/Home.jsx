import React from "react";
import { useNavigate } from "react-router-dom";

import NewsMain from "../components/NewsMain/NewsMain";
import HomeProductSlider from "../components/HomeProductSlider/HomeProductSlider";
import star1 from "../images/start1.svg";
import star2 from "../images/star2.svg";
import star3 from "../images/star3.svg";
import star4 from "../images/star4.svg";
import ProductsMain from "../components/ProductsMain/ProductsMain";
import ContactMain from "../components/ContactMain/ContactMain";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:w-[75%] w-full px-6 mx-auto">
      <div className="mt-[70px] lg:w-[55%] w-full lg:mb-[290px] mb-[100px] md:mb-[170px] ">
        <h1 className="text-white lg:text-[55px] text-[40px] font-[outfit-semibold] mb-3 leading-snug ">
          Your Trusted Source of High-Quality Chemical Solutions
        </h1>

        <p className="text-white lg:text-[18px] text-[15px] w-[85%] font-[outfit-light] lg:mb-12 mb-8 ">
          Supplying Turkmenistan's diverse industries with essential chemicals
          for detergent, food, gas, paint solvents, plastics, and more
        </p>

        <button className="lg:w-[220px] w-[190px] bg-white rounded-2xl py-4 px-5 font-[outfit-regular] text-[#00391A] text-[15px]">
          Explore Our Products
        </button>
      </div>

      <NewsMain />
      <HomeProductSlider />

      {/* stars div */}
      <div className="w-full flex flex-col lg:flex-row items-start justify-between mb-[100px]">
        <div className="lg:w-[40%] md:w-[80%] w-full mb-[40px] md:mb-0">
          <h1 className="text-white font-[outfit-semibold] text-[27px] md:text-[35px] mb-5">
            Your Complete Chemical Solutions Provider{" "}
          </h1>
          <p className="text-white font-[outfit-light] text-[15px] mb-8">
            We go beyond simply supplying chemicals. Ragbat-dag offers a
            comprehensive suite of services designed to streamline your
            operations and enhance your business performance. From expert
            sourcing and reliable delivery to technical support and specialized
            solutions, we're your partner in maximizing the potential of your
            chemical needs.
          </p>
          <button
            onClick={() => navigate("/service")}
            className="bg-white rounded-2xl py-4 px-5 font-[outfit-regular] w-[130px] text-[#00391A] text-[15px] "
          >
            More Info
          </button>
        </div>

        <div className="lg:w-[90%] md:block hidden w-full -z-10">
          <div className="flex items-center justify-end gap-1">
            <img className="w-[250px]" src={star1} alt="star" />
            <img className="w-[250px]" src={star2} alt="star" />
          </div>
          <div className="flex items-center justify-center gap-1 ml-[-60px] mt-[-60px]">
            <img className="md:w-[250px] w-[200px]" src={star3} alt="star" />
            <img className="md:w-[250px] w-[200px]" src={star4} alt="star" />
          </div>
        </div>

        <div className="w-full md:ml-[50px] lg:hidden grid md:hidden grid-cols-2 gap-4">
          <img
            className="md:w-[250px] w-[200px] md:ml-[-110px]"
            src={star1}
            alt="star"
          />
          <img
            className="md:w-[250px] w-[200px] md:ml-[-110px]"
            src={star1}
            alt="star"
          />
          <img
            className="md:w-[250px] w-[200px] md:ml-[-110px]"
            src={star1}
            alt="star"
          />
          <img
            className="md:w-[250px] w-[200px] md:ml-[-110px]"
            src={star1}
            alt="star"
          />
        </div>
      </div>

      <ProductsMain visibility={true} />
      <ContactMain />
    </div>
  );
};

export default Home;
