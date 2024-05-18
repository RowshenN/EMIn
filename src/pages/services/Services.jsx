import React from "react";

import "./Services.css";
import ServiceMain from "../../components/servicemain/ServiceMain";
import Footer from "../../components/footer/Footer";
import Address from "../../components/address/Address";
import Navigation2 from "../../components/Navigation2/Navigation2";
import FixedIcons from "../../components/fixedIcons/FixedIcons";

const Services = () => {
  return (
    <React.Fragment>
      <Address />
      <Navigation2 />
      <ServiceMain />
      <FixedIcons />
      <Footer />
    </React.Fragment>
  );
};

export default Services;
