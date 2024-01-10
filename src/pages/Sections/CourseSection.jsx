import React from "react";
import HatImg from "../../assets/images_hat.webp";

function CourseSection() {
  return (
    <>
      <section className="w-full min-h-[1000px] h-[100vh] bg-[#15161B] grid justify-center grid-rows-3 font-sans">
        <div className="explore__div max-w-[1570px] text-center text-wrap grid grid-cols-4 items-center justify-items-center">
          <h1 className="font-bold text-5xl">Explore our Courses</h1>
          <p className="text-xl col-span-2">
            You don't need to have any prior knowledge to take our classes. You
            just need curiosity and the desire to learn.
          </p>
          <a href="/beta/login">
            <button
              type="button"
              className="border-[3px] border-[#ffffff] w-[77px] h-7 md:text-sm md:w-48 md:h-11 lg:text-xl lg:w-auto px-5 py-5 lg:h-auto hover:scale-[1.05] transition-transform duration-300"
            >
              Explore Courses
            </button>
          </a>
        </div>
        <div className="cards grid grid-cols-3">
          <div class="shrink-0 rounded-2xl border-2  border-white shadow-lg bg-[#141518] py-[10px] px-[12px] h-[230px] md:h-[17rem] w-[250px] md:w-[355px]  md:p-5 flex flex-col  ">
            <div class="flex justify-between ">
              <img
                alt="f"
                loading="lazy"
                width="100"
                height="100"
                decoding="async"
                data-nimg="1"
                class="md:w-[80px] md:h-[80px] w-[70px] h-[70px]  object-contain"
                style={{ color: "transparent" }}
                src={HatImg}
              />
              <div class="text-[10px] pt-3 md:pt-0 md:text-sm text-[#E1348B] ">
                <span class="mr-3"> Lessons</span>
                <span>Beginner</span>
              </div>
            </div>
            <div class="flex flex-col justify-between h-full overflow-hidden">
              <div>
                <h1 class="text-[#ffffff8c] text-[6px] md:text-[14px] md:text-sm font-medium">
                  COURSE
                </h1>
                <h1 class="text-white  md:text-2xl font-medium">
                  Christmas Update...
                </h1>
                <p class="font-raleway text-left text-white text-[10px] md:text-[0.8rem]  overflow-hidden overflow-ellipsis leading-normal tracking-wide md:line-clamp-3 line-clamp-2">
                  Christmas Update going on!
                </p>
              </div>
              <div class="flex justify-end pt-4 ">
                <a
                  type="button"
                  class=" text-white border  border-pink text-xs  md:text-sm px-3 py-2 hover:bg-primary hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-110  hover:shadow-lg"
                  href="/beta/coursedetail?title=Christmas+Update+going+on%21"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CourseSection;
