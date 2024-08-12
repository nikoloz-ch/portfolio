import React from "react";
import { CardBody, CardContainer, CardItem } from "./3dcard";
const Banner = () => {
  return (
    <section id="home" className="container mx-auto mt-24">
      <div className="flex p-[20px] py-[50px] animate-enter opacity-0 translate-y-[20%]">
        <div className="gap-5 h-[200px] flex-wrap m-auto">
          <div className="relative flex-wrap flex justify-center">
            <h1 className=" text lg:text-[50px] md:text-[40px] text-[18px] sm:text-[25px] font-bold text-white text-center">
              Hello, my name is Nikoloz and i am a
            </h1>
            <h1 className=" text font-extrabold text-3xl flex gap-5 lg:text-[55px] md:text-[50px] sm:text-[35px] text-white text-center">
              <span className="relative">
                <span className="">FULL STACK </span>
                <span className="absolute blur-xl top-0 bottom-0 left-0 right-0 text-purple-500">
                  FULL STACK{" "}
                </span>
              </span>
              <span className=" text hidden lg:block font-bold lg:text-[50px] md:text-[40px] sm:text-[25px] text-white">
                developer from Georgia.
              </span>
            </h1>
            <span className=" text-[21px] text lg:hidden xl:hidden sm:block font-bold lg:text-[50px] md:text-[40px] sm:text-[25px] text-white">
              developer from Georgia.
            </span>
          </div>
          <h1 className=" text-center text-[20px] font-canada flex-wrap justify-center mt-[50px]">
            Tools I mostly use are: Next.js, React.js, HTML and Tailwind CSS.
          </h1>
          <img
            src="/underline.png"
            alt=""
            className=" xl:inline hidden animate-underline absolute line xl:h-[32px] w-[0px] object-cover object-left 2xl:bottom-[90px] xl:bottom-[90px] xl:left-[160px] 2xl:h-[39px] 2xl:left-[260px] -z-20"
          />
        </div>
      </div>
      <div className=" animate-logo opacity-0">
        <div class=" -z-30 mt-16 border-[#cac6dd1a] absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div class=" -z-30 mt-16 border-[#cac6dd1a] absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div class=" -z-30 mt-16 border-[#cac6dd1a] absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div class=" -z-30 mt-16 border-[#cac6dd1a] absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className=" animate-enter2 translate-y-[30%] opacity-0 shadman grid grid-rows-4 gap-8 m-auto border-purple-600 backdrop-blur-sm border-4 rounded-3xl w-full lg:w-1/2 p-12">
        <div>
          <p className=" font-canada text-white text-2xl">Next.js</p>
          <progress
            className="progress progress-secondary w-full"
            value={58}
            max="100"
          />
        </div>
        <div>
          <p className=" font-canada text-white text-2xl">Express.js</p>
          <progress
            className="progress progress-secondary w-full"
            value={42}
            max="100"
          />
        </div>
        <div>
          <p className=" font-canada text-white text-2xl">React.js</p>
          <progress
            className="progress progress-secondary w-full"
            value={76}
            max="100"
          />
        </div>
        <div>
          <p className=" font-canada text-white text-2xl">Tailwind CSS</p>
          <progress
            className="progress progress-secondary w-full"
            value={95}
            max="100"
          />
        </div>
        <div>
          <p className=" font-canada text-white text-2xl">HTML/JSX</p>
          <progress
            className="progress progress-secondary w-full"
            value={100}
            max="100"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
