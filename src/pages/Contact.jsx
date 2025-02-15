import React, { useState, useContext } from "react";

import surat from "../images/contact-img.png";
import letter from "../images/contact-letter-icon.svg";
import map from "../images/contact-map-point.svg";
import phone from "../images/contact-phone-icon.svg";
import social from "../images/contact-ocial Icons.svg";
import social2 from "../images/contact-ocial Icons2.svg";
import social3 from "../images/contact-ocial Icons3.svg";
import social4 from "../images/contact-ocial Icons4.svg";
import line from "../images/contact-line.svg";
import send_line from "../images/contact-send-line.svg";
import { axiosInstance } from "../utils/axiosInstance";
import { message } from "antd";
import { SebedimContext } from "../context/Context";
import Navigation from "../components/navbars/Navigation";

const Contact = () => {
  const { dil } = useContext(SebedimContext);
  const [emailInput, setEmailInput] = useState([]);

  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    subject: "",
    message: "",
  });

  const getEmail = async () => {
    if (emailInput) {
      const formData = new FormData();
      formData.append("email", emailInput);
      await axiosInstance
        .post("/subscribe", formData)
        .then((res) => {
          message.success("Subscription successful!");
          setEmailInput("");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      message.warning("Please fill the input!");
    }
  };

  const postMessage = async () => {
    if (
      form.name &&
      form.surname &&
      form.email &&
      form.subject &&
      form.message
    ) {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("surname", form.surname);
      formData.append("subject", form.subject);
      formData.append("email", form.email);
      formData.append("message", form.message);
      await axiosInstance
        .post("/contact", formData)
        .then((res) => {
          message.success("Your message has been sent successfully!");
          setForm({
            name: "",
            surname: "",
            email: "",
            subject: "",
            message: "",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      message.warning("Please fill the input!");
    }
  };

  return (
    <>
      <Navigation />
      <div className="w-full sm:mb-[100px] md:mb-[140px] ">
        <div className="sm:w-[94%] md:w-[90%] relative flex items-start gap-[150px] justify-between mx-auto sm:mt-[50px] md:mt-[100px] ">
          <div className="sm:w-[full] lg:w-[90%] flex lg:flex-row sm:flex-col items-start sm:gap-[70px] md:gap-[100px] justify-between sm:mt-[20px] lg:mt-[151px] ">
            <div className="sm:w-full lg:w-[40%]">
              <p className="sm:text-[25px] md:text-[50px] font-[poppins-semibold] ">
                {dil === "tk"
                  ? "Habarlaşmak üçin"
                  : dil === "ru"
                  ? "Обращайтесь к нам"
                  : dil === "tr"
                  ? "Bizimle iletişime geçin"
                  : "Contact us"}
              </p>
              <p className="text-[#878787] sm:text-[14px] md:text-[16px] font-[poppins-medium] sm:mt-4 md:mt-[22px] mb-[55px] ">
                {dil === "tk"
                  ? "Syýahat meýilnamalaryňyz boýunça soraglaryňyz barmy? Emin Hyzmat syýahat kärhanasy bilen habarlaşyň! Siziň bron etmegiňize, gezelençleriňize we beýleki soraglaryňyza kömek etmäge taýýardyrys."
                  : dil === "ru"
                  ? "У вас есть вопросы или нужна помощь в планировании путешествия? Свяжитесь с туристическим агентством Emin Hyzmat! Мы поможем с бронированием, турами и любыми запросами."
                  : dil === "tr"
                  ? "Seyahat planlarınızla ilgili sorularınız mı var? Emin Hyzmat seyahat acentesi ile iletişime geçin! Rezervasyonlarınız, turlarınız ve diğer sorularınız için buradayız."
                  : "Have questions or need assistance with your travel plans? Contact Emin Hyzmat Travel Agency! We’re here to help with your bookings, tours, and any inquiries."}
              </p>

              <div className="w-[90%] border-b border-[#D6D6D6] pb-4 mb-8 ">
                <div className="flex items-center mb-[10px] justify-start gap-2">
                  <img src={map} alt="map" />
                  <p className="text-[#009833] text-[16px] font-[poppins-medium]">
                    {dil === "tk"
                      ? "Ofis"
                      : dil === "ru"
                      ? "Офис"
                      : dil === "tr"
                      ? "Ofis"
                      : "Office"}
                  </p>
                </div>
                <p className="sm:text-[16px] md:text-[20px] pl-[29px] font-[poppins-regular]">
                  {dil === "tk"
                    ? "S.Myradowa köçesi, jaý 3A"
                    : dil === "ru"
                    ? "Улица С.Мырадова, дом 3А"
                    : dil === "tr"
                    ? "S.Myradova caddesi, bina 3A"
                    : "S.Myradova street, building 3A"}
                </p>
              </div>

              <div className="w-[90%] border-b border-[#D6D6D6] pb-4 mb-8 ">
                <div className="flex items-center mb-[10px] justify-start gap-2">
                  <img src={phone} alt="map" />
                  <p className="text-[#009833] text-[16px] font-[poppins-medium]">
                    {dil === "tk"
                      ? "Telefon"
                      : dil === "ru"
                      ? "Телефон"
                      : dil === "tr"
                      ? "Telefon"
                      : "Phone"}
                  </p>
                </div>
                <div className="sm:text-[16px] md:text-[20px] flex flex-wrap items-baseline justify-start gap-1 pl-[29px] font-[poppins-regular]">
                  <p className="mr-2">+993 12 286226</p>
                  <p className="mr-2">+993 12 286228</p>
                  <p className="mr-2">+993 12 287444</p>
                  <p className="mr-2">+993 71 002121</p>
                </div>
              </div>

              <div className="w-[90%] border-b border-[#D6D6D6] pb-4 mb-[48px] ">
                <div className="flex items-center mb-[10px] justify-start gap-2">
                  <img src={letter} alt="map" />
                  <p className="text-[#009833] text-[16px] font-[poppins-medium]">
                    Email
                  </p>
                </div>
                <p className="sm:text-[16px] md:text-[20px] pl-[29px] font-[poppins-regular]">
                  travel@eminhyzmat.com
                </p>
              </div>

              <div>
                <p className="text-[16px] font-[poppins-semibold] mb-[15px] ">
                  {dil === "tk"
                    ? "Bize agza boluň"
                    : dil === "ru"
                    ? "Подписывайтесь на нас"
                    : dil === "tr"
                    ? "Bizi takip edin"
                    : "Follow us"}
                </p>
                <div className="flex items-center justify-start gap-[31px] ">
                  <img
                    src={social}
                    alt="social"
                    className="object-cover cursor-pointer sm:w-[17px] md:w-[30px]"
                  />
                  <img
                    src={social2}
                    alt="social"
                    className="object-cover cursor-pointer sm:w-[17px] md:w-[30px]"
                  />
                  <img
                    src={social3}
                    alt="social"
                    className="object-cover cursor-pointer sm:w-[17px] md:w-[30px]"
                  />
                  <img
                    src={social4}
                    alt="social"
                    className="object-cover cursor-pointer sm:w-[17px] md:w-[30px]"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white sm:w-full lg:w-[50%] shadow-2xl rounded-[23px] z-10 sm:px-[15px] sm:py-[40px] md:py-[55px] md:px-[50px] ">
              <div className="w-full">
                <h1 className="sm:text-[18px] md:text-[28px] font-[poppins-semibold] sm:mb-[30px] md:mb-[45px] ">
                  {dil === "tk"
                    ? "Habar iber"
                    : dil === "ru"
                    ? "Отправить сообщение"
                    : dil === "tr"
                    ? "Mesaj gönder"
                    : "Send a message"}
                </h1>

                <form className="w-full flex flex-col items-baseline justify-start sm:gap-[10px] md:gap-[33px]">
                  <div className="flex md:flex-row sm:flex-col sm:gap-[10px] md:gap-4 items-center justify-between w-full">
                    <div className="flex flex-col w-full justify-start items-baseline gap-2">
                      <label
                        className="sm:text-[14px] md:sm:text-[14px] md:text-[16px] font-[poppins-medium]"
                        htmlFor="name"
                      >
                        {dil === "tk"
                          ? "Ady"
                          : dil === "ru"
                          ? "Имя"
                          : dil === "tr"
                          ? "İsim"
                          : "Name"}
                      </label>
                      <input
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        type="text"
                        className="bg-[#FAFAFA] sm:py-4 md:sm:py-4 md:py-2 sm:px-2 md:px-3 sm:text-[14px] md:text-[16px] font-[poppins-medium] rounded-[6px] w-full outline-none border border-[#DADADA] "
                      />
                    </div>

                    <div className="flex w-full flex-col justify-start items-baseline gap-2">
                      <label
                        className="sm:text-[14px] md:text-[16px] font-[poppins-medium]"
                        htmlFor="surname"
                      >
                        {dil === "tk"
                          ? "Familiýasy"
                          : dil === "ru"
                          ? "Фамилия"
                          : dil === "tr"
                          ? "Soyadı"
                          : "Surname"}
                      </label>
                      <input
                        value={form.surname}
                        onChange={(e) =>
                          setForm({ ...form, surname: e.target.value })
                        }
                        className="bg-[#FAFAFA] sm:py-4 md:py-2 sm:px-2 md:px-3 sm:text-[14px] md:text-[16px] font-[poppins-medium] rounded-[6px] w-full outline-none border border-[#DADADA] "
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="flex w-full flex-col justify-start items-baseline gap-2">
                    <label
                      className="sm:text-[14px] md:text-[16px] font-[poppins-medium]"
                      htmlFor="email"
                    >
                      {dil === "tk"
                        ? "E-poçta"
                        : dil === "ru"
                        ? "Электронная почта"
                        : dil === "tr"
                        ? "E-posta"
                        : "Email"}
                    </label>
                    <input
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="bg-[#FAFAFA] sm:py-4 md:py-2 sm:px-2 md:px-3 sm:text-[14px] md:text-[16px] font-[poppins-medium] rounded-[6px] w-full outline-none border border-[#DADADA] "
                      type="email"
                    />
                  </div>

                  <div className="flex w-full flex-col justify-start items-baseline gap-2">
                    <label
                      className="sm:text-[14px] md:text-[16px] font-[poppins-medium]"
                      htmlFor="subject"
                    >
                      {dil === "tk"
                        ? "Tema"
                        : dil === "ru"
                        ? "Тема"
                        : dil === "tr"
                        ? "Söz"
                        : "Subject"}
                    </label>
                    <input
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      className="bg-[#FAFAFA] sm:py-4 md:py-2 sm:px-2 md:px-3 sm:text-[14px] md:text-[16px] font-[poppins-medium] rounded-[6px] w-full outline-none border border-[#DADADA] "
                      type="text"
                    />
                  </div>

                  <div className="flex w-full flex-col justify-start items-baseline gap-2">
                    <label
                      className="sm:text-[14px] md:text-[16px] font-[poppins-medium]"
                      htmlFor="message"
                    >
                      {dil === "tk"
                        ? "Habar"
                        : dil === "ru"
                        ? "Сообщение"
                        : dil === "tr"
                        ? "Mesaj"
                        : "Message"}
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="bg-[#FAFAFA] sm:min-h-[120px] md:min-h-[141px] sm:py-4 md:py-2 sm:px-2 md:px-3 sm:text-[14px] md:text-[16px] font-[poppins-medium] rounded-[6px] w-full outline-none border border-[#DADADA] "
                      name="message"
                      id=""
                    ></textarea>
                  </div>

                  <div
                    onClick={() => postMessage()}
                    className="flex flex-col cursor-pointer items-baseline justify-start gap-2"
                  >
                    <p className="text-[16px] font-[poppins-medium] ">
                      {dil === "tk"
                        ? "Habar iber"
                        : dil === "ru"
                        ? "Отправить сообщение"
                        : dil === "tr"
                        ? "Mesaj göndermek"
                        : "Send message"}
                    </p>
                    <img src={send_line} alt="line" />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="w-[40%] sm:hidden lg:block absolute top-0 right-0 -z-20 rounded-[23px] h-[70%]">
            <img
              src={surat}
              alt="surat"
              className="w-[483px] h-[981px] object-cover"
            />
          </div>
        </div>

        <div className="sm:w-[94%] mx-auto md:w-full flex items-center justify-center sm:mt-[150px] md:mt-[196px] ">
          <div className="w-[442px] flex items-center justify-center flex-col sm:gap-4 md:gap-9 ">
            <p className="sm:text-[24px] md:text-[28px] text-center font-[poppins-medium]">
              {dil === "tk"
                ? "Iň täze habarlary we maglumatlary poçta gutyňyza iberiň."
                : dil === "ru"
                ? "Получайте все последние новости и информацию на свою электронную почту."
                : dil === "tr"
                ? "En son haber ve bilgilerin e-posta kutunuza gelmesini sağlayın."
                : "Get all the latest news and info sent to your inbox."}
            </p>
            <input
              className="bg-[#FAFAFA] outline-none text-[16px] font-[poppins-regular] border-[#DADADA] border-[1px] rounded-[6px] w-full py-[13px] sm:px-[15px] md:px-[22px]  "
              type="email"
              placeholder={
                dil === "tk"
                  ? "E-poçta"
                  : dil === "ru"
                  ? "Электронная почта"
                  : dil === "tr"
                  ? "E-posta"
                  : "Email"
              }
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
            <div onClick={() => getEmail()} className="cursor-pointer">
              <p className="text-[16px] font-[poppins-medium] mb-2 ">
                {dil === "tk"
                  ? "Abuna ýazylyň"
                  : dil === "ru"
                  ? "Подписаться"
                  : dil === "tr"
                  ? "Abone"
                  : "Subscribe"}
              </p>
              <img src={line} alt="line" className="w-[70%]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
