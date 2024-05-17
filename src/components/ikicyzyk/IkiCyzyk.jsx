import React from "react";

import "./IkiCyzyk.css";

const IkiCyzyk = ({ text }) => {
  return (
    <div className="cyzyk_container">
      <div className="iki_cyzyk_cep">
        <div className="birinji_cyzyk"></div>
        <div className="ikinji_cyzyk"></div>
      </div>
      <p>{text}</p>
      <div className="iki_cyzyk_sag">
        <div className="birinji_cyzyk"></div>
        <div className="ikinji_cyzyk"></div>
      </div>
    </div>
  );
};

export default React.memo(IkiCyzyk);
