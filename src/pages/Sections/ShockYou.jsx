import React from "react";
import Activities from "../../assets/activities.webp";

function ShockYou() {
  return (
    <section className="w-full min-h-[1000px] h-[100vh] bg-[#0D0E14] grid justify-center items-center font-sans relative">
      <div>
        <div className="flex justify-start">
          <h1 className="text-4xl text-center">
            A number of available learning <br /> activities that will{" "}
            <span className="text-pink-600">shock you</span>
          </h1>
        </div>
        <img src={Activities} alt="activities" />
      </div>
    </section>
  );
}

export default ShockYou;
