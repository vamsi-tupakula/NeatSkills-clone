import React from "react";
import NeatSkillsLogo from "../assets/neatskillslogosample.svg";

function Footer() {
  return (
    <section className="w-full min-h-[350px] bg-[#000000] grid justify-center items-center font-sans py-5">
      <div className="grid grid-cols-1 xl:grid-cols-5 w-[1260px] h-full justify-center">
        <div className="logo flex justify-center">
          <img src={NeatSkillsLogo} alt="" />
        </div>
        <div className="info col-span-2 flex justify-center items-center gap-10">
          <div>
            <p className="font-bold text-xl my-3">Company Information</p>
            <ul className="flex flex-col gap-2">
              <li className="text-gray-300 hover:text-gray-100 hover:scale-[1.01] cursor-pointer">
                About Us
              </li>
              <li className="text-gray-300 hover:text-gray-100 hover:scale-[1.01] cursor-pointer">
                Help
              </li>
              <li className="text-gray-300 hover:text-gray-100 hover:scale-[1.01] cursor-pointer">
                Privacy Policy
              </li>
              <li className="text-gray-300 hover:text-gray-100 hover:scale-[1.01] cursor-pointer">
                Terms and Conditions
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-xl my-3">Popular Courses</p>
            <ul className="flex flex-col gap-2">
              <li className="text-gray-300 hover:text-gray-100 hover:scale-[1.01] cursor-pointer">
                Ux Fundamentals
              </li>
              <li className="text-gray-300 hover:text-gray-100 hover:scale-[1.01] cursor-pointer">
                Python Coading
              </li>
              <li className="text-gray-300 hover:text-gray-100 hover:scale-[1.01] cursor-pointer">
                Maths
              </li>
              <li className="text-gray-300 hover:text-gray-100 hover:scale-[1.01] cursor-pointer">
                Introduction to C++
              </li>
            </ul>
          </div>
        </div>
        <div className="links col-span-2 flex flex-col justify-end pl-[10%] gap-5">
          <h1 className="text-2xl font-bold">Follow Us</h1>
          <ul className="social flex gap-10 text-4xl">
            <li>
              <i className="fa-brands fa-discord"></i>
            </li>
            <li>
              <i className="fa-brands fa-linkedin"></i>
            </li>
            <li>
              <i className="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i className="fa-brands fa-twitter"></i>
            </li>
            <li>
              <i className="fa-brands fa-youtube"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center py-3">
        <p>neatskills.online managed by Provoke Developers Private Limited</p>
        <p>
          Address : Provoke Developers Private Limited, C/O Raviraj Kumar, Jai
          Prakash Nagar, Bhurkunda, Ramgarh, Jharkhand
        </p>
      </div>
    </section>
  );
}

export default Footer;
