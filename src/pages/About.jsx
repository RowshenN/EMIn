import React, { useContext } from "react";

import Navigation from "../components/navbars/Navigation";

import surat from "../images/aboutmain.png";
import line from "../images/line.svg";
import big from "../images/aboutbigsvg.svg";
import AreYouReady from "../components/AreYouReady";
import { SebedimContext } from "../context/Context";

const About = () => {
  const { dil } = useContext(SebedimContext);
  return (
    <>
      <Navigation />
      <div className="md:w-full sm:w-[94%] mx-auto">
        <div className="w-full relative mt-10">
          <div className="sm:w-full md:w-[90%] mx-auto sm:mb-[100px] md:mb-[185px]">
            <div className="w-full flex items-center justify-center relative sm:mb-10 md:mb-[64px] ">
              <img
                src={surat}
                alt="surat"
                className="rounded-[23px] sm:h-[123px] md:h-full w-full object-cover"
              />
              <p className="absolute text-white md:text-[35px] sm:text-[26px] lg:text-[50px] font-[poppins-semibold] ">
                {dil === "tk"
                  ? "Biz barada"
                  : dil === "ru"
                  ? "О нас"
                  : dil === "tr"
                  ? "Hakkımızda"
                  : "About us"}
              </p>
            </div>

            <div className="w-full">
              <div className="w-full flex items-center justify-center flex-col sm:mb-[40px] md:mb-[65px] ">
                <p className="sm:text-[24px] xs:text-[35px] md:text-[46px] font-[poppins-semibold] ">
                  Emin Hyzmat
                </p>
                <img
                  className="sm:mt-[-5px] md:mt-[-10px] object-contain sm:w-[50%] md:w-fit"
                  src={line}
                  alt="line"
                />
              </div>

              <p className="text-[#878787] sm:text-[12px] md:text-[16px] font-[poppins-medium] mb-5 w-[97%] ">
                {dil === "tk"
                  ? "Emin Hyzmat Travel Agency – Ynandyk Syýahat Hyzmatdaşyňyz Emin Hyzmat Travel Agency – syýahatyň diňe bir ýerden başga bir ýere gitmek däldigine ynanýarys. Syýahat – täze medeniýetleri açmak, ýatdan çykmajak pursatlary başdan geçirmek we ýatlamalary döretmekdir."
                  : dil === "ru"
                  ? "Emin Hyzmat Travel Agency – Ваш надежный туристический партнер В Emin Hyzmat Travel Agency мы верим, что путешествие – это не просто перемещение из одного места в другое. Это возможность создать незабываемые впечатления, открыть новые культуры и обрести бесценные воспоминания."
                  : dil === "tr"
                  ? "Emin Hyzmat Travel Agency – Güvenilir Seyahat Ortağınız Emin Hyzmat Travel Agency olarak, seyahatin sadece bir yerden başka bir yere gitmekten ibaret olmadığını biliyoruz. Seyahat, unutulmaz anılar biriktirmek, farklı kültürleri keşfetmek ve dünyayı daha yakından tanımaktır."
                  : "Emin Hyzmat Travel Agency – Your Trusted Travel Partner At Emin Hyzmat Travel Agency, we believe that travel is more than just moving from one place to another—it’s about creating unforgettable experiences, discovering new cultures, and making lifelong memories."}
              </p>
              <p className="text-[#878787] sm:text-[12px] md:text-[16px] font-[poppins-medium] mb-5 w-[97%] ">
                {dil === "tk"
                  ? "Uzak ýyllaryň tejribesi bilen biz şahsy we toparlaýyn syýahatlary gurnamakda ýöriteleşýäris. Iş sapary, maşgala dynç alşy ýa-da medeni gezelenç meýilleşdirýän bolsaňyz, hünärmen toparymyz size rahat we kynçylyksyz syýahat tejribesini hödürlär."
                  : dil === "ru"
                  ? "Имея многолетний опыт в туристической сфере, мы предлагаем индивидуальные и групповые туры, учитывая все ваши пожелания. Будь то деловая поездка, семейный отдых или культурное путешествие, наша команда обеспечит вам комфорт и надежность на каждом этапе."
                  : dil === "tr"
                  ? "Yılların verdiği deneyimle, bireysel ve grup seyahatlerinde en iyi hizmeti sunuyoruz. İş gezisi, aile tatili veya kültürel bir keşif planlıyorsanız, uzman ekibimiz her aşamada sorunsuz bir yolculuk geçirmenizi sağlar."
                  : "With years of expertise in the travel industry, we specialize in providing seamless, customized travel solutions for both individuals and groups. Whether you're planning a business trip, a family vacation, or a cultural exploration, our dedicated team ensures a smooth and hassle-free journey from start to finish."}
              </p>
              <p className="text-[#878787] sm:text-[12px] md:text-[16px] font-[poppins-medium] mb-5 w-[97%] ">
                {dil === "tk"
                  ? "Näme üçin Emin Hyzmat? Şahsylaşdyrylan Hyzmat – Syýahat meýilnamalaryňyzy islegleriňize görä düzýäris. Hünärmen Maslahatlar – Syýahat boýunça tejribeli maslahatçylarymyz size iň gowy maslahatlary berer. Doly Syýahat Gurnama – Wiza, myhmanhana bron etmek, transport we başga hyzmatlar. Bäsdeş Bahalar – Hil taýdan ýokary hyzmaty amatly nyrhlarda hödürleýäris. 24/7 Goldaw – Dünýäniň islendik ýerinde biz size kömek etmäge taýýar."
                  : dil === "ru"
                  ? "Почему выбирают Emin Hyzmat? Индивидуальный подход – Мы подбираем маршруты с учетом ваших предпочтений. Профессиональные консультации – Наши эксперты дадут лучшие рекомендации. Полный спектр услуг – Визовая поддержка, бронирование отелей, транспорт и другое. Доступные цены – Качественные путешествия по разумным тарифам. Круглосуточная поддержка – Мы всегда рядом, где бы вы ни находились."
                  : dil === "tr"
                  ? "Neden Emin Hyzmat? Kişiye Özel Hizmet – Tercihlerinize göre seyahat planları oluşturuyoruz. Uzman Rehberlik – Profesyonel seyahat danışmanlarımız en iyi önerileri sunar. Eksiksiz Seyahat Planlaması – Vize, otel rezervasyonu ve ulaşım hizmetleri. Uygun Fiyatlar – Kaliteli hizmeti en iyi fiyatlarla sunuyoruz. 7/24 Destek – Nerede olursanız olun, her zaman yanınızdayız."
                  : "Why Choose Emin Hyzmat? Personalized Service – We tailor every trip to your unique preferences and needs.Expert Guidance – Our experienced travel consultants provide insightful recommendations.Seamless Planning – From visa support to accommodation and transport, we handle it all. Competitive Pricing – Quality travel experiences at the best possible rates. 24/7 Support – We are always here to assist you, wherever you are."}
              </p>
              <p className="text-[#878787] sm:text-[12px] md:text-[16px] font-[poppins-medium] mb-5 w-[97%] ">
                {dil === "tk"
                  ? "Hyzmatlarymyz Uçar Petekleri – Ýurduň we dünýäniň islendik ýerine amatly petek bron etmek. Myhmanhana Bron Edilmegi – Dünýäniň islendik nokadynda rahat we amatly myhmanhanalar. Wiza & Resminamalar – Wiza resminamalarynyň taýýarlanylmagy we goldawy. Transport & Transferler – Howa menzilinden transfer we ulag hyzmatlary. Şahsy Syýahat Paketleri – Täze ýerleri açmak üçin ýörite düzülen syýahat meýilnamalary. Iş Saparlary – Işewürler üçin ýönekeý we amatly syýahat hyzmatlary."
                  : dil === "ru"
                  ? "Наши услуги Авиабилеты – Быстрое и удобное бронирование перелетов по всему миру. Бронирование отелей – Комфортное размещение в проверенных отелях. Визовая поддержка – Помощь в оформлении виз и документов. Транспорт и трансферы – Надежный транспорт и трансферы. Индивидуальные туры – Уникальные маршруты для вашего отдыха. Бизнес-туризм – Организация поездок для деловых людей."
                  : dil === "tr"
                  ? "Hizmetlerimiz Uçak Bileti Rezervasyonu – Yurtiçi ve yurtdışı uçuşlar için kolay rezervasyon. Otel Rezervasyonları – Dünyanın dört bir yanında konforlu konaklama seçenekleri. Vize & Seyahat Belgeleri – Vize başvurularınızda profesyonel destek. Ulaşım & Transfer Hizmetleri – Havalimanı transferleri ve araç kiralama. Özel Tur Paketleri – En iyi destinasyonlara özel tur programları. Kurumsal Seyahat Hizmetleri – İş seyahatlerinizi kolaylaştırıyoruz."
                  : "Our Services Flight Ticket Booking – Hassle-free booking for domestic and international flights. Hotel Reservations – Comfortable stays at top-rated hotels worldwide. Visa & Travel Documentation – Assistance with visa applications and travel permits. Transport & Transfers – Reliable transportation solutions, including airport transfers. Custom Tour Packages – Explore breathtaking destinations with expertly crafted itineraries. Business & Corporate Travel – Streamlined travel solutions for professionals."}
              </p>
            </div>
          </div>

          <img
            src={big}
            alt="big"
            className="top-0 object-contain w-[85%] -z-10 left-0 right-0 absolute"
          />

          <AreYouReady />
        </div>
      </div>
    </>
  );
};

export default About;
