import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import ProductSliderCard from "../components/ProductsMain/ProductSliderCard";
import { axiosInstance } from "../utils/axiosInstance";
import { useParams, useSearchParams } from "react-router-dom";
import { SebedimContext } from "../context/Context";

const CategoryInner = () => {
  const { dil } = useContext(SebedimContext);
  const [products, setProducts] = useState([]);
  const [cat, setCat] = useState([]);
  const [catName, setCatName] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  const getProduct = async () => {
    await axiosInstance
      .get("/guest/product/getAll?categoryId=" + categoryId)
      .then((resp) => {
        setProducts(resp?.data?.products);
      });
  };

  async function getAll() {
    axiosInstance
      .get("/guest/category/getAll")
      .then((res) => {
        setCat(res.data);
        console.log("catname=" + res.data);
      })
      .catch((err) => console.log(err));
  }

  async function getCatName() {
    cat.map((item) =>
      item.id === categoryId
        ? setCatName(dil == "en" ? item.name_en : item.name_tm)
        : ""
    );
  }
  useEffect(() => {
    getProduct();
    getAll();
    getCatName();
  }, []);
  return (
    <div className="w-full px-6 lg:w-[95%] mx-auto">
      <Header
        header={
          dil == "en"
            ? cat[cat?.findIndex((item) => item?.id == categoryId)]?.name_en
            : cat[cat?.findIndex((item) => item?.id == categoryId)]?.name_tm
        }
        visible={true}
        pathname={"/product"}
      />

      <div className="w-full -z-10 grid grid-cols-2 lg:grid-cols-auto-fill-250 mt-[60px] gap-4 mb-[60px]">
        {products.map((item, i) => (
          <ProductSliderCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryInner;
