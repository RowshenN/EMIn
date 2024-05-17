import React from "react";

import "./Header.css";
import IkiCyzyk from "../ikicyzyk/IkiCyzyk";

const Header = ({ text, header }) => {
  return (
    <div className="header_container">
      <div className="header_div">
        <IkiCyzyk text={text} />
      </div>
      <h1>{header}</h1>
    </div>
  );
};

export default React.memo(Header);
