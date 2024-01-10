import React from "react";
import Navbar from "../components/Navbar";
import HomeSection from "./Sections/HomeSection";
import CourseSection from "./Sections/CourseSection";
import WhyNeat from "./Sections/WhyNeat";
import MentorSection from "./Sections/MentorSection";
import JoinNeat from "./Sections/JoinNeat";
import ShockYou from "./Sections/ShockYou";
import Certificate from "./Sections/Certificate";
import GreatAim from "./Sections/GreatAim";
import Footer from "../components/Footer";

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
      {/* JoinNeat Section*/}
      <JoinNeat />
      {/* ShockYou Section */}
      <ShockYou />
      {/* Certificate Section */}
      <Certificate />
      {/* GreatAim Section */}
      <GreatAim />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
