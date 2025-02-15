import React, { useState, useContext } from "react";
import DropFileInput from "../../components/dropFile";
import { Select, message, DatePicker } from "antd";
import { axiosInstance } from "../../utils/axiosInstance";
import { countries } from "../../components/Countries";
import visa_line from "../../images/visa-send-line.svg";
import { SebedimContext } from "../../context/Context";
import moment from "moment";

const optionsGender = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
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

  const [passport, setPassport] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  const resizeAndConvertImage = (
    file,
    maxWidth,
    maxHeight,
    targetType = "image/jpeg",
    quality = 0.7
  ) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          let width = img.width;
          let height = img.height;

          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);

          canvas.toBlob(
            (blob) => {
              const resizedFile = new File([blob], file.name, {
                type: targetType,
              });
              resolve(resizedFile);
            },
            targetType,
            quality
          );
        };
        img.onerror = reject;
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    });
  };

  const handleImageUpload = async (files, setFilesState, fieldName) => {
    const resizedFiles = [];
    for (const file of files) {
      try {
        const resizedFile = await resizeAndConvertImage(file, 800, 600);
        resizedFiles.push(resizedFile);
      } catch (error) {
        console.error(`Error resizing ${fieldName} image:`, error);
        message.error(
          `Error resizing ${fieldName} image. Using original file.`
        );
        resizedFiles.push(file);
      }
    }
    setFilesState(resizedFiles);
  };

  const onFileChangePassport = (files) => {
    setPassport(files);
  };

  const onFileChangePhoto = (files) => {
    setPhoto(files);
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Validation rules (same as before)
    if (!gelyanInfo.name) {
      errors.name = "Name is required";
      isValid = false;
    } else if (gelyanInfo.name.length > 255) {
      errors.name = "Name is too long (max 255 characters)";
      isValid = false;
    }

    if (!gelyanInfo.surname) {
      errors.surname = "Surname is required";
      isValid = false;
    } else if (gelyanInfo.surname.length > 255) {
      errors.surname = "Surname is too long (max 255 characters)";
      isValid = false;
    }
    if (gelyanInfo.patronymic_name && gelyanInfo.patronymic_name.length > 255) {
      errors.patronymic_name =
        "Patronymic name is too long (max 255 characters)";
      isValid = false;
    }

    if (!gelyanInfo.gender) {
      errors.gender = "Gender is required";
      isValid = false;
    }

    if (!gelyanInfo.birth_date) {
      errors.birth_date = "Birth date is required";
      isValid = false;
    }

    if (!gelyanInfo.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (
      gelyanInfo.email.length > 255 ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(gelyanInfo.email)
    ) {
      errors.email = "Invalid email format or too long (max 255 characters)";
      isValid = false;
    }

    if (!gelyanInfo.phone) {
      errors.phone = "Phone number is required";
      isValid = false;
    } else if (gelyanInfo.phone.length > 20) {
      errors.phone = "Phone number is too long (max 20 characters)";
      isValid = false;
    }

    if (!gelyanInfo.nationality) {
      errors.nationality = "Nationality is required";
      isValid = false;
    } else if (gelyanInfo.nationality.length > 100) {
      errors.nationality = "Nationality is too long (max 100 characters)";
      isValid = false;
    }

    if (!gelyanInfo.incoming_country) {
      errors.incoming_country = "Incoming country is required";
      isValid = false;
    } else if (gelyanInfo.incoming_country.length > 100) {
      errors.incoming_country =
        "Incoming country is too long (max 100 characters)";
      isValid = false;
    }

    if (!gelyanInfo.travel_date) {
      errors.travel_date = "Travel date is required";
      isValid = false;
    }

    if (passport.length === 0) {
      errors.passport = "Passport file is required";
      isValid = false;
    } else if (passport[0] && passport[0].name.length > 2048) {
      errors.passport = "Passport filename is too long (max 2048 characters)";
      isValid = false;
    }

    if (photo.length === 0) {
      errors.photo = "Photo file is required";
      isValid = false;
    } else if (photo[0] && photo[0].name.length > 2048) {
      errors.photo = "Photo filename is too long (max 2048 characters)";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const postMessageIncoming = async () => {
    if (!validateForm()) {
      return;
    }

    const formData = new FormData();

    // 2. Append other form data
    for (const key in gelyanInfo) {
      if (key === "birth_date" || key === "travel_date") {
        const formattedDate = moment(gelyanInfo[key]).format("DD.MM.YYYY"); // Format dates
        formData.append(key, formattedDate);
      } else {
        formData.append(key, gelyanInfo[key]);
      }
    }

    // 3. Append the *resized* images
    passport.forEach((file) => formData.append("passport", file));
    photo.forEach((file) => formData.append("photo", file));

    try {
      const res = await axiosInstance.post("/visas/incoming", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);
      message.success("Incoming visa created successfully!");
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
      setPassport([]);
      setPhoto([]);
      setFormErrors({});
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        if (error.response.status === 422) {
          message.error(error.response.data.message);
        } else if (error.response.status === 413) {
          message.error(error.response.data.message);
        } else {
          message.error("Error sending message. Please try again.");
        }
      } else {
        message.error("An error occurred. Please try again.");
      }
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
  const handleGelyanTravel = (value) => {
    setGelyanInfo({ ...gelyanInfo, travel_date: value });
    console.log(value);
  };

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
              format="DD.MM.YYYY"
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
                  format="DD.MM.YYYY"
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
                <DropFileInput files={photo} onFileChange={onFileChangePhoto} />
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
                className="bg-[#FCFCFC] min-h-[129px] w-full text-[16px] font-[poppins-regular] sm:px-4 md:px-7 py-3 outline-none rounded-[9px] border border-[#D9D9D9] "
              ></textarea>
            </div>

            <div className="sm:w-full md:w-[65%]">
              <div
                onClick={postMessageIncoming}
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
                {dil === "tk"
                  ? "Wizany onlaýn usulda çalt we aňsat almak üçin Emin Hyzmat syýahat agentligi bilen işlemegiňizi maslahat berýäris! Arzaňyzy kynçylyksyz doldurmaga kömek edýäris."
                  : dil === "ru"
                  ? "Оформите визу онлайн быстро и удобно с туристическим агентством Emin Hyzmat! Мы поможем вам заполнить заявку без лишних сложностей."
                  : dil === "tr"
                  ? "Vizenizi hızlı ve kolay bir şekilde online olarak Emin Hyzmat seyahat acentesi ile alın! Başvurunuzu sorunsuz tamamlamanıza yardımcı oluyoruz."
                  : "Apply for your visa online quickly and easily with Emin Hyzmat Travel Agency! We assist you in completing your application hassle-free."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Gelyan;
