import { useLocation } from "react-router-dom";

import right from "../images/right.svg";
import left from "../images/left.svg";

export default function SVGS() {
  const location = useLocation();
  return (
    <>
      <img
        src={left}
        className="absolute right-0 top-0 -z-10 w-[40%] object-contain"
        alt="svg"
      />
      {/* {location.pathname === "service" ||
      location.pathname === "product" ||
      location.pathname === "contact" ? null : (
        <img
          src={right}
          className="absolute top-[400px] w-[40%] left-[-50px] -z-10"
          alt="svg"
        />
      )} */}
    </>
  );
}
