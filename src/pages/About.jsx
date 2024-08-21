import React, { useContext } from "react";
import Header from "../components/Header";
import surat from "../images/AboutImg.png";
import diagramma from "../images/Diagramma.png";
import { SebedimContext } from "../context/Context";

const About = () => {
  const { dil } = useContext(SebedimContext);
  return (
    <div className="w-[95%] mx-auto mb-[100px]">
      <Header header={dil === "en" ? "About" : "Biz barada"} visible={false} />

      <div className="w-[90%] mb-[65px]">
        <h1 className="text-white font-[outfit-semibold] text-[35px] mb-5">
          {dil === "en" ? "About us" : "Biz barada"}
        </h1>
        <p className="text-white font-[outfit-light] text-[15px] mb-8">
          {dil === "en"
            ? "Since 2023, beginning our journey under a different name, today our company proudly presents itself in the market as Ragbatdag - a name inspired by the turkmen word for strength mountin. This choice is no coincidence, as it accurately reflects our mission and values. At Ragbatdag, we strive not only to strengthen our market position but also to build strong, trusting relationships with our clients and partners."
            : "2023-nji ýyldan başlap, başga bir at bilen syýahatymyza başlap, şu günki günümiz kompaniýa özüni Ragbatdag - at hökmünde buýsanç bilen görkezýär türkmenleriň güýç dagy sözünden ylham aldy. Bu saýlaw ýok tötänlik, sebäbi ol biziň wezipämizi we gymmatlyklarymyzy takyk görkezýär. At Ragbatdag, biz diňe bir bazar bazarymyzy berkitmäge däl-de, eýsem müşderilerimiz bilen berk, ynamdar gatnaşyklar gurmak we hyzmatdaşlar."}
        </p>
      </div>

      <div className="w-full flex items-center justify-center mt-[70px] mb-[65px]">
        <img src={surat} alt="surat" className="w-[80%]" />
      </div>

      <div className="w-[90%]">
        <h1 className="text-white font-[outfit-semibold] text-[35px] mb-5">
          {dil === "en" ? "Our Mission" : "Biziň wezipämiz"}
        </h1>
        <p className="text-white font-[outfit-light] text-[15px] mb-8">
          {dil === "en"
            ? "At Ragbatdag, our mission is to support and develop the domestic market through the import of high-quality chemical products for various manufacturing sectors. Our goal is to make the production process not only more efficient and economically viable but also safer and more environmentally friendly. We offer a wide range of chemicals for the production of household chemicals, food industry products, oil and gas industry needs, textile industry, medicine drug production sector, agricultural and agricultural animal sectors and many other sectors."
            : "Ragbatdagda biziň wezipämiz içerki goldawy ösdürmek we ösdürmek üçin ýokary hilli himiki önümleri import etmek arkaly bazar dürli önümçilik pudaklary. Biziň maksadymyz önüm öndürmek amal diňe bir has netijeli we ykdysady taýdan durmuşa ukyply bolman, eýsem has ygtybarlydyr we ekologiýa taýdan has arassa. Himiki serişdeleriň giň toplumyny hödürleýäris öý himiki önümleri, azyk senagaty önümleri, nebit öndürmek üçin we gaz pudagy, dokma senagaty, derman dermanlary öndürmek pudagy, oba hojalygy we oba hojalygy haýwanlary we başgalar pudaklary."}
        </p>
      </div>
      <div className="w-full flex items-center justify-center mt-[70px] mb-[70px]">
        <img src={diagramma} alt="surat" className="w-[70%]" />
      </div>

      <div className="w-[90%]">
        <h1 className="text-white font-[outfit-semibold] text-[35px] mb-5">
          {dil === "en" ? "Our Approach" : "Biziň çemeleşmämiz"}
        </h1>
        <p className="text-white font-[outfit-light] text-[15px] mb-8">
          {dil === "en"
            ? "At Ragbatdag, we pay special attention to the quality of our products and services. Our experts carefully select chemicals, focusing not only on their effectiveness but also on their environmental safety. We are committed to continuous development and innovation, which allows us to not only meet current market requirements but also anticipate future trends."
            : "Ragbatdag-da önümlerimiziň hiline aýratyn üns berýäris we hyzmatlar. Hünärmenlerimiz üns bermeýän himiki serişdeleri üns bilen saýlaýarlar diňe netijeliligine däl-de, daşky gurşaw howpsuzlygyna-da täsir edýär. Biz mümkinçilik berýän üznüksiz ösüşe we täzelige ygrarlydyrlar diňe bir häzirki bazar talaplaryny kanagatlandyrman, eýsem garaşmalydyrys geljekki ugurlar."}
        </p>
      </div>

      <div className="w-[90%]">
        <h1 className="text-white font-[outfit-semibold] text-[35px] mb-5">
          {dil === "en" ? "International Cooperation" : "Halkara hyzmatdaşlygy"}
        </h1>
        <p className="text-white font-[outfit-light] text-[15px] mb-8">
          {dil === "en"
            ? "The foundation of our strategy is international cooperation. Ragbatdag actively works with suppliers from different corners of the world,including Europe, China, Russia, India, Iran, Kazakhstan, Uzbekistan and other countries. This allows us not only to ensure the stability and diversity of our products but also to tailor our assortment to the specific needs of our clients."
            : "Strategiýamyzyň esasy halkara hyzmatdaşlygydyr. Ragbatdag dünýäniň dürli künjeklerinden üpjün edijiler bilen işjeň işleýär, şol sanda Europeewropa, Hytaý, Russiýa, Hindistan, Eýran, Gazagystan, Özbegistan we beýleki ýurtlar. Bu bize diňe bir durnuklylygy üpjün etmäge mümkinçilik bermeýär we önümlerimiziň dürlüligi, şeýle hem assortimentimizi düzmek müşderilerimiziň aýratyn zerurlyklary."}
        </p>
      </div>

      <div className="w-[90%]">
        <h1 className="text-white font-[outfit-semibold] text-[35px] mb-5">
          {dil === "en" ? "Conclusion" : "Netije"}
        </h1>
        <p className="text-white font-[outfit-light] text-[15px] mb-8">
          {dil === "en"
            ? "Ragbatdag is more than just a supplier of chemical products. We are your reliable partner in the pursuit of innovation, efficiency, and sustainable development. The strength of our name is reflected in every aspect of our work, from product selection to our commitment to building long-term and mutually beneficial relationships with each of our clients. At Ragbatdag, we believe in the power of collaboration and innovation as the key to a successful future for our clients and the industry as a whole."
            : "Ragbatdag diňe bir himiki önümler bilen üpjün ediji däl. Biz “Ragbatdag”, “himiki”, “” Biz innow ker, Гilikил, без зири зиралы. Adymyzasy Гүз Гованяни Тапди Газизи Гадан, Порнограмари Аг Газ Гадры “Ragbatdagda” зан зюне ышандыру, без “kimizimiz”, “Г” innowasiýa, netijelilik we durnukly ösüş ugrundaky ygtybarly hyzmatdaşyňyz. Adymyzyň berkligi, önüm saýlamakdan başlap, her bir müşderimiz bilen uzak möhletli we özara peýdaly gatnaşyklary gurmak borjumyz ýaly işimiziň ähli ugurlarynda öz beýanyny tapýar. Ragbatdag-da, müşderilerimiz we umuman pudak üçin üstünlikli geljegiň açary hökmünde hyzmatdaşlygyň we innowasiýalaryň güýjüne ynanýarys."}
        </p>
      </div>
    </div>
  );
};

export default About;
