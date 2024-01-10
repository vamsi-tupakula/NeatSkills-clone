import React from "react";
import Navbar from "../components/Navbar";
import HomeSection from "./Sections/HomeSection";
import CourseSection from "./Sections/CourseSection";
import WhyNeat from "./Sections/WhyNeat";
import MentorSection from "./Sections/MentorSection";

function Home() {
  return (
    <div className="w-full min-h-[100vh] text-[#ffffff]">
      {/* Navbar */}
      <Navbar />
      {/* All Sections */}
      {/* Home Section */}
      <HomeSection />
      {/* Courses Section */}
      <CourseSection />
      {/* WhyNext Section */}
      <WhyNeat />
      {/* MentorSection */}
      <MentorSection />
      <section className="w-full min-h-[1000px] h-[100vh] bg-[#15161B]"></section>
      <section className="w-full min-h-[1000px] h-[100vh] bg-[#0D0E14]"></section>
    </div>
  );
}

export default Home;
