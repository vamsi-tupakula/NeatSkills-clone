import React from "react";
import NeatSkillsLogo from "../assets/neatskillslogosample.svg";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed w-[100vw] flex justify-center z-10 ">
      <div className="flex align-middle justify-between w-[100vw] max-w-[1570px] text-white px-4 md:px-8 lg:px-16 py-4">
        <div>
          <a className="" href="/">
            <img
              alt="logo"
              loading="lazy"
              width={100}
              height={100}
              decoding="async"
              data-nimg={1}
              className="w-[186px] h-[71px]"
              style={{ color: "transparent" }}
              src={NeatSkillsLogo}
            />
          </a>
        </div>
        <ul className="flex items-center justify-between max-w-[407px] mx-5 flex-col lg:flex-row lg:mx-12 gap-2 lg:gap-6 py-5 lg:py-0 px-3">
          <a href="/beta/courseoverview">
            <li className="text-md uppercase hover:border-b lg:mx-2">
              Courses
            </li>
          </a>
          <a href="/alpha/aboutus">
            <li className="text-md uppercase hover:border-b lg:mx-2">
              About Us
            </li>
          </a>
          <a href="/alpha/contactus">
            <li className="text-md uppercase hover:border-b lg:mx-2">
              Contact
            </li>
          </a>
        </ul>
        <div className="flex items-center gap-[10px] lg:gap-[2rem] flex-col lg:flex-row">
          <NavLink to="/beta/signup">
            <button
              type="button"
              className="bg-pink-600 uppercase border border-[#ffffff] rounded-lg px-6 text-nowrap py-3  hover:scale-[1.15] transition-transform duration-300"
            >
              Sign up
            </button>
          </NavLink>
          <NavLink to="/beta/login">
            <button
              type="button"
              className="uppercase border border-[#ffffff] rounded-lg px-6 text-nowrap py-3 hover:scale-[1.15] transition-transform duration-300"
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
