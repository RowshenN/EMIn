import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../images/logo.svg";
import down from "../images/down-small.svg";
import search from "../images/search.svg";
import menu from "../images/menu.svg";
import cancel from "../images/cancel.svg";
import { SebedimContext } from "../context/Context";
import { Drawer } from "antd";

const Naviagation = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  function Search(e) {
    e.preventDefault();
    navigate("/product?search=" + searchValue);
  }
  const { dil, ChangeDil } = useContext(SebedimContext);
  const [lang, setLang] = useState(false);
  console.log(dil);

  return (
    <>
      <div className="lg:w-[95%] w-[95%] z-50 bg-[#A0FB00D9] backdrop-blur-[8px] mx-auto rounded-[20px] px-6 py-3 mt-7 sticky top-7 flex items-center justify-between">
        <div className="sm:w-[150px] md:w-[193px]">
          <img
            onClick={() => navigate("/")}
            className="w-full object-contain cursor-pointer"
            src={logo}
            alt="logo"
          />
        </div>

        <div className="xl:flex hidden items-center justify-center gap-6">
          <p
            onClick={() => navigate("/")}
            className="font-[manrope-medium] text-[#00391A] text-[14px] cursor-pointer "
          >
            {dil === "tm" ? "Esasy" : "Home"}
          </p>
          <p
            onClick={() => navigate("/about")}
            className="font-[manrope-medium] text-[#00391A] text-[14px] cursor-pointer"
          >
            {dil === "tm" ? "Biz Barada" : "About Us"}
          </p>
          <p
            onClick={() => navigate("/service")}
            className="font-[manrope-medium] text-[#00391A] text-[14px] cursor-pointer"
          >
            {dil === "tm" ? "Hyzmatlar" : "Services"}
          </p>
          <p
            onClick={() => navigate("/product")}
            className="font-[manrope-medium] text-[#00391A] text-[14px] cursor-pointer"
          >
            {dil === "tm" ? "Önümler" : "Products"}
          </p>
          <p
            onClick={() => navigate("/contact")}
            className="font-[manrope-medium] text-[#00391A] text-[14px] cursor-pointer"
          >
            {dil === "tm" ? "Habarlaşmak" : "Contacts"}
          </p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <form
            onSubmit={Search}
            className="bg-white hidden md:flex items-center justify-center gap-2 rounded-xl px-[14px] py-[11px]"
          >
            <img src={search} alt="search" className="w-[8%]" />
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="outline-0 placeholder:text-[#00391A] border-0 pl-2 w-[160px] font-[outfit-regular] text-[#00391A] text-[13px]"
              placeholder={dil === "en" ? "Search..." : "Gözle..."}
              type="search"
            />
          </form>

          <button
            onClick={() => setLang(!lang)}
            className="outline-0 relative hidden rounded-xl py-2 bg-white w-full font-[outfit-regular]  text-[#00391A] text-[14px] md:flex items-center justify-center"
          >
            {dil === "tm" ? "Türkmençe" : "English"}{" "}
            <img src={down} className="w-[22px]" alt="down" />
            {lang && (
              <div
                onMouseLeave={() => setLang(false)}
                className="absolute bottom-[-115px] right-[-10px] p-2 rounded-xl bg-white "
              >
                <p
                  onClick={() => ChangeDil("en")}
                  className={
                    dil === "en"
                      ? "text-[#00391A] active_nav mb-2 hover:bg-[#EDFFCE] transition duration-300 ease-linear rounded-xl font-[outfit-regular] text-[16px] py-2 px-3"
                      : "text-[#00391A] mb-2 hover:bg-[#EDFFCE] transition duration-300 ease-linear rounded-xl font-[outfit-regular] text-[16px] py-2 px-3 "
                  }
                >
                  English
                </p>
                <p
                  className={
                    dil === "tm"
                      ? "text-[#00391A] active_nav mb-2 hover:bg-[#EDFFCE] transition duration-300 ease-linear rounded-xl font-[outfit-regular] text-[16px] py-2 px-3"
                      : "text-[#00391A] mb-2 hover:bg-[#EDFFCE] transition duration-300 ease-linear rounded-xl font-[outfit-regular] text-[16px] py-2 px-3 "
                  }
                  onClick={() => ChangeDil("tm")}
                >
                  Türkmençe
                </p>
              </div>
            )}
          </button>

          <div className="md:hidden block bg-white px-2 py-[10px] cursor-pointer rounded-xl">
            <img
              src={search}
              onClick={() => setIsSearch(!isSearch)}
              alt="search"
              className="w-full"
            />
          </div>

          <div className="p-3 md:h-full h-[40px] w-[50px] md:hidden cursor-pointer bg-white rounded-xl flex items-center justify-center">
            <img
              src={menu}
              className="w-[45px]"
              onClick={() => setOpen(true)}
              alt="menu"
            />
          </div>
        </div>
      </div>

      {isSearch && (
        <form
          onSubmit={Search}
          className="w-[90%] mx-auto mt-3 px-2 py-1 rounded-xl bg-white"
        >
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="outline-0 placeholder:text-[#00391A] border-0 py-2 px-2 w-full font-[outfit-regular] text-[#00391A] text-[13px]"
            placeholder={dil === "en" ? "Search..." : "Gözle..."}
            type="search"
          />
        </form>
      )}

      <div className="relative">
        <Drawer
          placement="top"
          closable={false}
          onClose={() => setOpen(false)}
          open={open}
          key={"placement"}
        >
          <div className="h-full">
            <img
              className="absolute top-3 right-3 cursor-pointer w-[30px]"
              src={cancel}
              onClick={() => setOpen(false)}
              alt="cancel"
            />
            <div className="w-full py-4">
              <p
                onClick={() => navigate("/")}
                className="font-[manrope-medium] text-[#00391A] py-1 text-[16px] cursor-pointer "
              >
                {dil === "tm" ? "Esasy" : "Home"}
              </p>
              <p
                onClick={() => navigate("/about")}
                className="font-[manrope-medium] text-[#00391A] py-1 text-[16px] cursor-pointer"
              >
                {dil === "tm" ? "Biz Barada" : "About Us"}
              </p>
              <p
                onClick={() => navigate("/service")}
                className="font-[manrope-medium] text-[#00391A] py-1 text-[16px] cursor-pointer"
              >
                {dil === "tm" ? "Hyzmatlar" : "Services"}
              </p>
              <p
                onClick={() => navigate("/product")}
                className="font-[manrope-medium] text-[#00391A] py-1 text-[16px] cursor-pointer"
              >
                {dil === "tm" ? "Önümler" : "Products"}
              </p>
              <p
                onClick={() => navigate("/contact")}
                className="font-[manrope-medium] text-[#00391A] py-1 text-[16px] cursor-pointer"
              >
                {dil === "tm" ? "Habarlaşmak" : "Contacts"}
              </p>
            </div>

            <div className="w-full flex items-center justify-start">
              <div className="">
                <button
                  onClick={() => ChangeDil("en")}
                  className={
                    dil === "en"
                      ? "text-[#00391A] active_nav mb-2 hover:bg-[#EDFFCE] transition duration-300 ease-linear rounded-xl font-[outfit-regular] text-[16px] py-2 px-3"
                      : "text-[#00391A] mb-2 hover:bg-[#EDFFCE] transition duration-300 ease-linear rounded-xl font-[outfit-regular] text-[16px] py-2 px-3 "
                  }
                >
                  English
                </button>
                <button
                  onClick={() => ChangeDil("tm")}
                  className={
                    dil === "tm"
                      ? "text-[#00391A] active_nav mb-2 hover:bg-[#EDFFCE] transition duration-300 ease-linear rounded-xl font-[outfit-regular] text-[16px] py-2 px-3"
                      : "text-[#00391A] mb-2 hover:bg-[#EDFFCE] transition duration-300 ease-linear rounded-xl font-[outfit-regular] text-[16px] py-2 px-3 "
                  }
                >
                  Türkmençe
                </button>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Naviagation;
