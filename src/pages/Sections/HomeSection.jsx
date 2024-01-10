import React from "react";
import SkillDevelopmentImg from "../../assets/skilldevelopment.webp";
import Arrow from "../../assets/arrow.svg";

function HomeSection() {
  return (
    <>
      <section className="w-full min-h-[1000px] h-[100vh] bg-[#0D0E14] flex items-center justify-center px-10">
        <div className="grid grid-cols-2 w-full max-w-[1280px] gap-[20px] relative">
          <img
            className="arrow sm:w-20 md:w-24 lg:w-32 absolute top-[-5%] left-[40%]"
            src={Arrow}
            alt="arrow"
          />
          <div className="text flex flex-wrap justify-center flex-col gap-4">
            <h1 className="text-4xl xl:text-7xl font-bold font-sans">
              Lets Learn <br />{" "}
              <span className="inline-block py-10"> beyond the </span>
              <br /> limits
            </h1>
            <p className="text-2xl font-sans">
              Educational Programs that will help you start , grow and upskill.
              Book a demo class today !!
            </p>
            <div className="btn-group flex gap-10 my-3">
              <a href="/beta/login">
                <button
                  type="button"
                  className=" hover:bg-pink-600 border-[3px] border-[#ffffff] w-[77px] h-7 md:text-sm md:w-48 md:h-11 lg:text-xl lg:w-auto px-5 py-5 lg:h-auto hover:scale-[1.05] transition-transform duration-300"
                >
                  Start Learning
                </button>
              </a>
              <a href="/beta/login">
                <button
                  type="button"
                  className=" bg-pink-600 border-[3px] border-[#ffffff] w-[77px] h-7 md:text-sm md:w-48 md:h-11 lg:text-xl lg:w-auto px-5 py-5 lg:h-auto hover:scale-[1.05] transition-transform duration-300"
                >
                  Watch Demo Session
                </button>
              </a>
            </div>
          </div>
          <div className="images">
            <img
              alt="img"
              loading="lazy"
              width="700"
              height="1000"
              decoding="async"
              data-nimg="1"
              className="lg:mr-[6%]"
              style={{ color: "transparent" }}
              src={SkillDevelopmentImg}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeSection;
