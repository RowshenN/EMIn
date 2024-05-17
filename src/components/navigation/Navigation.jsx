import React, { useState, useEffect, useContext } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import "./Navigation.css";
import logo from "../../images/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { SebedimContext } from "../../context/Context";

AOS.init({ duration: 800, delay: 100 });

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [isBurger, setIsBurger] = useState(false);
  const { dil, ChangeDil } = useContext(SebedimContext);
  const [lang, setLang] = useState(false);

  useEffect(() => {
    const navbarElement = document.querySelector(".nav_inner");
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 40);
      if (navbarElement) {
        navbarElement.classList.toggle("sticky", isSticky);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      className={`nav_inner ${isSticky ? "navigation_active" : "nav_inner"}`}
      style={
        isSticky
          ? { position: "fixed", top: "0" }
          : { position: "absolute", top: "40px" }
      }
    >
      <div className="nav_inner_container">
        <div onClick={() => navigate("/")} className="nav_logo_div">
          <img src={logo} alt="logo" />
        </div>

        <div className="nav_list_container">
          <ul>
            <li
              className={location.pathname === "/" ? "active" : ""}
              onClick={() => navigate("/")}
            >
              {dil === "tm" ? "Esasy" : dil === "ru" ? "Главная" : "Home"}
            </li>
            <li
              className={location.pathname === "/about" ? "active" : ""}
              onClick={() => navigate("/about")}
            >
              {dil === "tm"
                ? "Biz barada"
                : dil === "ru"
                ? "О нас"
                : "About Us"}
            </li>
            <li
              className={location.pathname === "/service" ? "active" : ""}
              onClick={() => navigate("/service")}
            >
              {dil === "tm"
                ? "Hyzmatlar"
                : dil === "ru"
                ? "Услуги"
                : "Services"}
            </li>
            <li
              className={location.pathname === "/packages" ? "active" : ""}
              onClick={() => navigate("/packages")}
            >
              {dil === "tm"
                ? "Syýahatlar"
                : dil === "ru"
                ? "Экскурсии"
                : "Tours"}
            </li>
            <li
              className={location.pathname === "/news" ? "active" : ""}
              onClick={() => navigate("/news")}
            >
              {dil === "tm" ? "Täzelikler" : dil === "ru" ? "Новости" : "News"}
            </li>
            <li
              className={location.pathname === "/gallery" ? "active" : ""}
              onClick={() => navigate("/gallery")}
            >
              {dil === "tm" ? "Suratlar" : dil === "ru" ? "Галерея" : "Gallery"}
            </li>
            <li
              className={location.pathname === "/contact" ? "active" : ""}
              onClick={() => navigate("/contact")}
            >
              {dil === "tm"
                ? "Habarlaşmak"
                : dil === "ru"
                ? "Для Контакт"
                : "Contact"}
            </li>
          </ul>
        </div>

        <div className="nav_burger_container">
          <div className="nav_lang_div">
            <div
              // style={{ color: "white" }}
              onMouseEnter={() => setLang(true)}
              onMouseOut={() => setLang(false)}
              className="nav_lang_item text-[18px] cursor-pointer h-[30px]"
            >
              {dil === "tm" ? "TM" : dil === "ru" ? "RU" : "EN"}
            </div>
            <div
              onMouseEnter={() => setLang(true)}
              onMouseLeave={() => setLang(false)}
              className={
                (lang === true ? "flex " : " hidden ") +
                "nav_lang_inner_div fixed text-2xl justify-evenly top-[60px] right-[6%] z-10 border-t-[1px] rounded-[4px] border-t-[#efefef]  h-[50px] leading-[50px] cursor-pointer bg-white w-[150px] pl-2 pr-2 pt-0 pb-0"
              }
            >
              <div
                onClick={() => ChangeDil("tm")}
                className="hover:text-black"
                style={{ color: "black" }}
              >
                TM
              </div>
              <div
                onClick={() => ChangeDil("ru")}
                className="hover:text-black"
                style={{ color: "black" }}
              >
                RU
              </div>
              <div
                onClick={() => ChangeDil("en")}
                className="hover:text-black"
                style={{ color: "black" }}
              >
                EN
              </div>
            </div>
          </div>
          <div
            onClick={() => setIsBurger(true)}
            className="nav_burger_button_container"
          >
            <div className="nav_burger_button">
              <span className="nav_burger"></span>
            </div>
          </div>
        </div>
      </div>

      {isBurger && (
        <div data-aos="fade-down" className="nav_burger_sticky_div">
          <div className="nav_burger_sticky_inner_div">
            <ul>
              <li
                className={location.pathname === "/" ? "active" : ""}
                onClick={() => navigate("/")}
              >
                Home
              </li>
              <li
                className={location.pathname === "/about" ? "active" : ""}
                onClick={() => navigate("/about")}
              >
                About
              </li>
              <li
                className={location.pathname === "/service" ? "active" : ""}
                onClick={() => navigate("/service")}
              >
                Services
              </li>
              <li
                className={location.pathname === "/packages" ? "active" : ""}
                onClick={() => navigate("/packages")}
              >
                Packages
              </li>
              <li
                className={location.pathname === "/news" ? "active" : ""}
                onClick={() => navigate("/news")}
              >
                News
              </li>
              <li
                className={location.pathname === "/gallery" ? "active" : ""}
                onClick={() => navigate("/gallery")}
              >
                Gallery
              </li>
              <li
                className={location.pathname === "/contact" ? "active" : ""}
                onClick={() => navigate("/contact")}
              >
                Contact
              </li>
            </ul>

            <div
              onClick={() => setIsBurger(false)}
              className="nav_burger_sticky_button"
            >
              <button>X</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(Navigation);
