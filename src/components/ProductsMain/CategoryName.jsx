import React, { useContext } from "react";

import { SebedimContext } from "../../context/Context";

const CategoryName = ({ cat, click }) => {
  const { dil } = useContext(SebedimContext);

  return (
    <div
      onClick={() => click(cat?.id)}
      className="bg-[#ECFFF5] rounded-xl cursor-pointer py-2 px-5"
    >
      <p className="text-[#007337] text-[15px] font-[outfit-regular] ">
        {dil === "en" ? cat?.name_en : cat?.name_tm}
      </p>
    </div>
  );
};

export default CategoryName;
