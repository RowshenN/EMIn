import React, { useState, useEffect, createContext } from "react";

export const SebedimContext = createContext();

const SebedimContextProvider = (props) => {
  let [dil, setDil] = useState("");
  useEffect(() => {
    let dilData = localStorage.getItem("TDYEDil");
    if (dilData) {
      setDil(JSON.parse(dilData));
    } else {
      setDil("tk");
      localStorage.setItem("TDYEDil", JSON.stringify("tk"));
    }
  }, []);

  const ChangeDil = (event) => {
    console.log(dil);
    setDil(event);
    localStorage.setItem("TDYEDil", JSON.stringify(event));
  };

  return (
    <SebedimContext.Provider value={{ dil, ChangeDil }}>
      {props.children}
    </SebedimContext.Provider>
  );
};

export default SebedimContextProvider;
