import React from "react";
import StudyGirl from "../../assets/Studygirl.svg";
import LeftBlob from "../../assets/blob_left.webp";
import RightBlob from "../../assets/blob_right.webp";

function JoinNeat() {
  return (
    <>
      <section className="w-full min-h-[1000px] h-[100vh] bg-[#0D0E14] grid justify-center items-center font-sans">
        <div className="grid grid-cols-4 mx-auto">
          <img
            src={LeftBlob}
            alt="left blob"
            className="translate-x-[-10rem] hidden 2xl:block"
          />
          <div className="left col-span-2 2xl:col-span-1">
            <img src={StudyGirl} alt="study girl" />
          </div>
          <div className="right col-span-2 2xl:col-span-1">
            <h1 className="font-bold text-3xl my-5">
              image Join our Neat Skills Community
            </h1>
            <p className="text-lg">
              Learn any skill (coding , AI/ML , art , business, stock market ,
              marketing , video editing and much more) at just one nominal
              monthly subscription cequivalent to your sim card plan main
            </p>

            <div className="list mt-[2rem] flex flex-col gap-10">
              <div className="w-[75%] flex gap-5">
                <div className="h-[15px] w-[25px] bg-pink-600 translate-y-1"></div>
                <h1 className="text-lg">
                  <span className="text-xl font-bold">Easily accessible</span>
                  <br />
                  Learn at the comfort of your home , with regular assessments
                  and doubt sessions.
                </h1>
              </div>
              <div className="w-[75%] flex gap-5">
                <div className="h-[15px] w-[25px] bg-pink-600 translate-y-1"></div>
                <h1 className="text-lg">
                  <span className="text-xl font-bold">Easily accessible</span>
                  <br />
                  Learn at the comfort of your home , with regular assessments
                  and doubt sessions.
                </h1>
              </div>
              <div className="w-[75%] flex gap-5">
                <div className="h-[15px] w-[25px] bg-pink-600 translate-y-1"></div>
                <h1 className="text-lg">
                  <span className="text-xl font-bold">Easily accessible</span>
                  <br />
                  Learn at the comfort of your home , with regular assessments
                  and doubt sessions.
                </h1>
              </div>
            </div>
          </div>
          <img
            src={RightBlob}
            alt="right blob"
            className="translate-x-[10rem]  hidden 2xl:block"
          />
        </div>
      </section>
    </>
  );
}

export default JoinNeat;
