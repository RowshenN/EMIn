import React, { useContext } from "react";
import ContactMain from "../components/ContactMain/ContactMain";
import Header from "../components/Header";
import { SebedimContext } from "../context/Context";

const Contact = () => {
  const { dil } = useContext(SebedimContext);
  return (
    <div className="w-full px-6 lg:w-[95%] mx-auto">
      <Header
        header={dil === "en" ? "Contact Us" : "Biz bilen habarlaşyň"}
        visible={false}
      />
      <ContactMain />
    </div>
  );
};

export default Contact;
