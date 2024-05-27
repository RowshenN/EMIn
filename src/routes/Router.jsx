import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import PageLoading from "../components/PageLoading";

const About = lazy(() => import("../pages/about/About"));
const Services = lazy(() => import("../pages/services/Services"));
const Packages = lazy(() => import("../pages/packages/Packages"));
const News = lazy(() => import("../pages/news/News"));
const Gallery = lazy(() => import("../pages/gallery/Gallery"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const GalleryInner = lazy(() => import("../pages/gallery/GalleryInner"));
const History = lazy(() => import("../pages/history/History"));

const Router = () => {
  return (
    <BrowserRouter>
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
              <Services />
            </Suspense>
          }
        />
        <Route
          path="/packages"
          exact
          element={
            <Suspense fallback={<PageLoading />}>
              {" "}
              <Packages />
            </Suspense>
          }
        />
        <Route
          path="/news"
          exact
          element={
            <Suspense fallback={<PageLoading />}>
              {" "}
              <News />
            </Suspense>
          }
        />

        <Route
          path="/history"
          exact
          element={
            <Suspense fallback={<PageLoading />}>
              {" "}
              <History />
            </Suspense>
          }
        />
        <Route
          path="/gallery"
          exact
          element={
            <Suspense fallback={<PageLoading />}>
              {" "}
              <Gallery />
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
          path="/galleryInner/:uuid"
          exact
          element={
            <Suspense fallback={<PageLoading />}>
              {" "}
              <GalleryInner />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
