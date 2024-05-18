import React from "react";

import "./Packages.css";
import PackageMain from "../../components/packageMain/PackageMain";
// import ThreeStep from "../../components/threestep/ThreeStep";
import Footer from "../../components/footer/Footer";
import Address from "../../components/address/Address";
import Navigation2 from "../../components/Navigation2/Navigation2";
import FixedIcons from "../../components/fixedIcons/FixedIcons";

const Packages = () => {
  return (
    <React.Fragment>
      <Address />
      <Navigation2 />
      <PackageMain />
      {/* <ThreeStep /> */}
      <FixedIcons />
      <Footer />
    </React.Fragment>
  );
};

export default Packages;
