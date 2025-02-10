import React, { useState, useContext } from "react";
import DropFileInput from "../../components/dropFile";
import { Select, message, DatePicker } from "antd";
import { axiosInstance } from "../../utils/axiosInstance";
import { countries } from "../../components/Countries";
import visa_line from "../../images/visa-send-line.svg";
import moment from "moment"; // Import moment for date formatting
import { SebedimContext } from "../../context/Context";

const optionsGender = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];

const labelRender = (props) => {
  const { label, value } = props;
  return label ? (
    value
  ) : (
    <span className="text-[#878787] text-[16px] font-[poppins-regular]">
      Saýla
    </span>
  );
};

const Gelyan = () => {
  const { dil } = useContext(SebedimContext);
  const { Option } = Select;
  const [photo, setPhoto] = useState([]);
  const [passport, setPassport] = useState([]);

  const [gelyanInfo, setGelyanInfo] = useState({
    name: "",
    surname: "",
    patronymic_name: "",
    gender: "",
    birth_date: null,
    email: "",
    phone: "",
    nationality: "",
    incoming_country: "",
    travel_date: null,
    notes: "",
  });

  const onFileChangePassport = (files) => {
    setPassport(files);
  };

  const onFileChangePhoto = (files) => {
    setPhoto(files);
  };

  const postMessageIncoming = async () => {
    if (
      gelyanInfo.name &&
      gelyanInfo.surname &&
      gelyanInfo.gender &&
      gelyanInfo.birth_date &&
      gelyanInfo.email &&
      gelyanInfo.phone &&
      gelyanInfo.nationality &&
      gelyanInfo.incoming_country &&
      gelyanInfo.travel_date &&
      gelyanInfo.notes &&
      photo.length > 0 &&
      passport.length > 0
    ) {
      const formData = new FormData();

      photo.forEach((file) => formData.append("photo", file));
      passport.forEach((file) => formData.append("passport", file));

      formData.append("name", gelyanInfo.name);
      formData.append("surname", gelyanInfo.surname);
      formData.append("gender", gelyanInfo.gender);
      formData.append(
        "birth_date",
        gelyanInfo.birth_date
          ? gelyanInfo.birth_date.format("YYYY-MM-DD")
          : null
      ); // Handle null date
      formData.append("email", gelyanInfo.email);
      formData.append("phone", gelyanInfo.phone);
      formData.append("nationality", gelyanInfo.nationality);
      formData.append("incoming_country", gelyanInfo.incoming_country);
      formData.append(
        "travel_date",
        gelyanInfo.travel_date
          ? gelyanInfo.travel_date.format("YYYY-MM-DD")
          : null
      ); // Handle null date
      formData.append("notes", gelyanInfo.notes);
      for (let [key, value] of formData.entries()) {
        console.log(key, value); // This will show the key-value pairs
      }

      try {
        const res = await axiosInstance.post("/visas/incoming", formData);
        console.log(formData);
        message.success("Your message has been sent successfully!");
        setGelyanInfo({
          name: "",
          surname: "",
          patronymic_name: "",
          gender: "",
          birth_date: null,
          email: "",
          phone: "",
          nationality: "",
          incoming_country: "",
          travel_date: null,
          notes: "",
        });
        setPhoto([]);
        setPassport([]);
      } catch (error) {
        console.error("Error:", error.response);
        message.error(
          "There was an error sending your message. Please try again."
        );
      }
    } else {
      message.warning(
        "Please fill in all required fields and upload the documents!"
      );
    }
  };

  const handleGelyanGender = (value) =>
    setGelyanInfo({ ...gelyanInfo, gender: value });
  const handleGelyanBirth = (value) =>
    setGelyanInfo({ ...gelyanInfo, birth_date: value });
  const handleGelyanNation = (value) =>
    setGelyanInfo({ ...gelyanInfo, nationality: value });
  const handleGelyanCountry = (value) =>
    setGelyanInfo({ ...gelyanInfo, incoming_country: value });
  const handleGelyanTravel = (value) =>
    setGelyanInfo({ ...gelyanInfo, travel_date: value });

  return (
    <form>
      <h1 className="sm:text-[18px] md:text-[20px] font-[poppins-medium] sm:mb-3 md:mb-5 ">
        {dil === "tk"
          ? "Maglumatlar"
          : dil === "ru"
          ? "Данные"
          : dil === "tr"
          ? "Veriler"
          : "Informations"}
      </h1>

      <div className="w-full">
        <div className="w-full md:flex-row sm:flex-col flex items-center justify-center sm:gap-5 md:gap-[34px] mb-5">
          <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
            <label
              htmlFor="name"
              className="text-[16px] font-[poppins-regular]"
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
              value={gelyanInfo.name}
              onChange={(e) =>
                setGelyanInfo({ ...gelyanInfo, name: e.target.value })
              }
              required
              type="text"
              className="bg-[#FCFCFC] text-[16px] font-[poppins-regular] w-full sm:px-4 md:px-7 py-3 outline-none rounded-[9px] border border-[#D9D9D9] "
              placeholder={
                dil === "tk"
                  ? "Ady"
                  : dil === "ru"
                  ? "Имя"
                  : dil === "tr"
                  ? "İsim"
                  : "Name"
              }
              id="name"
            />
          </div>

          <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
            <label
              htmlFor="surname"
              className="text-[16px] font-[poppins-regular]"
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
              value={gelyanInfo.surname}
              onChange={(e) =>
                setGelyanInfo({
                  ...gelyanInfo,
                  surname: e.target.value,
                })
              }
              required
              type="text"
              className="bg-[#FCFCFC] text-[16px] font-[poppins-regular] w-full sm:px-4 md:px-7 py-3 outline-none rounded-[9px] border border-[#D9D9D9] "
              placeholder={
                dil === "tk"
                  ? "Familiýasy"
                  : dil === "ru"
                  ? "Фамилия"
                  : dil === "tr"
                  ? "Soyadı"
                  : "Surname"
              }
              id="surname"
            />
          </div>

          <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
            <label
              htmlFor="atasy"
              className="text-[16px] font-[poppins-regular]"
            >
              {dil === "tk"
                ? "Atasynyň ady"
                : dil === "ru"
                ? "Отчество"
                : dil === "tr"
                ? "Patronimik ad"
                : "Patronymic name"}
            </label>
            <input
              value={gelyanInfo.patronymic_name}
              onChange={(e) =>
                setGelyanInfo({
                  ...gelyanInfo,
                  patronymic_name: e.target.value,
                })
              }
              id="atasy"
              type="text"
              className="bg-[#FCFCFC] text-[16px] font-[poppins-regular] w-full sm:px-4 md:px-7 py-3 outline-none rounded-[9px] border border-[#D9D9D9] "
              placeholder={
                dil === "tk"
                  ? "Atasynyň ady"
                  : dil === "ru"
                  ? "Отчество"
                  : dil === "tr"
                  ? "Patronimik ad"
                  : "Patronymic name"
              }
            />
          </div>
        </div>

        <div className="w-full md:flex-row sm:flex-col flex items-center justify-center sm:gap-5 md:gap-[34px] mb-5 ">
          <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
            <label
              htmlFor="jyns"
              className="text-[16px] font-[poppins-regular]"
            >
              {dil === "tk"
                ? "Jynsy"
                : dil === "ru"
                ? "Пол"
                : dil === "tr"
                ? "Cinsiyet"
                : "Gender"}
            </label>
            <Select
              value={gelyanInfo.gender}
              onChange={handleGelyanGender}
              labelRender={labelRender}
              className="ant-selector"
            >
              {optionsGender.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          </div>

          <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
            <label
              htmlFor="doglan"
              className="text-[16px] font-[poppins-regular]"
            >
              {dil === "tk"
                ? "Doglan senesi"
                : dil === "ru"
                ? "Дата рождения"
                : dil === "tr"
                ? "Doğum günü"
                : "Date of birth"}
            </label>
            <DatePicker
              value={gelyanInfo.birth_date}
              onChange={handleGelyanBirth}
              placeholder="Saýla"
              format="YYYY-MM-DD"
              className="bg-[#FCFCFC] text-[16px] font-[poppins-regular] w-full py-[13px]"
            />
          </div>

          <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
            <label
              htmlFor="email"
              className="text-[16px] font-[poppins-regular]"
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
              value={gelyanInfo.email}
              onChange={(e) =>
                setGelyanInfo({
                  ...gelyanInfo,
                  email: e.target.value,
                })
              }
              required
              id="email"
              type="email"
              className="bg-[#FCFCFC] text-[16px] font-[poppins-regular] w-full sm:px-4 md:px-7 py-3 outline-none rounded-[9px] border border-[#D9D9D9] "
              placeholder="Email"
            />
          </div>
        </div>

        <div className="sm:w-full md:w-[66%] mb-5 ">
          <div className="flex md:flex-row sm:flex-col items-center justify-center gap-[34px] sm:mb-9 md:mb-[46px]">
            <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
              <label
                htmlFor="tel"
                className="text-[16px] font-[poppins-regular]"
              >
                {dil === "tk"
                  ? "Telefon belgisi"
                  : dil === "ru"
                  ? "Номер телефона"
                  : dil === "tr"
                  ? "Telefon numarası"
                  : "Phone number"}
              </label>
              <input
                value={gelyanInfo.phone}
                onChange={(e) =>
                  setGelyanInfo({
                    ...gelyanInfo,
                    phone: e.target.value,
                  })
                }
                required
                type="number"
                className="bg-[#FCFCFC] text-[16px] font-[poppins-regular] w-full sm:px-4 md:px-7 py-3 outline-none rounded-[9px] border border-[#D9D9D9] "
                placeholder={dil === "tk"
                ? "Telefon belgisi"
                : dil === "ru"
                ? "Номер телефона"
                : dil === "tr"
                ? "Telefon numarası"
                : "Phone number"}
                id="tel"
              />
            </div>

            <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
              <label
                htmlFor="jyns"
                className="text-[16px] font-[poppins-regular]"
              >
                {dil === "tk"
                  ? "Raýatlygy"
                  : dil === "ru"
                  ? "Национальность"
                  : dil === "tr"
                  ? "Milliyet"
                  : "Nationality"}
              </label>
              <Select
                value={gelyanInfo.nationality}
                onChange={handleGelyanNation}
                labelRender={labelRender}
                className="ant-selector"
              >
                {countries.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.value}
                  </Option>
                ))}
              </Select>
            </div>
          </div>

          <div className="w-full">
            <h1 className="sm:text-[18px] md:text-[20px] font-[poppins-medium] mb-5">
              {dil === "tk"
                ? "Gelýän ýeri"
                : dil === "ru"
                ? "Исходя из"
                : dil === "tr"
                ? "Geliyor"
                : "Coming from"}
            </h1>
            <div className="flex md:flex-row sm:flex-col items-center justify-center sm:gap-5 md:gap-[34px] sm:mb-9 md:mb-[46px]">
              <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
                <label
                  htmlFor="country"
                  className="text-[16px] font-[poppins-regular]"
                >
                  {dil === "tk"
                    ? "Gelýän ýurdy"
                    : dil === "ru"
                    ? "Страна прибытия"
                    : dil === "tr"
                    ? "Gelen ülke"
                    : "Incoming country"}
                </label>
                <Select
                  value={gelyanInfo.incoming_country}
                  onChange={handleGelyanCountry}
                  labelRender={labelRender}
                  className="ant-selector"
                >
                  {countries.map((option) => (
                    <Option key={option.value} value={option.value}>
                      {option.value}
                    </Option>
                  ))}
                </Select>
              </div>

              <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
                <label
                  htmlFor="meyil"
                  className="text-[16px] font-[poppins-regular]"
                >
                  {dil === "tk"
                    ? "Gelinmegi meýilleşdirilýän sene"
                    : dil === "ru"
                    ? "Дата планируемого прибытия"
                    : dil === "tr"
                    ? "Planlanan varış tarihi"
                    : "Date of planned arrival"}
                </label>
                <DatePicker
                  value={gelyanInfo.travel_date}
                  onChange={handleGelyanTravel}
                  placeholder="Saýla"
                  format="YYYY-MM-DD"
                  className="bg-[#FCFCFC] text-[16px] font-[poppins-regular] w-full py-[13px]"
                />
              </div>
            </div>

            <h1 className="sm:text-[18px] md:text-[20px] font-[poppins-medium] mb-5">
              {dil === "tk"
                ? "Resminamalar"
                : dil === "ru"
                ? "Документы"
                : dil === "tr"
                ? "Belgeler"
                : "Documents"}
            </h1>
            <div className="flex md:flex-row sm:flex-col items-center justify-center sm:gap-5 md:gap-[34px] sm:mb-9 md:mb-[46px]">
              <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
                <p className="text-[16px] font-[poppins-regular]">
                  {dil === "tk"
                    ? "Passport"
                    : dil === "ru"
                    ? "Паспорт"
                    : dil === "tr"
                    ? "Pasaport"
                    : "Passport"}
                </p>
                <DropFileInput
                  files={passport}
                  onFileChange={onFileChangePassport}
                />
              </div>

              <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
                <p className="text-[16px] font-[poppins-regular]">
                  {dil === "tk"
                    ? "Suraty"
                    : dil === "ru"
                    ? "Фото"
                    : dil === "tr"
                    ? "Fotoğraf"
                    : "Photo"}
                </p>
                <DropFileInput
                  files={photo}
                  onFileChange={(files) => onFileChangePhoto(files)}
                />
              </div>
            </div>

            <h1 className="sm:text-[18px] md:text-[20px] font-[poppins-medium] mb-5">
              {dil === "tk"
                ? "Bellik"
                : dil === "ru"
                ? "Примечания"
                : dil === "tr"
                ? "Notlar"
                : "Notes"}
            </h1>

            <div className="flex flex-col justify-start gap-[6px] w-[full] items-baseline mb-[72px]">
              <textarea
                value={gelyanInfo.notes}
                onChange={(e) =>
                  setGelyanInfo({ ...gelyanInfo, notes: e.target.value })
                }
                placeholder={dil === "tk"
                ? "Bellik"
                : dil === "ru"
                ? "Примечания"
                : dil === "tr"
                ? "Notlar"
                : "Notes"}
                id="bellik"
                className="bg-[#FCFCFC] min-h-[129px] w-full text-[16px] font-[poppins-regular] sm:px-4 md:px-7 py-3 outline-none rounded-[9px] border border-[#D9D9D9] "
              ></textarea>
            </div>

            <div className="sm:w-full md:w-[65%]">
              <div
                onClick={() => postMessageIncoming()}
                className="cursor-pointer mb-[34px] flex items-baseline flex-col justify-start gap-2 "
              >
                <p className="text-[16px] font-[poppins-medium]">
                  {dil === "tk"
                    ? "Maglumatlary ugrat"
                    : dil === "ru"
                    ? "Отправить информацию"
                    : dil === "tr"
                    ? "Bilgileri Gönder"
                    : "Send Informations"}
                </p>
                <img src={visa_line} alt="visa" />
              </div>

              <p className="text-[#878787] text-[16px] font-[poppins-regular] ">
                Lorem ipsum dolor sit amet consectetur. Arcu mattis amet tellus
                est vitae molestie volutpat. Turpis montes eu pellentesque sed
                vulputate hac elementum a sociis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Gelyan;
