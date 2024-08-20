import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductsMain from "../components/ProductsMain/ProductsMain";
import file from "../images/file-download.svg";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { axiosInstance } from "../utils/axiosInstance";

const Product = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState();
  const queryParam = searchParams.get("search");
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
  return (
    <div className="w-[75%] mx-auto">
      <Header header={"Products"} visible={false} />

      <div className="w-full mb-[140px] mt-[30px]">
        <div className="w-full mb-[40px]">
          <div className="flex items-center justify-between mb-7">
            <h1 className="text-white font-[outfit-semibold] text-[35px] mb-5">
              Quality and Compliance
            </h1>
            <div className="flex items-center justify-center gap-2 bg-white py-2 px-3 rounded-xl text-[#00391A] text-[16px] font-[outfit-regular]">
              <img src={file} className="w-[39px]" alt="file" />
              <p>Download Catalogue (PDF)</p>
            </div>
          </div>
          <p className="text-white font-[outfit-light] text-[15px] mb-8">
            Our products meet all the norms of international standards and
            certifications. We adhere strictly to regulations regarding public
            health protection and environmental conservation. This commitment to
            quality and compliance ensures that we not only meet but exceed the
            rigorous demands of both our clients and the global market.
          </p>
        </div>
        <div className="w-full">
          <h1 className="text-white font-[outfit-semibold] text-[35px] mb-5">
            Local Collaboration
          </h1>
          <p className="text-white font-[outfit-light] text-[15px] mb-8">
            In addition to our global partnerships, we collaborate with many
            companies in Turkmenistan, reinforcing our commitment to
            contributing to the local economy and fostering domestic industry
            growth. This local collaboration is a testament to our dedication to
            the communities we serve and our role in their development.
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
