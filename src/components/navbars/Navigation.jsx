import React, { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import logo from "../../images/logo.svg";
import globe from "../../images/globe.svg";
import vector from "../../images/Vector.svg";
import burger from "../../images/burger-button.svg";
import { Drawer } from "antd";

import { SebedimContext } from "../../context/Context";

const Navigation = () => {
  const { dil, ChangeDil } = useContext(SebedimContext);
  const [lang, setLang] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="lg:w-[90%] sm:w-full mx-auto mt-[20px]">
      <div className="w-full flex items-center justify-between">
        {/* Drawer div */}
        <div className="hidden">
          <Drawer
            placement="top"
            closable={false}
            onClose={() => setOpen(false)}
            open={open}
            key={"placement"}
          >
            <div className="flex items-center text-[14px] font-[poppins-medium] justify-center gap-4">
              <div className="flex flex-col py-[10px] px-5 rounded-[29px] w-full items-start justify-start gap-5">
                <p
                  onClick={() => navigate("/about")}
                  className="w-full cursor-pointer"
                >
                  About us
                </p>

                <p
                  onClick={() => navigate("/turkmenistan")}
                  className="cursor-pointer w-full"
                >
                  Turkmenistan
                </p>
                <p
                  onClick={() => navigate("/tours")}
                  className="flex cursor-pointer w-full items-center justify-start gap-2"
                >
                  Tours <img src={vector} alt="vector" />
                </p>
                <p
                  onClick={() => navigate("/hotels")}
                  className="cursor-pointer w-full"
                >
                  Hotels
                </p>
                <p
                  onClick={() => navigate("/visa")}
                  className="cursor-pointer w-full"
                >
                  Visa
                </p>
                <p
                  onClick={() => navigate("/blog")}
                  className="cursor-pointer w-full"
                >
                  Blog
                </p>
                <p
                  onClick={() => navigate("/contact")}
                  className="cursor-pointer w-full"
                >
                  Contact Us
                </p>
              </div>
            </div>
          </Drawer>
        </div>

        <div onClick={() => navigate("/")} className="w-[75px] cursor-pointer">
          <img src={logo} className="w-full object-contain" alt="logo" />
        </div>

        <div className="flex items-center justify-center gap-5">
          {/* nav itmes */}
          <div className="flex items-center text-[14px] font-[poppins-medium] justify-center gap-4">
            <div className="sm:hidden lg:flex bg-[#F9F9F9] py-[10px] px-5 rounded-[29px] w-full items-center justify-center gap-9">
              <p onClick={() => navigate("/about")} className="cursor-pointer">
                About us
              </p>

              <p
                onClick={() => navigate("/turkmenistan")}
                className="cursor-pointer"
              >
                Turkmenistan
              </p>
              <p
                onClick={() => navigate("/tours")}
                className="flex cursor-pointer items-center justify-center gap-2"
              >
                Tours <img src={vector} alt="vector" />
              </p>
              <p onClick={() => navigate("/hotels")} className="cursor-pointer">
                Hotels
              </p>
              <p onClick={() => navigate("/visa")} className="cursor-pointer">
                Visa
              </p>
              <p onClick={() => navigate("/blog")} className="cursor-pointer">
                Blog
              </p>
            </div>

            <div
              onClick={() => setLang(!lang)}
              className="bg-[#F9F9F9] relative cursor-pointer py-[10px] px-5 gap-2 rounded-[29px] flex items-center justify-center"
            >
              <img src={globe} alt="globe" />
              <p>{dil === "tm" ? "TM" : dil === "ru" ? "RU" : dil === "tr" ? "TR" : "EN"} </p>

              <div
                onMouseLeave={() => setLang(false)}
                className={
                  (lang === true ? "flex " : " hidden ") +
                  "absolute top-11 flex flex-col py-1 items-center justify-end gap-2 rounded-[20px] w-fit px-8 bg-[#F9F9F9] z-50 "
                }
              >
                <div
                  onClick={() => ChangeDil("tm")}
                  className="hover:text-black"
                >
                  TM
                </div>
                <div
                  onClick={() => ChangeDil("ru")}
                  className="hover:text-black"
                >
                  RU
                </div>
                <div
                  onClick={() => ChangeDil("en")}
                  className="hover:text-black"
                >
                  EN
                </div>
                <div
                  onClick={() => ChangeDil("tr")}
                  className="hover:text-black"
                >
                  TR
                </div>
              </div>
            </div>
          </div>

          {/* burger buton */}
          <div
            onClick={() => setOpen(true)}
            className="lg:hidden sm:block cursor-pointer"
          >
            <img src={burger} alt="burger" />
          </div>
        </div>

        {/* contact button */}
        <div
          onClick={() => navigate("/contact")}
          className="bg-[#009833] sm:hidden lg:block cursor-pointer py-[10px] px-5 text-[14px] font-[poppins-medium] text-white rounded-[29px]"
        >
          <button className="w-full outline-none">Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
