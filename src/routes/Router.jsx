import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navigation from "../components/Naviagation";
import Footer from "../components/Footer";
import Svg from "../components/svgs";
import Home from "../pages/Home";
import PageLoading from "../components/PageLoading";

import {
  About,
  Service,
  Product,
  Contact,
  CategoryInner,
  NewsList,
  NewInner,
} from "./lazy";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollTop>
        <Navigation />
        <Svg />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/about"
            exact
            element={
              <Suspense fallback={<PageLoading />}>
                {" "}
                <About />
              </Suspense>
            }
          />
          <Route
            path="/service"
            exact
            element={
              <Suspense fallback={<PageLoading />}>
                {" "}
                <Service />
              </Suspense>
            }
          />
          <Route
            path="/product"
            exact
            element={
              <Suspense fallback={<PageLoading />}>
                {" "}
                <Product />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            exact
            element={
              <Suspense fallback={<PageLoading />}>
                {" "}
                <Contact />
              </Suspense>
            }
          />

          <Route
            path="/category-inner"
            exact
            element={
              <Suspense fallback={<PageLoading />}>
                {" "}
                <CategoryInner />
              </Suspense>
            }
          />

          <Route
            path="/news-list"
            exact
            element={
              <Suspense fallback={<PageLoading />}>
                {" "}
                <NewsList />
              </Suspense>
            }
          />

          <Route
            path="/new-inner/:id"
            exact
            element={
              <Suspense fallback={<PageLoading />}>
                {" "}
                <NewInner />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </ScrollTop>
    </BrowserRouter>
  );
};

const ScrollTop = (props) => {
  const { children } = props;

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <main className="welcome">{children}</main>;
};

export default Router;
