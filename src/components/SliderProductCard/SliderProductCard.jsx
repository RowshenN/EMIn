import React from "react";

import arrow from "../../images/news-arrow.svg";

const SliderProductCard = () => {
  return (
    <div className="relative cursor-pointer">
      <img
        src="https://s3-alpha-sig.figma.com/img/e0cb/6948/7d7da702ca4bc15ac73887ee93cee6a2?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cb9P7E7W9g2rvDccPm1Foz6dekXfXzXQaE31Ksgjrt5nGb1e~l4mi8HY~9~eUCov0mhshpNRgj49FQZnoXMZ-FTMV8L~sD3tS-S85XlckrULhKPiirBbozgCqODd9O~7XVppx1Anz2mq1fZ4u2DQtKz1vv4DiHvG4VsX2laiRNoslfyDzVqEQAueXhy70LvCpmEoSk3PShluT3Afswf-NkiOo1ZbnzDmPRY6G95wKF0lMQjyAQrYmWeKgtCDkUg3F5HqzmNUnF3HN0vxBLoanv5M04Tr9gBn4jAmfnkhBD7~5BYA~Ns0Fnv6OxxT2VFZflAIfjC6-AYVuNZyQKdQuQ__"
        alt="surat"
        className="w-full object-cover rounded-[20px]"
      />
      <img
        src={arrow}
        alt="arrow"
        className="absolute top-3 right-2 w-[15%] "
      />
      <div className="text-[#007337] text-[13px] font-[manrope-medium] absolute bottom-3 right-3 bg-white bg-opacity-70 w-[91%] py-3 px-4 rounded-xl">
        <p>Detergent</p>
      </div>
    </div>
  );
};

export default SliderProductCard;
