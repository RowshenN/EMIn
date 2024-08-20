import React from "react";

const ContactMain = () => {
  return (
    <div className="w-full md:max-w-[80%] mx-auto flex items-center justify-center flex-col mb-[125px]">
      <div className="w-full lg:w-[45%] mb-12">
        <h1 className="text-white font-[outfit-semibold] text-[35px] mb-4 text-center ">
          Contact Us How Can We Help You ?
        </h1>

        <p className="text-white font-[outfit-light] text-[15px] text-center ">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </div>

      <form className="w-full lg:w-[80%]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full mb-5">
          <div className="flex flex-col items-baseline justify-start gap-3 w-full">
            <label
              htmlFor="name"
              className="font-[outfit-medium] text-[14px] text-white "
            >
              Your Name *
            </label>
            <input
              id="name"
              type="text"
              className="w-full text-[#00391A] font-[outfit-regular] text-[16px] h-[60px] outline-none px-3 border border-[#CDD5DF] bg-[#ECFFF5] rounded-xl"
            />
          </div>

          <div className="flex flex-col items-baseline justify-start gap-3 w-full">
            <label
              htmlFor="email"
              className="font-[outfit-medium] text-[14px] text-white "
            >
              Your Email *
            </label>
            <input
              className="w-full text-[#00391A] font-[outfit-regular] text-[16px] h-[60px] outline-none px-3 border border-[#CDD5DF] bg-[#ECFFF5] rounded-xl"
              type="email"
              id="email"
            />
          </div>
        </div>

        <div className="mb-[50px]">
          <div className="flex flex-col items-baseline justify-start gap-3 mb-3 w-full">
            <label
              className="font-[outfit-medium] text-[14px] text-white "
              htmlFor="message"
            >
              Message *
            </label>
            <textarea
              className="w-full min-h-[150px] text-[#00391A] font-[outfit-regular] text-[16px] h-[60px] outline-none px-3 border border-[#CDD5DF] bg-[#ECFFF5] rounded-xl"
              id="message"
            ></textarea>
          </div>

          <div className="w-full flex items-center justify-start gap-3">
            <input type="checkbox" className="rounded-2xl outline-none" />
            <p className="text-white">
              I agree that my submitted data is being collected and stored.
            </p>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <button className="bg-white w-[425px] py-4 rounded-xl text-[#00391A] font-[outfit-regular] text-[16px] ">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMain;
