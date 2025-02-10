import React, { useContext } from "react";

import Navigation from "../components/navbars/Navigation";

import surat from "../images/aboutmain.png";
import line from "../images/line.svg";
import big from "../images/aboutbigsvg.svg";
import AreYouReady from "../components/AreYouReady";
import { SebedimContext } from "../context/Context";

const About = () => {
  const { dil } = useContext(SebedimContext);
  return (
    <>
      <Navigation />
      <div className="md:w-full sm:w-[94%] mx-auto">
        <div className="w-full relative mt-10">
          <div className="sm:w-full md:w-[90%] mx-auto sm:mb-[100px] md:mb-[185px]">
            <div className="w-full relative sm:mb-10 md:mb-[64px] ">
              <img
                src={surat}
                alt="surat"
                className="rounded-[23px] sm:h-[123px] md:h-full w-full object-cover"
              />
              <p className="absolute sm:top-[26%] xs:top-[35%] sm:left-[35%] xs:left-[40%] md:left-[43%] text-white md:text-[35px] sm:text-[26px] lg:text-[50px] font-[poppins-semibold] ">
                {dil === "tk"
                  ? "Hakymyzda"
                  : dil === "ru"
                  ? "О нас"
                  : dil === "tr"
                  ? "Haberler"
                  : "About us"}
              </p>
            </div>

            <div className="w-full">
              <div className="w-full flex items-center justify-center flex-col sm:mb-[40px] md:mb-[65px] ">
                <p className="sm:text-[24px] xs:text-[35px] md:text-[46px] font-[poppins-semibold] ">
                  Emin Hyzmat
                </p>
                <img
                  className="sm:mt-[-5px] md:mt-[-10px] object-contain sm:w-[50%] md:w-fit"
                  src={line}
                  alt="line"
                />
              </div>

              <p className="text-[#878787] sm:text-[12px] md:text-[16px] font-[poppins-medium] mb-5 w-[97%] ">
                Lorem ipsum dolor sit amet consectetur. Metus accumsan malesuada
                tortor a mauris nam eleifend vitae at. Et vitae sollicitudin
                ultricies viverra pulvinar commodo. Tristique diam eu quis non
                dolor elementum mauris at. Vivamus iaculis duis amet nam at
                tempus tristique. Cursus nec augue sit sed amet sed rhoncus sit
                massa. In pulvinar vivamus pulvinar est neque mi et quam.
                Ullamcorper sed nec lobortis eu amet. Ultrices vitae amet sed ac
                malesuada egestas volutpat. Faucibus risus morbi nisl sed.
                Mauris mattis semper posuere sed laoreet sed nibh ultricies.
                Morbi fringilla nibh diam tempor quam neque elementum a nisl.
              </p>
              <p className="text-[#878787] sm:text-[12px] md:text-[16px] font-[poppins-medium] mb-5 w-[97%] ">
                Lorem ipsum dolor sit amet consectetur. Metus accumsan malesuada
                tortor a mauris nam eleifend vitae at. Et vitae sollicitudin
                ultricies viverra pulvinar commodo. Tristique diam eu quis non
                dolor elementum mauris at. Vivamus iaculis duis amet nam at
                tempus tristique. Cursus nec augue sit sed amet sed rhoncus sit
                massa. In pulvinar vivamus pulvinar est neque mi et quam.
                Ullamcorper sed nec lobortis eu amet.{" "}
              </p>
              <p className="text-[#878787] sm:text-[12px] md:text-[16px] font-[poppins-medium] w-[97%] ">
                Lorem ipsum dolor sit amet consectetur. Metus accumsan malesuada
                tortor a mauris nam eleifend vitae at. Et vitae sollicitudin
                ultricies viverra pulvinar commodo. Tristique diam eu quis non
                dolor elementum mauris at. Vivamus iaculis duis amet nam at
                tempus tristique. Cursus nec augue sit sed amet sed rhoncus sit
                massa. In pulvinar vivamus pulvinar est neque mi et quam.
                Ullamcorper sed nec lobortis eu amet. Ultrices vitae amet sed ac
                malesuada egestas volutpat. Faucibus risus morbi nisl sed.
                Mauris mattis semper posuere sed laoreet sed nibh ultricies.
                Morbi fringilla nibh diam tempor quam neque elementum a nisl.
              </p>
            </div>
          </div>

          <img
            src={big}
            alt="big"
            className="top-0 object-contain w-[85%] -z-10 left-0 right-0 absolute"
          />

          <AreYouReady />
        </div>
      </div>
    </>
  );
};

export default About;
