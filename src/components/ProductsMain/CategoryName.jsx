import React from "react";

import { useNavigate } from "react-router-dom";

const CategoryName = ({ cat, click }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => click(cat?.id)}
      className="bg-[#ECFFF5] rounded-xl cursor-pointer py-2 px-5"
    >
      <p className="text-[#007337] text-[15px] font-[outfit-regular] ">
        {cat?.name_en}
      </p>
    </div>
  );
};

export default CategoryName;
