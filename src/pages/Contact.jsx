import React from "react";
import ContactMain from "../components/ContactMain/ContactMain";
import Header from "../components/Header";

const Contact = () => {
  return (
    <div className="w-full px-6 lg:w-[75%] mx-auto">
      <Header header={"Contact Us"} visible={false} />
      <ContactMain />
    </div>
  );
};

export default Contact;
