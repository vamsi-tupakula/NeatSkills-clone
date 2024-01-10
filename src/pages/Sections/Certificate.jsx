import React from "react";
import CertificateImg from "../../assets/Certificate.svg";
import ArrowDown from "../../assets/arrow2.webp";

function Certificate() {
  return (
    <section className="w-full min-h-[1000px] h-[100vh] bg-[#15161B] grid justify-center items-center font-sans relative">
      <div className="w-[1440px] grid grid-cols-2 p-5">
        <div className="left flex flex-col gap-5">
          <h1 className="font-bold text-4xl">
            Stand out with a skill <br />
            <span className="text-pink-600">certificate</span>
          </h1>
          <p className="text-2xl">
            Earn globally recognized certification and improve your knowledge.
          </p>
          <div className="flex relative hover:scale-[1.05] transition-transform duration-150">
            <img src={ArrowDown} alt="" />
            <button className="uppercase border border-[#ffffff] px-5 py-8 absolute translate-x-[35%] translate-y-[50%]">
              Explore Courses
            </button>
          </div>
        </div>
        <div className="right">
          <img src={CertificateImg} alt="certificate" className="w-[100%]" />
        </div>
      </div>
    </section>
  );
}

export default Certificate;
