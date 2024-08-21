import React from "react";

import { useNavigate } from "react-router-dom";

import button from "../images/left button.svg";

const Header = ({ header, visible, pathname }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full relative flex items-center justify-center mt-[60px] mb-[30px]">
      {visible && (
        <img
          src={button}
          alt="button"
          onClick={() => navigate(`${pathname}`)}
          className="cursor-pointer absolute left-0 top-0"
        />
      )}
      <div className=" bg-[#ECFFF5] py-2 px-6 text-center rounded-xl">
        <p className="text-[#007337] text-[18px] font-[outfit-medium]">
          {header}
        </p>
      </div>
    </div>
  );
};

export default Header;
