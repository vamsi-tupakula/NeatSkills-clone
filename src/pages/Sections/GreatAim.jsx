import React from "react";
import IdeasImg from "../../assets/ideas.svg";
import RightArrow from "../../assets/rightarrow.webp";

function GreatAim() {
  return (
    <section className="w-full min-h-[1000px] h-[100vh] bg-[#0D0E14] grid justify-center items-center font-sans">
      <div className="w-[1260px] h-[500px] bg-pink-600 translate-x-3 rounded-xl grid grid-cols-2 py-[2rem] px-[3rem] justify-center">
        <div className="flex flex-col justify-center gap-5">
          <h1 className="font-semibold text-4xl">
            The great aim of education is not knowledge, but action.
          </h1>
          <div>
            <button className="uppercase border border-[#ffffff] bg-black py-5 px-12 flex items-center gap-3 hover:scale-[1.05] duration-150">
              Sign Up <img src={RightArrow} alt="" className="inline-block" />
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={IdeasImg} alt="ideas" />
        </div>
      </div>
    </section>
  );
}

export default GreatAim;
