import React from "react";
import NeatSkillsLogo from "../assets/neatskillslogosample.svg";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed w-[100vw] flex justify-center z-10">
      <div className="flex align-middle justify-between w-[100vw] max-w-[1570px] text-white px-4 md:px-8 lg:px-16 py-4 h-[49px] md:h-[105px]">
        <div>
          <a className="" href="/">
            <img
              alt="logo"
              loading="lazy"
              width={100}
              height={100}
              decoding="async"
              data-nimg={1}
              className="w-[112px] h-[43px] md:w-[186px] md:h-[71px]"
              style={{ color: "transparent" }}
              src={NeatSkillsLogo}
            />
          </a>
        </div>
        <ul className="flex items-center justify-between w-full max-w-[407px] mx-10 lg:mx-12">
          <a href="/beta/courseoverview">
            <li className="text-md uppercase hover:border-b  ">Courses</li>
          </a>
          <a href="/alpha/aboutus">
            <li className="text-md uppercase hover:border-b  ">About Us</li>
          </a>
          <a href="/alpha/contactus">
            <li className="text-md uppercase hover:border-b  ">Contact</li>
          </a>
        </ul>
        <div className="flex items-center gap-[2rem]">
          <NavLink to="/beta/signup">
            <button
              type="button"
              className="bg-pink-600 uppercase border border-[#ffffff] rounded-lg w-[77px] h-7 md:text-sm md:w-24 md:h-11 lg:text-xl lg:w-32 lg:h-14 hover:scale-[1.15] transition-transform duration-300"
            >
              Sign up
            </button>
          </NavLink>
          <NavLink to="/beta/login">
            <button
              type="button"
              className="uppercase border border-[#ffffff] rounded-lg w-[77px] h-7 md:text-sm md:w-24 md:h-11 lg:text-xl lg:w-32 lg:h-14 hover:scale-[1.15] transition-transform duration-300"
            >
              LOGIN
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
