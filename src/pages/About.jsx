import React from "react";
import Header from "../components/Header";
import surat from "../images/AboutImg.png";
import diagramma from "../images/Diagramma.png";

const About = () => {
  return (
    <div className="w-[75%] mx-auto mb-[100px]">
      <Header header={"About"} visible={false} />

      <div className="w-[90%] mb-[65px]">
        <h1 className="text-white font-[outfit-semibold] text-[35px] mb-5">
          About us
        </h1>
        <p className="text-white font-[outfit-light] text-[15px] mb-8">
          Since 2023, beginning our journey under a different name, today our
          company proudly presents itself in the market as "Ragbatdag" - a name
          inspired by the turkmen word for "strength mountin". This choice is no
          coincidence, as it accurately reflects our mission and values. At
          Ragbatdag, we strive not only to strengthen our market position but
          also to build strong, trusting relationships with our clients and
          partners.
        </p>
      </div>

      <div className="w-full flex items-center justify-center mt-[70px] mb-[65px]">
        <img src={surat} alt="surat" className="w-[80%]" />
      </div>

      <div className="w-[90%]">
        <h1 className="text-white font-[outfit-semibold] text-[35px] mb-5">
          Our Mission
        </h1>
        <p className="text-white font-[outfit-light] text-[15px] mb-8">
          At Ragbatdag, our mission is to support and develop the domestic
          market through the import of high-quality chemical products for
          various manufacturing sectors. Our goal is to make the production
          process not only more efficient and economically viable but also safer
          and more environmentally friendly. We offer a wide range of chemicals
          for the production of household chemicals, food industry products, oil
          and gas industry needs, textile industry, medicine drug production
          sector, agricultural and agricultural animal sectors and many other
          sectors.
        </p>
      </div>
      <div className="w-full flex items-center justify-center mt-[70px] mb-[70px]">
        <img src={diagramma} alt="surat" className="w-[70%]" />
      </div>

      <div className="w-[90%]">
        <h1 className="text-white font-[outfit-semibold] text-[35px] mb-5">
          Our Approach
        </h1>
        <p className="text-white font-[outfit-light] text-[15px] mb-8">
          At Ragbatdag, we pay special attention to the quality of our products
          and services. Our experts carefully select chemicals, focusing not
          only on their effectiveness but also on their environmental safety. We
          are committed to continuous development and innovation, which allows
          us to not only meet current market requirements but also anticipate
          future trends.
        </p>
      </div>

      <div className="w-[90%]">
        <h1 className="text-white font-[outfit-semibold] text-[35px] mb-5">
          International Cooperation
        </h1>
        <p className="text-white font-[outfit-light] text-[15px] mb-8">
          The foundation of our strategy is international cooperation. Ragbatdag
          actively works with suppliers from different corners of the world,
          including Europe, China, Russia, India, Iran, Kazakhstan, Uzbekistan
          and other countries. This allows us not only to ensure the stability
          and diversity of our products but also to tailor our assortment to the
          specific needs of our clients.
        </p>
      </div>

      <div className="w-[90%]">
        <h1 className="text-white font-[outfit-semibold] text-[35px] mb-5">
          Conclusion
        </h1>
        <p className="text-white font-[outfit-light] text-[15px] mb-8">
          Ragbatdag is more than just a supplier of chemical products. We are
          your reliable partner in the pursuit of innovation, efficiency, and
          sustainable development. The strength of our name is reflected in
          every aspect of our work, from product selection to our commitment to
          building long-term and mutually beneficial relationships with each of
          our clients. At Ragbatdag, we believe in the power of collaboration
          and innovation as the key to a successful future for our clients and
          the industry as a whole.
        </p>
      </div>
    </div>
  );
};

export default About;
