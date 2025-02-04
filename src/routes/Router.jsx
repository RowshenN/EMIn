import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Footer from "../components/Footer";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import PageLoading from "../components/PageLoading";

import {
  About,
  Contact,
  Blog,
  Tours,
  Hotels,
  Turkmenistan,
  Visa,
  Destination,
  BlogInner,
  HotelInner,
  DestinationInner,
} from "./lazy";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollTop>
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

          <Route path="*" exact element={<NotFound />} />

          <Route
            path="/blog"
            exact
            element={
              <Suspense fallback={<PageLoading />}>
                {" "}
                <Blog />
              </Suspense>
            }
          />

          <Route
            path="/destination-inner/:id"
            exact
            element={
              <Suspense fallback={<PageLoading />}>
                {" "}
                <DestinationInner />
              </Suspense>
            }
          />

          <Route
            path="/blog-inner/:id"
            exact
            element={
              <Suspense fallback={<PageLoading />}>
                {" "}
                <BlogInner />
              </Suspense>
            }
          />

          <Route
            path="/hotel-inner/:id"
            exact
            element={
              <Suspense fallback={<PageLoading />}>
                {" "}
                <HotelInner />
              </Suspense>
            }
          />

          <Route
            path="/turkmenistan"
            exact
            element={
              <Suspense fallback={<PageLoading />}>
                {" "}
                <Turkmenistan />
              </Suspense>
            }
          />

          <Route
            path="/hotels"
            exact
            element={
              <Suspense fallback={<PageLoading />}>
                {" "}
                <Hotels />
              </Suspense>
            }
          />

          <Route
            path="/visa"
            exact
            element={
              <Suspense fallback={<PageLoading />}>
                {" "}
                <Visa />
              </Suspense>
            }
          />

          <Route
            path="/destination"
            exact
            element={
              <Suspense fallback={<PageLoading />}>
                {" "}
                <Destination />
              </Suspense>
            }
          />

          <Route
            path="/tours"
            exact
            element={
              <Suspense fallback={<PageLoading />}>
                {" "}
                <Tours />
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
