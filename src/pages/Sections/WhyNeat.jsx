import React from "react";
import Why from "../../assets/why.svg";

function WhyNeat() {
  return (
    <>
      <section className="w-full min-h-[1000px] h-[100vh] bg-[#0D0E14] grid items-center justify-center font-sans text-center">
        <div className="max-w-[1440px] grid grid-cols-3">
          <div className="left col-span-2">
            <div>
              <h1 className="text-5xl">
                Why learning with{" "}
                <span className="text-pink-600">Neat Skills</span> <br /> gives
                you a one up
              </h1>
              <img src={Why} alt="why-neatskills" />
            </div>
          </div>
          <div className="right flex flex-col justify-evenly pl-6 text-xl">
            <div className="w-80 px-7 py-5 gradientPinkToRed text-start rounded-lg">
              Go beyond Pre-Recorded Courses with Neat Skills and clear your
              doubts.
            </div>
            <div className="w-80 px-7 py-5 gradientPinkToRed text-start rounded-lg translate-x-[40%]">
              Our Online classes allows teacher and student to set their own
              pace of learning and there is added flexibility in setting a
              schedule that fits everyone.
            </div>
            <div className="w-80 px-7 py-5 gradientPinkToRed text-start rounded-lg">
              Interactive problem-solving is more effective than watching
              lectures. Reinforce your learning with interactive quizzes.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyNeat;
