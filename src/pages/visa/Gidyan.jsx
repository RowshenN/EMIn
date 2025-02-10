import React, { useState, useContext } from "react";
import DropFileInput from "../../components/dropFile";
import { Select, message, DatePicker } from "antd";
import { axiosInstance } from "../../utils/axiosInstance";
import { countries } from "../../components/Countries";
import visa_line from "../../images/visa-send-line.svg";
import moment from "moment"; // Import moment
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

const Gidyan = () => {
  const { dil } = useContext(SebedimContext);
  const { Option } = Select;
  const [photo, setPhoto] = useState([]); // Store File objects
  const [local_passport, setLocal_passport] = useState([]);
  const [international_passport, setInternational_passport] = useState([]);
  const [birth_certificate, setBirth_certificate] = useState([]);
  const [marriage_certificate, setMarriage_certificate] = useState([]);

  const [gidyanInfo, setGidyanInfo] = useState({
    name: "",
    surname: "",
    patronymic_name: "",
    gender: "",
    birth_date: null, // Store as moment object or null
    email: "",
    phone: "",
    nationality: "",
    outgoing_country: "",
    travel_date: null, // Store as moment object or null
    notes: "",
  });

  const onFileChangePhoto = (files) => {
    setPhoto(files);
    console.log(photo);
  };

  const onFileLocal_passport = (files) => {
    setLocal_passport(files);
    console.log(local_passport);
  };

  const onFileInternational_passport = (files) => {
    setInternational_passport(files);
    console.log(international_passport);
  };

  const onFileChangebirthdate = (files) => {
    setBirth_certificate(files);
    console.log(birth_certificate);
  };

  const onFileChangemarriage = (files) => {
    setMarriage_certificate(files);
    console.log(marriage_certificate);
  };

  const postMessageOutgoing = async () => {
    if (
      gidyanInfo.name &&
      gidyanInfo.surname &&
      gidyanInfo.gender &&
      gidyanInfo.birth_date &&
      gidyanInfo.email &&
      gidyanInfo.phone &&
      gidyanInfo.nationality &&
      gidyanInfo.outgoing_country &&
      gidyanInfo.travel_date &&
      photo.length > 0 &&
      local_passport.length > 0 &&
      international_passport.length > 0 &&
      birth_certificate.length > 0 &&
      marriage_certificate.length > 0
    ) {
      const formData = new FormData();

      photo.forEach((file) => formData.append("photo", file));
      local_passport.forEach((file) => formData.append("local_passport", file));
      international_passport.forEach((file) =>
        formData.append("international_passport", file)
      );
      birth_certificate.forEach((file) =>
        formData.append("birth_certificate", file)
      );
      marriage_certificate.forEach((file) =>
        formData.append("marriage_certificate", file)
      );

      formData.append("name", gidyanInfo.name);
      formData.append("surname", gidyanInfo.surname);
      formData.append("gender", gidyanInfo.gender);
      formData.append(
        "birth_date",
        gidyanInfo.birth_date
          ? gidyanInfo.birth_date.format("YYYY-MM-DD")
          : null
      );
      formData.append("email", gidyanInfo.email);
      formData.append("phone", gidyanInfo.phone);
      formData.append("nationality", gidyanInfo.nationality);
      formData.append("outgoing_country", gidyanInfo.outgoing_country);
      formData.append(
        "travel_date",
        gidyanInfo.travel_date
          ? gidyanInfo.travel_date.format("YYYY-MM-DD")
          : null
      );
      formData.append("notes", gidyanInfo.notes);

      try {
        const res = await axiosInstance.post("/visas/outgoing", formData);
        message.success("Outgoing visa created successfully!");
        setGidyanInfo({
          // Clear form data
          name: "",
          surname: "",
          patronymic_name: "",
          gender: "",
          birth_date: null,
          email: "",
          phone: "",
          nationality: "",
          outgoing_country: "",
          travel_date: null,
          notes: "",
        });
        setPhoto([]);
        setLocal_passport([]);
        setInternational_passport([]);
        setBirth_certificate([]);
        setMarriage_certificate([]);
      } catch (err) {
        console.error(err);
        message.error("Error creating outgoing visa. Please try again.");
      }
    } else {
      message.warning(
        "Please fill all required fields and upload the documents!"
      );
    }
  };

  const handleGidyanGender = (value) =>
    setGidyanInfo({ ...gidyanInfo, gender: value });
  const handleGidyanBirth = (value) =>
    setGidyanInfo({ ...gidyanInfo, birth_date: value });
  const handleGidyanNation = (value) =>
    setGidyanInfo({ ...gidyanInfo, nationality: value });
  const handleGidyanCountry = (value) =>
    setGidyanInfo({ ...gidyanInfo, outgoing_country: value });
  const handleGidyanDate = (value) =>
    setGidyanInfo({ ...gidyanInfo, travel_date: value });

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
        <div className="w-full flex md:flex-row sm:flex-col items-center justify-center sm:gap-5 md:gap-[34px] mb-5">
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
              value={gidyanInfo.name}
              onChange={(e) =>
                setGidyanInfo({ ...gidyanInfo, name: e.target.value })
              }
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
              value={gidyanInfo.surname}
              onChange={(e) =>
                setGidyanInfo({
                  ...gidyanInfo,
                  surname: e.target.value,
                })
              }
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
              value={gidyanInfo.patronymic_name}
              onChange={(e) =>
                setGidyanInfo({
                  ...gidyanInfo,
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

        <div className="w-full flex md:flex-row sm:flex-col items-center justify-center sm:gap-5 md:gap-[34px] mb-5">
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
              value={gidyanInfo.gender}
              onChange={handleGidyanGender}
              labelRender={labelRender}
              defaultValue="1"
              className="ant-selector"
              options={optionsGender}
            />
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
              value={gidyanInfo.birth_date}
              onChange={handleGidyanBirth}
              placeholder="Saýla"
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
              value={gidyanInfo.email}
              onChange={(e) =>
                setGidyanInfo({
                  ...gidyanInfo,
                  email: e.target.value,
                })
              }
              id="email"
              type="email"
              className="bg-[#FCFCFC] text-[16px] font-[poppins-regular] w-full sm:px-4 md:px-7 py-3 outline-none rounded-[9px] border border-[#D9D9D9] "
              placeholder="Email"
            />
          </div>
        </div>

        <div className="sm:w-full md:w-[66%] mb-5 ">
          <div className="flex md:flex-row sm:flex-col items-center justify-center sm:gap-5 md:gap-[34px] sm:mb-9 md:mb-[46px]">
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
                value={gidyanInfo.phone}
                onChange={(e) =>
                  setGidyanInfo({
                    ...gidyanInfo,
                    phone: e.target.value,
                  })
                }
                type="number"
                className="bg-[#FCFCFC] text-[16px] font-[poppins-regular] w-full sm:px-4 md:px-7 py-3 outline-none rounded-[9px] border border-[#D9D9D9] "
                placeholder={
                  dil === "tk"
                    ? "Telefon belgisi"
                    : dil === "ru"
                    ? "Номер телефона"
                    : dil === "tr"
                    ? "Telefon numarası"
                    : "Phone number"
                }
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
                labelRender={labelRender}
                defaultValue="1"
                className="ant-selector"
                value={gidyanInfo.nationality}
                onChange={handleGidyanNation}
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
            <h1 className="sm:text-[18px] md:text-[20px] font-[poppins-medium] sm:mb-3 md:mb-5">
              {dil === "tk"
                ? "Gidýän ýeri"
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
                    ? "Meýilleşdirilýän ýurt"
                    : dil === "ru"
                    ? "Страна планирования"
                    : dil === "tr"
                    ? "Geliyor"
                    : "Planning country"}
                </label>
                <Select
                  labelRender={labelRender}
                  defaultValue="1"
                  className="ant-selector"
                  value={gidyanInfo.outgoing_country}
                  onChange={handleGidyanCountry}
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
                  Gidilmegi meýilleşdirilýän sene
                </label>
                <DatePicker
                  placeholder="Saýla"
                  className="bg-[#FCFCFC] text-[16px] font-[poppins-regular] w-full py-[13px]"
                  value={gidyanInfo.travel_date}
                  onChange={handleGidyanDate}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:mb-9 md:mb-[46px]">
          <h1 className="sm:text-[18px] md:text-[20px] font-[poppins-medium] mb-5">
            {dil === "tk"
              ? "Resminamalar"
              : dil === "ru"
              ? "Документы"
              : dil === "tr"
              ? "Belgeler"
              : "Documents"}
          </h1>
          <div className="w-full flex md:flex-row sm:flex-col items-center justify-center sm:gap-5 md:gap-[34px] mb-5">
            <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
              <p className="text-[16px] font-[poppins-regular]">
                {dil === "tk"
                  ? "Ýerli passport"
                  : dil === "ru"
                  ? "Местный паспорт"
                  : dil === "tr"
                  ? "Yerel Pasaport"
                  : "Local Passport"}
              </p>
              <DropFileInput
                files={local_passport}
                onFileChange={onFileLocal_passport}
              />
            </div>

            <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
              <p className="text-[16px] font-[poppins-regular]">
                Zagran passport
              </p>
              <DropFileInput
                files={international_passport}
                onFileChange={onFileInternational_passport}
              />
            </div>

            <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
              <p className="text-[16px] font-[poppins-regular]">Metrka</p>
              <DropFileInput
                files={birth_certificate}
                onFileChange={(files) => onFileChangebirthdate(files)}
              />
            </div>
          </div>

          <div className="flex md:flex-row sm:flex-col items-center justify-center sm:gap-5 md:gap-[34px] sm:w-full md:w-[66%] ">
            <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
              <p className="text-[16px] font-[poppins-regular]">
                Eger maşgalaly bolsa nika şahadatnamasy
              </p>
              <DropFileInput
                files={marriage_certificate}
                onFileChange={onFileChangemarriage}
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
              <DropFileInput files={photo} onFileChange={onFileChangePhoto} />
            </div>
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

        <div className="flex flex-col justify-start gap-[6px] sm:w-full md:w-[70%] items-baseline mb-[72px]">
          <textarea
            value={gidyanInfo.notes}
            onChange={(e) =>
              setGidyanInfo({ ...gidyanInfo, notes: e.target.value })
            }
            placeholder={
              dil === "tk"
                ? "Bellik"
                : dil === "ru"
                ? "Примечания"
                : dil === "tr"
                ? "Notlar"
                : "Notes"
            }
            id="bellik"
            className="bg-[#FCFCFC] min-h-[129px] sm:w-full md:w-[95%] text-[16px] font-[poppins-regular] sm:px-4 md:px-7 py-3 outline-none rounded-[9px] border border-[#D9D9D9] "
          ></textarea>
        </div>

        <div className="sm:w-full md:w-[65%]">
          <div
            onClick={() => postMessageOutgoing()}
            className="cursor-pointer sm:mb-5 md:mb-[34px] flex items-baseline flex-col justify-start gap-2 "
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
            Lorem ipsum dolor sit amet consectetur. Arcu mattis amet tellus est
            vitae molestie volutpat. Turpis montes eu pellentesque sed vulputate
            hac elementum a sociis.
          </p>
        </div>
      </div>
    </form>
  );
};

export default Gidyan;
