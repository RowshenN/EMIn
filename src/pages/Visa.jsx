import React, { useState } from "react";

import surat from "../images/visamain.png";
// import line from "../images/visa-line.svg";
// import avatar from "../images/visa-avatar.png";

// import down from "../images/visa-down-vector.svg";
import visa_line from "../images/visa-send-line.svg";

import Navigation from "../components/navbars/Navigation";
import { countries } from "../components/Countries";
import AreYouReady from "../components/AreYouReady";
import DropFileInput from "../components/dropFile";
import { Select } from "antd";
import { message } from "antd";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { axiosInstance } from "../utils/axiosInstance";
dayjs.extend(customParseFormat);

const optionsGender = [
  {
    label: "Male",
    value: "Male",
  },
  {
    label: "Female",
    value: "Female",
  },
];

const labelRender = (props) => {
  const { label, value } = props;
  if (label) {
    return value;
  }
  return (
    <span className="text-[#878787] text-[16px] font-[poppins-regular] ">
      Saýla
    </span>
  );
};

const Visa = () => {
  const { Option } = Select;
  const [photo, setPhoto] = useState("");
  const [passport, setPassport] = useState("");
  const [local_passport, setLocal_passport] = useState("");
  const [international_passport, setInternational_passport] = useState("");
  const [birth_certificate, setBirth_certificate] = useState("");
  const [marriage_certificate, setMarriage_certificate] = useState("");
  const [active, setActive] = useState(false);
  const [gelyan, setGelyan] = useState(true);

  const [gelyanInfo, setGelyanInfo] = useState({
    name: "",
    surname: "",
    patronymic_name: "",
    gender: "",
    birth_date: "",
    email: "",
    phone: "",
    nationality: "",
    incoming_country: "",
    travel_date: "",
    notes: "",
  });

  const [gidyanInfo, setGidyanInfo] = useState({
    label: "",
    surname: "",
    patronymic_name: "",
    gender: "",
    birth_date: "",
    email: "",
    phone: "",
    nationality: "",
    outgoing_country: "",
    travel_date: "",
    notes: "",
  });

  const onFileChangePassport = (file) => {
    file ? setActive(true) : setActive(false);
    setPhoto(file);
  };

  const onFileLocal_passport = (file) => {
    file ? setActive(true) : setActive(false);
    setLocal_passport(file);
  };

  const onFileInternational_passport = (file) => {
    file ? setActive(true) : setActive(false);
    setInternational_passport(file);
  };

  const onFileChangePhoto = (file) => {
    file ? setActive(true) : setActive(false);
    setPassport(file);
  };

  const onFileChangebirthdate = (file) => {
    file ? setActive(true) : setActive(false);
    setBirth_certificate(file);
  };

  const onFileChangemarriage = (file) => {
    file ? setActive(true) : setActive(false);
    setMarriage_certificate(file);
  };

  // Gelyanler

  const handleGelyanGender = (value) => {
    setGelyanInfo({ ...gidyanInfo, gender: value });
  };

  const handleGelyanBirth = (value) => {
    setGelyanInfo({ ...gelyanInfo, birth_date: value });
  };

  const handleGelyanNation = (value) => {
    setGelyanInfo({ ...gelyanInfo, nationality: value });
  };

  const handleGelyanCountry = (value) => {
    setGelyanInfo({ ...gelyanInfo, incoming_country: value });
  };

  const handleGelyanTravel = (value) => {
    setGelyanInfo({ ...gelyanInfo, travel_date: value });
  };

  // Gidyanler
  const handleGidyanGender = (value) => {
    setGidyanInfo({ ...gidyanInfo, gender: value });
  };

  const handleGidyanBirth = (value) => {
    setGidyanInfo({ ...gidyanInfo, birth_date: value });
  };

  const handleGidyanNation = (value) => {
    setGidyanInfo({ ...gidyanInfo, nationality: value });
  };

  const handleGidyanCountry = (value) => {
    setGidyanInfo({ ...gidyanInfo, outgoing_country: value });
  };

  const handleGidyanDate = (value) => {
    setGidyanInfo({ ...gidyanInfo, travel_date: value });
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
      gelyanInfo.travel_date
    ) {
      const formData = new FormData();
      formData.append("photo", photo);
      formData.append("passport", passport);
      formData.append("name", gelyanInfo.name);
      formData.append("surname", gelyanInfo.surname);
      formData.append("subject", gelyanInfo.gender);
      formData.append("email", gelyanInfo.birth_date);
      formData.append("email", gelyanInfo.email);
      formData.append("phone", gelyanInfo.phone);
      formData.append("nationality", gelyanInfo.nationality);
      formData.append("incoming_country", gelyanInfo.incoming_country);
      formData.append("travel_date", gelyanInfo.travel_date);
      formData.append("notes", gelyanInfo.notes);
      await axiosInstance
        .post("/visas/incoming", formData)
        .then((res) => {
          message.success("Your message has been sent successfully!");
          setGelyanInfo({
            name: "",
            surname: "",
            patronymic_name: "",
            gender: "",
            birth_date: "",
            email: "",
            phone: "",
            nationality: "",
            incoming_country: "",
            travel_date: "",
            notes: "",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      message.warning("Please fill the input!");
    }
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
      gidyanInfo.travel_date
    ) {
      const formData = new FormData();
      formData.append("photo", photo);
      formData.append("local_passport", local_passport);
      formData.append("international_passport", international_passport);
      formData.append("birth_certificate", birth_certificate);
      formData.append("marriage_certificate", marriage_certificate);
      formData.append("name", gidyanInfo.name);
      formData.append("surname", gidyanInfo.surname);
      formData.append("gender", gidyanInfo.gender);
      formData.append("email", gidyanInfo.birth_date);
      formData.append("email", gidyanInfo.email);
      formData.append("phone", gidyanInfo.phone);
      formData.append("nationality", gidyanInfo.nationality);
      formData.append("outgoing_country", gidyanInfo.outgoing_country);
      formData.append("travel_date", gidyanInfo.travel_date);
      formData.append("notes", gidyanInfo.notes);
      await axiosInstance
        .post("/visas/outgoing", formData)
        .then((res) => {
          message.success("Outgoing visa created successfully!");
          setGidyanInfo({
            name: "",
            surname: "",
            patronymic_name: "",
            gender: "",
            birth_date: "",
            email: "",
            phone: "",
            nationality: "",
            incoming_country: "",
            travel_date: "",
            notes: "",
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
    <div className="lg:w-full sm:w-[94%] mx-auto ">
      <Navigation />
      <div className="mt-10 sm:w-full md:w-[90%] mx-auto sm:mb-[235px] md:mb-[370px]">
        <div className="w-full relative sm:mb-10 md:mb-[64px] ">
          <img src={surat} alt="surat" className="rounded-[23px] sm:h-[123px] md:h-full w-full object-cover" />
          <p className="absolute top-[35%] sm:left-[40%] xs:left-[45%] text-white md:text-[35px] sm:text-[26px] lg:text-[50px] font-[poppins-semibold] ">
            Visa
          </p>
        </div>

        {/* <div className="w-[90%] mx-auto flex items-start justify-center gap-[80px]">
          <form className="w-[50%]">
            <h1 className="text-[32px] font-[poppins-semibold] mb-4 ">
              Choose country
            </h1>
            <p className="text-[16px] font-[poppins-regular] mb-6">
              Lorem ipsum dolor sit amet consectetur. Quam placerat viverra
              phasellus lorem viverra massa purus platea.
            </p>

            <select name="" defaultValue={"Choose"} id="">
              <option value="Choose">Option</option>
            </select>

            <p className="text-[16px] font-[poppins-regular] mb-6">
              Lorem ipsum dolor sit amet consectetur. Quam placerat viverra
              phasellus lorem viverra massa purus platea.
            </p>

            <div className="flex w-full flex-col items-baseline justify-start gap-[5px] mb-6 ">
              <label
                className="text-[16px] font-[poppins-regular]"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-[80%] text-[16px] font-[poppins-regular] outline-none border border-[#D9D9D9] bg-[#FCFCFC] py-[13px] sm:px-4 md:px-7 rounded-[9px] "
                type="text"
                id="name"
                placeholder="Name"
              />
            </div>

            <div className="flex w-full flex-col items-baseline justify-start gap-[5px] mb-6 ">
              <label
                className="text-[16px] font-[poppins-regular]"
                htmlFor="surname"
              >
                Surname
              </label>
              <input
                className="w-[80%] text-[16px] font-[poppins-regular] outline-none border border-[#D9D9D9] bg-[#FCFCFC] py-[13px] sm:px-4 md:px-7 rounded-[9px] "
                type="text"
                id="surname"
                placeholder="Surname"
              />
            </div>

            <div className="flex w-full flex-col items-baseline justify-start gap-[5px] mb-6 ">
              <label
                className="text-[16px] font-[poppins-regular]"
                htmlFor="surname"
              >
                Surname
              </label>
              <input
                className="w-[80%] text-[16px] font-[poppins-regular] outline-none border border-[#D9D9D9] bg-[#FCFCFC] py-[13px] sm:px-4 md:px-7 rounded-[9px] "
                type="text"
                id="surname"
                placeholder="Surname"
              />
            </div>

            <div className="flex w-full flex-col items-baseline justify-start gap-[5px] mb-[58px] ">
              <label
                className="text-[16px] font-[poppins-regular]"
                htmlFor="surname"
              >
                Surname
              </label>
              <input
                className="w-[80%] text-[16px] font-[poppins-regular] outline-none border border-[#D9D9D9] bg-[#FCFCFC] py-[13px] sm:px-4 md:px-7 rounded-[9px] "
                type="text"
                id="surname"
                placeholder="Surname"
              />
            </div>

            <div className="cursor-pointer w-fit">
              <p className="text-[16px] font-[poppins-medium] mb-2">Send information</p>
              <img src={line} alt="line" />
            </div>
          </form>

          <div className="w-[50%] border border-[#D6D6D6] rounded-[20px] px-[37px] pt-[32px] pb-[100px] ">
            <p className="text-[21px] font-[poppins-medium] ">Required documents *</p>

            <p className="mt-[21px] mb-[29px] text-[16px] font-[poppins-regular]">
              Lorem ipsum dolor sit amet consectetur. Quam placerat viverra
              phasellus lorem viverra massa purus platea.
            </p>

            <img src={avatar} alt="avatar" />

            <p className="mb-[21px] mt-[29px] text-[16px] font-[poppins-regular]">Lorem ipsum dolor sit amet consectetur.</p>

            <p className="mb-[21px] text-[16px] font-[poppins-regular]">
              Lorem ipsum dolor sit amet consectetur. Quam placerat viverra
              phasellus lorem viverra massa purus platea.
            </p>

            <p className="mb-[21px] text-[16px] font-[poppins-regular]">
              Lorem ipsum dolor sit amet consectetur. Arcu mattis amet tellus
              est vitae molestie volutpat. Turpis montes eu pellentesque sed
              vulputate hac elementum a sociis.
            </p>

            <p className="mb-[21px] text-[16px] font-[poppins-regular]">
              Lorem ipsum dolor sit amet consectetur. Quam placerat viverra
              phasellus lorem viverra massa purus platea.
            </p>

            <p className="text-[16px] font-[poppins-regular]">
              Lorem ipsum dolor sit amet consectetur. Arcu mattis amet tellus
              est vitae molestie volutpat. Turpis montes eu pellentesque sed
              vulputate hac elementum a sociis.
            </p>
          </div>
        </div> */}

        <div className="sm:w-full md:w-[90%] mx-auto ">
          <div className="w-full flex items-center justify-center gap-5 sm:pb-7 md:mb-[60px] ">
            <div
              onClick={() => setGelyan(true)}
              className={
                gelyan
                  ? "text-white cursor-pointer sm:py-[10px] md:py-[15px] sm:px-[39px] md:px-[34px] bg-[#009833] rounded-[15px] sm:text-[12px] md:text-[20px] font-[poppins-medium] "
                  : "text-black cursor-pointer sm:py-[10px] md:py-[15px] sm:px-[39px] md:px-[34px] bg-[#F4F4F4] rounded-[15px] sm:text-[12px] md:text-[20px] font-[poppins-medium] "
              }
            >
              <p>Gelýän</p>
            </div>

            <div
              onClick={() => setGelyan(false)}
              className={
                gelyan
                  ? " text-black cursor-pointer sm:py-[10px] md:py-[15px]  sm:px-[39px] md:px-[34px] bg-[#F4F4F4] rounded-[15px] sm:text-[12px] md:text-[20px] font-[poppins-medium] "
                  : "text-white cursor-pointer sm:py-[10px] md:py-[15px]  sm:px-[39px] md:px-[34px] bg-[#009833]  rounded-[15px] sm:text-[12px] md:text-[20px] font-[poppins-medium] "
              }
            >
              <p>Gidýän</p>
            </div>
          </div>
          {gelyan ? (
            <form>
              <h1 className="sm:text-[18px] md:text-[20px] font-[poppins-medium] sm:mb-3 md:mb-5 ">
                Maglumatlar
              </h1>

              <div className="w-full">
                <div className="w-full md:flex-row sm:flex-col flex items-center justify-center sm:gap-5 md:gap-[34px] mb-5">
                  <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
                    <label
                      htmlFor="name"
                      className="text-[16px] font-[poppins-regular]"
                    >
                      Ady
                    </label>
                    <input
                      value={gelyanInfo.name}
                      onChange={(e) =>
                        setGelyanInfo({ ...gelyanInfo, name: e.target.value })
                      }
                      required
                      type="text"
                      className="bg-[#FCFCFC] text-[16px] font-[poppins-regular] w-full sm:px-4 md:px-7 py-3 outline-none rounded-[9px] border border-[#D9D9D9] "
                      placeholder="Ady"
                      id="name"
                    />
                  </div>

                  <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
                    <label
                      htmlFor="surname"
                      className="text-[16px] font-[poppins-regular]"
                    >
                      Familiýasy
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
                      placeholder="Ady"
                      id="surname"
                    />
                  </div>

                  <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
                    <label
                      htmlFor="atasy"
                      className="text-[16px] font-[poppins-regular]"
                    >
                      Atasynyň ady
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
                      placeholder="Atasynyň ady"
                    />
                  </div>
                </div>

                <div className="w-full md:flex-row sm:flex-col flex items-center justify-center sm:gap-5 md:gap-[34px] mb-5 ">
                  <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
                    <label
                      htmlFor="jyns"
                      className="text-[16px] font-[poppins-regular]"
                    >
                      Jynsy
                    </label>
                    <Select
                      labelRender={labelRender}
                      defaultValue="1"
                      className="ant-selector"
                      options={optionsGender}
                      value={gelyanInfo.gender}
                      onChange={handleGelyanGender}
                    />
                  </div>

                  <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
                    <label
                      htmlFor="doglan"
                      className="text-[16px] font-[poppins-regular]"
                    >
                      Doglan senesi
                    </label>
                    <DatePicker
                      value={gelyanInfo.birth_date}
                      onChange={handleGelyanBirth}
                      placeholder="Saýla"
                      className="bg-[#FCFCFC] text-[16px] font-[poppins-regular] w-full py-[13px]"
                    />
                  </div>

                  <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
                    <label
                      htmlFor="email"
                      className="text-[16px] font-[poppins-regular]"
                    >
                      Email
                    </label>
                    <input
                      value={gelyanInfo.email}
                      onChange={(e) =>
                        setGelyanInfo({ ...gelyanInfo, email: e.target.value })
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
                        Telefon belgisi
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
                        placeholder="Telefon belgisi"
                        id="tel"
                      />
                    </div>

                    <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
                      <label
                        htmlFor="jyns"
                        className="text-[16px] font-[poppins-regular]"
                      >
                        Raýatlygy
                      </label>
                      <Select
                        value={gelyanInfo.nationality}
                        onChange={handleGelyanNation}
                        labelRender={labelRender}
                        defaultValue="1"
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
                      Gelýän ýeri
                    </h1>
                    <div className="flex md:flex-row sm:flex-col items-center justify-center sm:gap-5 md:gap-[34px] sm:mb-9 md:mb-[46px]">
                      <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
                        <label
                          htmlFor="country"
                          className="text-[16px] font-[poppins-regular]"
                        >
                          Gelýän ýurdy
                        </label>
                        <Select
                          value={gelyanInfo.incoming_country}
                          onChange={handleGelyanCountry}
                          labelRender={labelRender}
                          defaultValue="1"
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
                          Gelinmegi meýilleşdirilýän sene
                        </label>
                        <DatePicker
                          value={gelyanInfo.travel_date}
                          onChange={handleGelyanTravel}
                          placeholder="Saýla"
                          className="bg-[#FCFCFC] text-[16px] font-[poppins-regular] w-full py-[13px]"
                        />
                      </div>
                    </div>

                    <h1 className="sm:text-[18px] md:text-[20px] font-[poppins-medium] mb-5">
                      Resminamalar
                    </h1>
                    <div className="flex md:flex-row sm:flex-col items-center justify-center sm:gap-5 md:gap-[34px] sm:mb-9 md:mb-[46px]">
                      <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
                        <p className="text-[16px] font-[poppins-regular]">
                          Passport
                        </p>
                        <DropFileInput
                          files={passport}
                          onFileChange={(files) => onFileChangePassport(files)}
                        />
                      </div>

                      <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
                        <p className="text-[16px] font-[poppins-regular]">
                          Suraty
                        </p>
                        <DropFileInput
                          files={photo}
                          onFileChange={(files) => onFileChangePhoto(files)}
                        />
                      </div>
                    </div>

                    <h1 className="sm:text-[18px] md:text-[20px] font-[poppins-medium] mb-5">
                      Bellik
                    </h1>

                    <div className="flex flex-col justify-start gap-[6px] sm:w-full md:w-1/2 items-baseline mb-[72px]">
                      <label
                        htmlFor="bellik"
                        className="text-[16px] font-[poppins-regular]"
                      >
                        Bellik
                      </label>
                      <textarea
                        placeholder="Tekst"
                        id="bellik"
                        className="bg-[#FCFCFC] min-h-[129px] sm:w-full md:w-[95%] text-[16px] font-[poppins-regular] sm:px-4 md:px-7 py-3 outline-none rounded-[9px] border border-[#D9D9D9] "
                      ></textarea>
                    </div>

                    <div className="sm:w-full md:w-[65%]">
                      <div
                        onClick={() => postMessageIncoming()}
                        className="cursor-pointer mb-[34px] flex items-baseline flex-col justify-start gap-2 "
                      >
                        <p className="text-[16px] font-[poppins-medium]">
                          Maglumatlary ugrat
                        </p>
                        <img src={visa_line} alt="visa" />
                      </div>

                      <p className="text-[#878787] text-[16px] font-[poppins-regular] ">
                        Lorem ipsum dolor sit amet consectetur. Arcu mattis amet
                        tellus est vitae molestie volutpat. Turpis montes eu
                        pellentesque sed vulputate hac elementum a sociis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <form>
              <h1 className="sm:text-[18px] md:text-[20px] font-[poppins-medium] sm:mb-3 md:mb-5 ">
                Maglumatlar
              </h1>

              <div className="w-full">
                <div className="w-full flex md:flex-row sm:flex-col items-center justify-center sm:gap-5 md:gap-[34px] mb-5">
                  <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
                    <label
                      htmlFor="name"
                      className="text-[16px] font-[poppins-regular]"
                    >
                      Ady
                    </label>
                    <input
                      value={gidyanInfo.name}
                      onChange={(e) =>
                        setGidyanInfo({ ...gidyanInfo, name: e.target.value })
                      }
                      type="text"
                      className="bg-[#FCFCFC] text-[16px] font-[poppins-regular] w-full sm:px-4 md:px-7 py-3 outline-none rounded-[9px] border border-[#D9D9D9] "
                      placeholder="Ady"
                      id="name"
                    />
                  </div>

                  <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
                    <label
                      htmlFor="surname"
                      className="text-[16px] font-[poppins-regular]"
                    >
                      Familiýasy
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
                      placeholder="Ady"
                      id="surname"
                    />
                  </div>

                  <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
                    <label
                      htmlFor="atasy"
                      className="text-[16px] font-[poppins-regular]"
                    >
                      Atasynyň ady
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
                      placeholder="Atasynyň ady"
                    />
                  </div>
                </div>

                <div className="w-full flex md:flex-row sm:flex-col items-center justify-center sm:gap-5 md:gap-[34px] mb-5">
                  <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
                    <label
                      htmlFor="jyns"
                      className="text-[16px] font-[poppins-regular]"
                    >
                      Jynsy
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
                      Doglan senesi
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
                      Email
                    </label>
                    <input
                      value={gidyanInfo.email}
                      onChange={(e) =>
                        setGidyanInfo({ ...gidyanInfo, email: e.target.value })
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
                        Telefon belgisi
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
                        placeholder="Telefon belgisi"
                        id="tel"
                      />
                    </div>

                    <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
                      <label
                        htmlFor="jyns"
                        className="text-[16px] font-[poppins-regular]"
                      >
                        Raýatlygy
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
                      Gelýän ýeri
                    </h1>
                    <div className="flex md:flex-row sm:flex-col items-center justify-center sm:gap-5 md:gap-[34px] sm:mb-9 md:mb-[46px]">
                      <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
                        <label
                          htmlFor="country"
                          className="text-[16px] font-[poppins-regular]"
                        >
                          Meýilleşdirilýän ýurt
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
                          Gelinmegi meýilleşdirilýän sene
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
                    Resminamalar
                  </h1>
                  <div className="w-full flex md:flex-row sm:flex-col items-center justify-center sm:gap-5 md:gap-[34px] mb-5">
                    <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
                      <p className="text-[16px] font-[poppins-regular]">
                        Ýerli passport
                      </p>
                      <DropFileInput
                        files={local_passport}
                        onFileChange={(files) => onFileLocal_passport(files)}
                      />
                    </div>

                    <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
                      <p className="text-[16px] font-[poppins-regular]">
                        Zagran passport
                      </p>
                      <DropFileInput
                        files={international_passport}
                        onFileChange={(files) =>
                          onFileInternational_passport(files)
                        }
                      />
                    </div>

                    <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
                      <p className="text-[16px] font-[poppins-regular]">
                        Metrka
                      </p>
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
                        onFileChange={(files) => onFileChangemarriage(files)}
                      />
                    </div>

                    <div className="flex flex-col justify-start gap-[6px] w-full items-baseline">
                      <p className="text-[16px] font-[poppins-regular]">
                        Suraty
                      </p>
                      <DropFileInput
                        files={photo}
                        onFileChange={(files) => onFileChangePhoto(files)}
                      />
                    </div>
                  </div>
                </div>

                <h1 className="sm:text-[18px] md:text-[20px] font-[poppins-medium] mb-5">
                  Bellik
                </h1>

                <div className="flex flex-col justify-start gap-[6px] sm:w-full md:w-[414px] items-baseline mb-[72px]">
                  <label
                    htmlFor="bellik"
                    className="text-[16px] font-[poppins-regular]"
                  >
                    Bellik
                  </label>
                  <textarea
                    value={gidyanInfo.notes}
                    onChange={(e) =>
                      setGidyanInfo({ ...gidyanInfo, notes: e.target.value })
                    }
                    placeholder="Tekst"
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
                      Maglumatlary ugrat
                    </p>
                    <img src={visa_line} alt="visa" />
                  </div>

                  <p className="text-[#878787] text-[16px] font-[poppins-regular] ">
                    Lorem ipsum dolor sit amet consectetur. Arcu mattis amet
                    tellus est vitae molestie volutpat. Turpis montes eu
                    pellentesque sed vulputate hac elementum a sociis.
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>

      <AreYouReady />
    </div>
  );
};

export default Visa;
