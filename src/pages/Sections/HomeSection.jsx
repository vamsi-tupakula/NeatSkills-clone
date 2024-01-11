import React from "react";
import SkillDevelopmentImg from "../../assets/skilldevelopment.webp";
import Arrow from "../../assets/arrow.svg";
import { NavLink } from "react-router-dom";

function HomeSection() {
  return (
    <>
      <section className="w-full min-h-[100vh] h-auto bg-[#0D0E14] flex items-center justify-center px-10">
        <div className="grid items-center justify-center xl:grid-cols-2 w-full xl:max-w-[1280px] gap-[20px] relative">
          <img
            className="arrow sm:w-20 md:w-24 lg:w-32 absolute top-[-5%] left-[20%] xl:left-[40%]"
            src={Arrow}
            alt="arrow"
          />
          <div className="text flex flex-wrap justify-center items-center xl:items-start flex-col gap-4">
            <h1 className="text-4xl xl:text-7xl font-bold font-sans text-center xl:text-start">
              Lets Learn <br className="hidden xl:inline" />{" "}
              <span className="xl:inline-block xl:py-10"> beyond the </span>
              <br /> limits
            </h1>
            <p className="xl:text-2xl font-sans">
              Educational Programs that will help you start , grow and upskill.
              Book a demo class today !!
            </p>
            <div className="btn-group flex gap-10 my-3">
              <NavLink to="/beta/login">
                <button
                  type="button"
                  className=" hover:bg-pink-600 border-[3px] border-[#ffffff] px-6 text-nowrap py-3 text-sm xl:text-lg hover:scale-[1.05] transition-transform duration-300"
                >
                  Start Learning
                </button>
              </NavLink>
              <NavLink to="/beta/login">
                <button
                  type="button"
                  className=" bg-pink-600 border-[3px] border-[#ffffff] px-6 text-nowrap py-3 text-sm xl:text-lg hover:scale-[1.05] transition-transform duration-300"
                >
                  Watch Demo Session
                </button>
              </NavLink>
            </div>
          </div>
          <div className="images flex items-center justify-center">
            <img
              alt="img"
              loading="lazy"
              width="700"
              height="1000"
              decoding="async"
              data-nimg="1"
              className="w-[430px] lg:mr-[6%]"
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
