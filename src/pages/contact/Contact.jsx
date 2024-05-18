import React, { useState, useEffect, useContext } from "react";

import "./Contact.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import location from "../../images/location.png";
import phone from "../../images/phone.png";
import mail from "../../images/email.png";
import telegtram from "../../images/telegram.svg";
import whatsapp from "../../images/whatsapp.svg";
import { axiosInstance } from "../../utils/axiosInstance";
import { SebedimContext } from "../../context/Context";
import Address from "../../components/address/Address";
import Navigation2 from "../../components/Navigation2/Navigation2";
import FixedIcons from "../../components/fixedIcons/FixedIcons";

const Contact = () => {
  const [aboutUs, setAboutUs] = useState([]);
  useEffect(() => {
    getAbout();
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    text: "",
  });

  const { dil } = useContext(SebedimContext);

  const getAbout = async () => {
    await axiosInstance
      .get("guest/contact")
      .then((res) => {
        setAboutUs(res.data[0]);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postMessage = (e) => {
    e.preventDefault();
    axiosInstance
      .post("guest/email/sendEmail", form)
      .then((res) => {
        setForm({
          name: "",
          email: "",
          text: "",
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <React.Fragment>
      {/* <HomeMain /> */}
      <Address />
      <Navigation2 />
      <div className="contact_container">
        <Header
          header={
            dil === "tm"
              ? "Islendik sorag üçin habarlaşmak"
              : dil === "ru"
              ? "Обращайтесь по любым вопросам"
              : "Contact for any query"
          }
          text={
            dil === "tm"
              ? "HABARLAŞMAK"
              : dil === "ru"
              ? "ДЛЯ КОНТАКТ"
              : "CONTACT US"
          }
        />
        <div className="contact_inner_container">
          <div className="contact_inner_form_div">
            <div className="contact_form_header">
              <h1 className="contact_form_h1">
                {dil === "tm"
                  ? aboutUs?.header_tm
                  : dil === "ru"
                  ? aboutUs?.header_ru
                  : aboutUs?.header_en}
              </h1>
              <p className="contact_form_p">
                {dil === "tm"
                  ? aboutUs?.desc_tm
                  : dil === "ru"
                  ? aboutUs?.desc_ru
                  : aboutUs?.desc_en}{" "}
              </p>

              <div className="contact_icons_div">
                <div className="contact_icon_inner">
                  <div className="contact_icon">
                    <img src={location} alt="afef" />
                  </div>
                  <div className="contact_icon_text">
                    <h1>
                      {dil === "tm"
                        ? "Salgy"
                        : dil === "ru"
                        ? "Адрес"
                        : "Office"}
                    </h1>
                    <p>{aboutUs.adress}</p>
                  </div>
                </div>

                <div className="contact_icon_inner">
                  <div className="contact_icon">
                    <img src={phone} alt="fwreg" />
                  </div>
                  <div className="contact_icon_text">
                    <h1>
                      {dil === "tm"
                        ? "Telefon"
                        : dil === "ru"
                        ? "Мобильный"
                        : "Mobile"}
                    </h1>
                    <p>
                      <a href={`tel:${aboutUs.telNum?.split(" ")[0]}`}>
                        {aboutUs.telNum}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact_icon_inner">
                  <div className="contact_icon">
                    <img src={telegtram} alt="fwreg" />
                  </div>
                  <div className="contact_icon_text">
                    <h1>
                      {dil === "tm"
                        ? "Telegram"
                        : dil === "ru"
                        ? "Мобильный"
                        : "Mobile"}
                    </h1>
                    <p>{aboutUs.teleNum}</p>
                  </div>
                </div>

                <div className="contact_icon_inner">
                  <div className="contact_icon">
                    <img src={whatsapp} alt="fwreg" />
                  </div>
                  <div className="contact_icon_text">
                    <h1>
                      {dil === "tm"
                        ? "Telefon"
                        : dil === "ru"
                        ? "Мобильный"
                        : "Mobile"}
                    </h1>
                    <p>{aboutUs.whatNum}</p>
                  </div>
                </div>

                <div className="contact_icon_inner">
                  <div className="contact_icon">
                    <img src={mail} alt="wrger" />
                  </div>
                  <div className="contact_icon_text">
                    <h1>Email</h1>
                    <p>{aboutUs.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact_form_map_container">
            <iframe
              title="karta"
              className="contact_map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d787.1252198375015!2d58.37216432147364!3d37.89535366633695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6ffd7fce0e0049%3A0x2f5c389e27643b5d!2sI%C5%9F%20merkezi!5e0!3m2!1sen!2s!4v1715597978412!5m2!1sen!2s"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <form className="contact_form">
            <div className="contact_form_name_div">
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                type="text"
                placeholder={
                  dil === "tm"
                    ? "Adynyz"
                    : dil === "ru"
                    ? "Ваше имя"
                    : "Your Name"
                }
              />
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                type="email"
                placeholder={
                  dil === "tm"
                    ? "Emailiniz"
                    : dil === "ru"
                    ? "Ваш e-mail"
                    : "Your Email"
                }
              />
            </div>
            <textarea
              value={form.text}
              onChange={(e) => setForm({ ...form, text: e.target.value })}
              placeholder={
                dil === "tm" ? "Habar" : dil === "ru" ? "Сообщение" : "Message"
              }
            ></textarea>
            <button onClick={(e) => postMessage(e)}>
              {dil === "tm" ? "Ugrat" : dil === "ru" ? "Отправить" : "Send"}
            </button>
          </form>
        </div>
        <FixedIcons />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Contact;
