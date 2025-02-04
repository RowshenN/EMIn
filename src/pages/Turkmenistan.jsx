import React from "react";

import Navigation2 from "../components/navbars/Navigation2";
import AreYouReady from "../components/AreYouReady";

import surat from "../images/turkmenistan.png";
import bulut_top from "../images/Bulut yokarky.png";
import bulut_down from "../images/asaky bulut.png";
import history from "../images/history-text.svg";
import history_images from "../images/history images.png";
import culture_main from "../images/culture main.png";
import culture_text from "../images/culture-text.svg";
import tradition_images from "../images/tradition_images.png";
import tradition_text from "../images/tradition-text.svg";
import meals_text from "../images/meals-text.svg";
import meals_bottom from "../images/meal-asaky-bulut.png";
import meals_main from "../images/meal_main.png";

const Turkmenistan = () => {
  return (
    <>
      <div className="w-full">
        <Navigation2 />

        <div className="w-full -z-20 relative">
          <div>
            <img
              src={surat}
              alt="surat"
              className="w-full h-[100vh] object-cover"
            />
          </div>
          <img
            className="w-full absolute bottom-[-10px] h-[210px] object-cover"
            src={bulut_top}
            alt="cloud"
          />
        </div>

        {/* history */}
        <div className="w-[90%] mb-[69px] pt-[40px] flex lg:flex-row sm:flex-col items-center justify-center gap-[100px] mx-auto ">
          <div className="sm:w-full lg:w-[50%] ">
            <div className="mb-10 w-full flex items-center justify-center ">
              <img
                src={history}
                alt="history"
                className="sm:w-[35%] md:w-fit object-cover"
              />
            </div>

            <p className="text-[#878787] lg:text-left sm:text-center sm:text-[12px] md:text-[16px] mb-[13px] font-[poppins-medium] ">
              Lorem ipsum dolor sit amet consectetur. Metus accumsan malesuada
              tortor a mauris nam eleifend vitae at. Et vitae sollicitudin
              ultricies viverra pulvinar commodo. Tristique diam eu quis non
              dolor elementum mauris at. Vivamus iaculis duis amet nam at tempus
              tristique. Cursus nec augue sit sed amet sed rhoncus sit massa. In
              pulvinar vivamus pulvinar est neque mi et quam. Ullamcorper sed
              nec lobortis eu amet. Ultrices vitae amet sed ac malesuada egestas
              volutpat. Faucibus risus morbi nisl sed. Mauris mattis semper
              posuere sed laoreet sed nibh ultricies. Morbi fringilla nibh diam
              tempor quam neque elementum a nisl.
            </p>

            <p className="text-[#878787] sm:text-[12px] md:text-[16px] font-[poppins-medium]">
              Lorem ipsum dolor sit amet consectetur. Metus accumsan malesuada
              tortor a mauris nam eleifend vitae at. Et vitae sollicitudin
              ultricies viverra pulvinar commodo. Tristique diam eu quis non
              dolor elementum mauris at. Vivamus iaculis duis amet nam at tempus
              tristique. Cursus nec augue sit sed amet sed rhoncus sit massa. In
              pulvinar vivamus pulvinar est neque mi et quam. Ullamcorper sed
              nec lobortis eu amet.{" "}
            </p>
          </div>

          <div className="sm:w-[90%] xs:w-[70%] lg:w-[50%] ">
            <img src={history_images} className="object-cover" alt="images" />
          </div>
        </div>
      </div>

      {/* culture */}
      <div className="w-full flex items-center justify-center relative h-[100vh]">
        <img
          src={bulut_down}
          alt="cloud-down"
          className="absolute object-cover w-full !h-[170px] sm:top-[-10px] lg:top-0 left-0 "
        />

        <img
          src={culture_main}
          alt="surat"
          className="w-full h-[100vh] object-cover"
        />

        <div className="sm:w-[90%] lg:w-[66%] absolute  mx-auto ">
          <div className="w-full flex items-center justify-center">
            <img
              src={culture_text}
              alt="culture_text"
              className="sm:w-[35%] md:w-fit object-cover"
            />
          </div>

          <div className="w-full text-left lg:py-[25px] lg:px-[35px] sm:text-[12px] md:text-[16px] text-white lg:bg-black/50">
            <p>
              Lorem ipsum dolor sit amet consectetur. Metus accumsan malesuada
              tortor a mauris nam eleifend vitae at. Et vitae sollicitudin
              ultricies viverra pulvinar commodo. Tristique diam eu quis non
              dolor elementum mauris at. Vivamus iaculis duis amet nam at tempus
              tristique. Cursus nec augue sit sed amet sed rhoncus sit massa. In
              pulvinar vivamus pulvinar est neque mi et quam. Ullamcorper sed
              nec lobortis eu amet. Ultrices vitae amet sed ac malesuada egestas
              volutpat. Faucibus risus morbi nisl sed. Mauris mattis semper
              posuere sed laoreet sed nibh ultricies. Morbi fringilla nibh diam
              tempor quam neque elementum a nisl.Lorem ipsum dolor sit amet
              consectetur. Metus accumsan malesuada tortor a mauris nam eleifend
              vitae at. Et vitae sollicitudin ultricies viverra pulvinar
              commodo. Tristique diam eu quis non dolor elementum mauris at.
              Vivamus iaculis duis amet nam at tempus tristique. Cursus nec
              augue sit sed amet sed rhoncus sit massa. In pulvinar vivamus
              pulvinar est neque mi et quam. Ullamcorper sed nec lobortis eu
              amet. Ultrices vitae amet sed ac malesuada egestas volutpat.
              Faucibus risus morbi nisl sed.{" "}
            </p>
          </div>
        </div>
        <img
          src={bulut_top}
          alt="cloud-top"
          className="absolute object-cover sm:bottom-[-10px] lg:bottom-0 left-0 !h-[170px] w-full"
        />
      </div>

      {/* tradition */}
      <div className="w-[90%] mb-[69px] pt-[40px] flex lg:flex-row sm:flex-col items-center justify-center gap-[100px] mx-auto ">
        <div className="sm:w-full lg:w-[50%]">
          <div className="mb-10 w-full flex items-center justify-center ">
            <img
              src={tradition_text}
              alt="history"
              className="sm:w-[35%] md:w-fit object-cover"
            />
          </div>

          <p className="text-[#878787] lg:text-left sm:text-center sm:text-[12px] md:text-[16px] mb-[13px] font-[poppins-medium] ">
            Lorem ipsum dolor sit amet consectetur. Metus accumsan malesuada
            tortor a mauris nam eleifend vitae at. Et vitae sollicitudin
            ultricies viverra pulvinar commodo. Tristique diam eu quis non dolor
            elementum mauris at. Vivamus iaculis duis amet nam at tempus
            tristique. Cursus nec augue sit sed amet sed rhoncus sit massa. In
            pulvinar vivamus pulvinar est neque mi et quam. Ullamcorper sed nec
            lobortis eu amet. Ultrices vitae amet sed ac malesuada egestas
            volutpat. Faucibus risus morbi nisl sed. Mauris mattis semper
            posuere sed laoreet sed nibh ultricies. Morbi fringilla nibh diam
            tempor quam neque elementum a nisl.Lorem ipsum dolor sit amet
            consectetur. Metus accumsan malesuada tortor a mauris nam eleifend
            vitae at. Et vitae sollicitudin ultricies viverra pulvinar commodo.
            Tristique diam eu quis non dolor elementum mauris at. Vivamus
            iaculis duis amet nam at tempus tristique. Cursus nec augue sit sed
            amet sed rhoncus sit massa. In pulvinar vivamus pulvinar est neque
            mi et quam. Ullamcorper sed nec lobortis eu amet. Ultrices vitae
            amet sed ac malesuada egestas volutpat. Faucibus risus morbi nisl
            sed.
          </p>
        </div>

        <div className="sm:w-[90%] xs:w-[70%] lg:w-[50%] ">
          <img src={tradition_images} alt="images" className="object-cover" />
        </div>
      </div>

      {/* meals */}
      <div className="mb-[100px] w-full flex items-center justify-center relative h-[100vh]">
        <img
          src={bulut_down}
          alt="cloud-down"
          className="absolute w-full !h-[170px] sm:top-[-10px] lg:top-0 object-cover left-0 "
        />
        <img
          src={meals_main}
          alt="surat"
          className="w-full h-[100vh] object-cover"
        />
        <div className="sm:w-[90%] lg:w-[66%] absolute mx-auto ">
          <div className="w-full flex items-center justify-center">
            <img
              src={meals_text}
              alt="culture_text"
              className="sm:w-[35%] md:w-fit object-cover"
            />
          </div>

          <div className="w-full text-left lg:py-[25px] lg:px-[35px] sm:text-[12px] md:text-[16px] text-white lg:bg-black/50">
            <p>
              Lorem ipsum dolor sit amet consectetur. Metus accumsan malesuada
              tortor a mauris nam eleifend vitae at. Et vitae sollicitudin
              ultricies viverra pulvinar commodo. Tristique diam eu quis non
              dolor elementum mauris at. Vivamus iaculis duis amet nam at tempus
              tristique. Cursus nec augue sit sed amet sed rhoncus sit massa. In
              pulvinar vivamus pulvinar est neque mi et quam. Ullamcorper sed
              nec lobortis eu amet. Ultrices vitae amet sed ac malesuada egestas
              volutpat. Faucibus risus morbi nisl sed. Mauris mattis semper
              posuere sed laoreet sed nibh ultricies. Morbi fringilla nibh diam
              tempor quam neque elementum a nisl.Lorem ipsum dolor sit amet
              consectetur. Metus accumsan malesuada tortor a mauris nam eleifend
              vitae at. Et vitae sollicitudin ultricies viverra pulvinar
              commodo. Tristique diam eu quis non dolor elementum mauris at.
              Vivamus iaculis duis amet nam at tempus tristique. Cursus nec
              augue sit sed amet sed rhoncus sit massa. In pulvinar vivamus
              pulvinar est neque mi et quam. Ullamcorper sed nec lobortis eu
              amet. Ultrices vitae amet sed ac malesuada egestas volutpat.
              Faucibus risus morbi nisl sed.
            </p>
          </div>
        </div>
        <img
          src={meals_bottom}
          alt="cloud-top"
          className="absolute object-cover sm:bottom-[-10px] lg:bottom-0 left-0 !h-[170px] w-full"
        />
      </div>

      <AreYouReady />
    </>
  );
};

export default Turkmenistan;
