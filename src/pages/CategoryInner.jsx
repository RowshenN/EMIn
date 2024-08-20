import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ProductSliderCard from "../components/ProductsMain/ProductSliderCard";
import { axiosInstance } from "../utils/axiosInstance";

const CategoryInner = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    await axiosInstance
      .get("guest/gallery/getAll")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-[75%] mx-auto">
      <Header header={"Detergent"} visible={true} pathname={"/product"} />

      <div className="w-full -z-10 grid grid-cols-2 lg:grid-cols-auto-fill-250 mt-[60px] gap-4 mb-[60px]">
        <ProductSliderCard />
        <ProductSliderCard />
        <ProductSliderCard />
        <ProductSliderCard />
        <ProductSliderCard />
        <ProductSliderCard />
        <ProductSliderCard />
        <ProductSliderCard />
        <ProductSliderCard />
        <ProductSliderCard />
        <ProductSliderCard />
        <ProductSliderCard />
        <ProductSliderCard />
        <ProductSliderCard />
        <ProductSliderCard />
        <ProductSliderCard />
        <ProductSliderCard />
        <ProductSliderCard />
        <ProductSliderCard />
        <ProductSliderCard />
        <ProductSliderCard />
        <ProductSliderCard />
      </div>
    </div>
  );
};

export default CategoryInner;
