import React from "react";
import PlaceHolderImg from "../../assets/placeholderimg.webp";

function MentorSection() {
  return (
    <section className="w-full min-h-[100vh] bg-[#0D0E14] grid justify-center items-center font-sans">
      <div className="w-[100%] max-w-[1440px] h-[750px] bg-[#1E1E1E] translate-x-3 rounded-xl grid grid-rows-4 pb-[3.5rem]">
        <div className="text text-center grid grid-cols-4 justify-center items-end w-[50%] mx-auto gap-10">
          <h1 className="font-bold text-3xl">
            Meet Our <br /> Mentors
          </h1>
          <p className="text-start col-span-3 text-lg">
            Neat Skills offers the world's best classes from the world's best
            practitioners. It's like having a mentor at your fingertips - no
            matter where you are
          </p>
        </div>
        <div className="row-span-3 grid grid-cols-8 gap-[5%] px-10 items-center">
          <div className="text-8xl text-blue-500">&lt;</div>
          <div className="border-[3px] h-[80%] col-span-2 rounded-lg border-white flex flex-col justify-center gap-10">
            <img
              src={PlaceHolderImg}
              alt=""
              className="w-[90%] mx-auto rounded-md"
            />
            <div className="details w-[90%] gradientWhiteToBlack py-6 text-center mx-auto border-2 rounded">
              <h1 className="font-bold text-lg xl:text-xl">Ravi Raj</h1>
              <p>An Unknown Person</p>
            </div>
          </div>
          <div className="border-[3px] h-[80%] col-span-2 rounded-lg border-white flex flex-col justify-center gap-10">
            <img
              src={PlaceHolderImg}
              alt=""
              className="w-[90%] mx-auto rounded-md"
            />
            <div className="details w-[90%] gradientWhiteToBlack py-6 text-center mx-auto border-2 rounded">
              <h1 className="font-bold text-lg xl:text-xl">Ravi Raj</h1>
              <p>An Unknown Person</p>
            </div>
          </div>
          <div className="border-[3px] h-[80%] col-span-2 rounded-lg border-white flex flex-col justify-center gap-10">
            <img
              src={PlaceHolderImg}
              alt=""
              className="w-[90%] mx-auto rounded-md"
            />
            <div className="details w-[90%] gradientWhiteToBlack py-6 text-center mx-auto border-2 rounded">
              <h1 className="font-bold text-lg xl:text-xl">Ravi Raj</h1>
              <p>An Unknown Person</p>
            </div>
          </div>
          <div className="text-8xl text-blue-500">&gt;</div>
        </div>
      </div>
    </section>
  );
}

export default MentorSection;
