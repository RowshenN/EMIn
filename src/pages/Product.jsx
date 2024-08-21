import React, { useEffect, useState, useContext } from "react";
import Header from "../components/Header";
import ProductsMain from "../components/ProductsMain/ProductsMain";
import file from "../images/file-download.svg";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { axiosInstance } from "../utils/axiosInstance";
import { SebedimContext } from "../context/Context";

const Product = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("search");
  const [data, setData] = useState();
  async function GetSearch() {
    axiosInstance
      .get("/guest/product/search?name=" + queryParam + "&page=1&size=3")
      .then((res) => {
        setData(res.data);
      });
  }
  useEffect(() => {
    GetSearch();
  }, [queryParam]);

  const { dil } = useContext(SebedimContext);
  return (
    <div className="w-[95%] mx-auto">
      <Header header={dil === "en" ? "Products" : "Önümler"} visible={false} />

      <div className="w-full mb-[140px] mt-[30px]">
        <div className="w-full mb-[40px]">
          <div className="flex lg:flex-row flex-col items-center justify-between mb-7">
            <h1 className="text-white font-[outfit-semibold] text-[35px] mb-5">
              {dil == "en" ? "Quality and Compliance" : "Hil we laýyklyk"}
            </h1>
            <div className="flex items-center justify-center gap-2 bg-white py-2 px-3 rounded-xl text-[#00391A] text-[16px] font-[outfit-regular]">
              <img src={file} className="w-[39px]" alt="file" />
              <p>
                {dil === "en" ? "Download Catalogue" : "Katalogy ýükläň"} (PDF)
              </p>
            </div>
          </div>
          <p className="text-white text-center lg:text-start font-[outfit-light] text-[15px] mb-8">
            {dil === "en"
              ? "Our products meet all the norms of international standards and certifications. We adhere strictly to regulations regarding public health protection and environmental conservation. This commitment to quality and compliance ensures that we not only meet but exceed the rigorous demands of both our clients and the global market."
              : "Önümlerimiz halkara ülňüleriniň ähli kadalaryna laýyk gelýär we şahadatnamalary. Jemgyýetçilik bilen baglanyşykly düzgünleri berk berjaý edýäris saglygy goramak we daşky gurşawy goramak. Bu ygrarlylyk hil we laýyklyk diňe bir duşuşmagymyzy däl, eýsem ondan ýokary bolmagy üpjün edýär Müşderilerimiziň we dünýä bazarynyň berk talaplary."}
          </p>
        </div>
        <div className="w-full">
          <h1 className="text-white text-center lg:text-start font-[outfit-semibold] text-[35px] mb-5">
            {dil === "en" ? "Local Collaboration" : "Collerli hyzmatdaşlyk"}
          </h1>
          <p className="text-white text-center lg:text-start font-[outfit-light] text-[15px] mb-8">
            {dil === "en"
              ? "In addition to our global partnerships, we collaborate with many companies in Turkmenistan, reinforcing our commitment to contributing to the local economy and fostering domestic industry growth. This local collaboration is a testament to our dedication to the communities we serve and our role in their development."
              : "Global hyzmatdaşlygymyzdan başga-da, köpler bilen hyzmatdaşlyk edýäris  borçnamalarymyzy güýçlendirip, Türkmenistandaky kompaniýalar ýerli ykdysadyýete goşant goşmak we içerki senagaty ösdürmek ösüşi. Bu ýerli hyzmatdaşlyk, özümize wepalylygymyzyň subutnamasydyr hyzmat edýän jemgyýetlerimiz we olaryň ösüşindäki rolumyz."}
          </p>
        </div>
      </div>

      <div className="w-full">
        <ProductsMain visibility={false} />
      </div>
    </div>
  );
};

export default Product;
