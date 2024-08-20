import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../images/logo.svg";
import down from "../images/down-small.svg";
import search from "../images/search.svg";
import menu from "../images/menu.svg";
import cancel from "../images/cancel.svg";
import { Drawer } from "antd";

const Naviagation = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  function Search(e) {
    e.preventDefault();
    navigate("/product?search=" + searchValue);
  }
  return (
    <div className="lg:w-[75%] w-[95%] z-50 bg-[#A0FB00D9] backdrop-blur-[8px] mx-auto rounded-[20px] px-6 py-3 mt-7 sticky top-7 flex items-center justify-between">
      <div className="relative">
        <Drawer
          placement="top"
          closable={false}
          onClose={() => setOpen(false)}
          open={open}
          key={"placement"}
        >
          <div>
            <img
              className="absolute top-3 right-3"
              src={cancel}
              onClick={() => setOpen(false)}
              alt="cancel"
            />
            <div className="drawerContainer">
              <p>Home</p>
              <p>About Us</p>
              <p>Services</p>
              <p>Products</p>
              <p>Contacts</p>
            </div>
          </div>
        </Drawer>
      </div>

      <div className="w-[193px]">
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
          Home
        </p>
        <p
          onClick={() => navigate("/about")}
          className="font-[manrope-medium] text-[#00391A] text-[14px] cursor-pointer"
        >
          About Us
        </p>
        <p
          onClick={() => navigate("/service")}
          className="font-[manrope-medium] text-[#00391A] text-[14px] cursor-pointer"
        >
          Services
        </p>
        <p
          onClick={() => navigate("/product")}
          className="font-[manrope-medium] text-[#00391A] text-[14px] cursor-pointer"
        >
          Products
        </p>
        <p
          onClick={() => navigate("/contact")}
          className="font-[manrope-medium] text-[#00391A] text-[14px] cursor-pointer"
        >
          Contacts
        </p>
      </div>

      <div className="flex items-center justify-center gap-3">
        <form
          onSubmit={Search}
          className="bg-white w-[224px] flex items-center justify-center gap-2 rounded-xl px-3 py-[11px]"
        >
          <img src={search} alt="search" className="w-[8%]" />
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="outline-0 placeholder:text-[#00391A] border-0 pl-2 w-[160px] font-[outfit-regular] text-[#00391A] text-[13px]"
            placeholder="Search..."
            type="search"
          />
        </form>

        <button className="outline-0 rounded-xl bg-white w-[100px] font-[outfit-regular]  text-[#00391A] text-[14px] flex py-2 pr-3 pl-6 items-center justify-center h-full">
          English <img src={down} className="w-[80%]" alt="down" />
        </button>

        <div className="w-[42px]  cursor-pointer h-[40px] bg-white rounded-2xl flex flex-col items-center justify-center gap-2">
          <img
            src={menu}
            onClick={() => setOpen(true)}
            className="w-[20px]"
            alt="menu"
          />
        </div>
      </div>
    </div>
  );
};

export default Naviagation;
