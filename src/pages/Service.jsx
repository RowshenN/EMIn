import React from "react";
import Header from "../components/Header";

import clock from "../images/clock.svg";
import message from "../images/messages.svg";
import lock from "../images/lock.svg";
import up from "../images/status-up.svg";

const Service = () => {
  return (
    <div className="lg:w-[75%] w-full px-6 mx-auto">
      <Header header={"Services"} visible={false} />

      <div className="w-full">
        <h1 className="text-white font-[outfit-semibold] text-[35px] mb-5">
          Your Complete Chemical Solutions Provider{" "}
        </h1>
        <p className="text-white font-[outfit-light] text-[15px] mb-8">
          We go beyond simply supplying chemicals. Ragbat-dag offers a
          comprehensive suite of services designed to streamline your operations
          and enhance your business performance. From expert sourcing and
          reliable delivery to technical support and specialized solutions,
          we're your partner in maximizing the potential of your chemical needs.
        </p>
      </div>

      <div className="w-full mt-[70px] mb-[120px]">
        <div className="w-full flex items-center justify-center mb-8">
          <div className="w-[310px] bg-[#ECFFF5] p-6 rounded-2xl">
            <img src={clock} alt="clock" />
            <p className="w-[20%] my-3 font-[outfit-medium] text-[#00391A] text-[20px]">
              Quality Assurance
            </p>
            <p className="font-[outfit-light] text-[#026533] text-[16px] ">
              Thorough product testing and/or working with suppliers who
              maintain strict quality control.
            </p>
          </div>
        </div>

        <div className="w-full flex lg:flex-row flex-col items-center justify-center gap-8">
          <div className="w-[310px] bg-[#ECFFF5] p-6 rounded-2xl">
            <img src={up} alt="clock" />
            <p className="w-[20%] my-3 font-[outfit-medium] text-[#00391A] text-[20px]">
              Quality Assurance
            </p>
            <p className="font-[outfit-light] text-[#026533] text-[16px] ">
              Thorough product testing and/or working with suppliers who
              maintain strict quality control.
            </p>
          </div>
          <div className="w-[310px] bg-[#ECFFF5] p-6 rounded-2xl">
            <img src={lock} alt="clock" />
            <p className="w-[20%] my-3 font-[outfit-medium] text-[#00391A] text-[20px]">
              Quality Assurance
            </p>
            <p className="font-[outfit-light] text-[#026533] text-[16px] ">
              Thorough product testing and/or working with suppliers who
              maintain strict quality control.
            </p>
          </div>
          <div className="w-[310px] bg-[#ECFFF5] p-6 rounded-2xl">
            <img src={message} alt="clock" />
            <p className="w-[20%] my-3 font-[outfit-medium] text-[#00391A] text-[20px]">
              Quality Assurance
            </p>
            <p className="font-[outfit-light] text-[#026533] text-[16px] ">
              Thorough product testing and/or working with suppliers who
              maintain strict quality control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
