import React from "react";

const Header = () => {
  return (
    <>
      <div className="container mx-auto xl:block hidden relative z-40">
        <div className=" mt-[25px] h-[60px] ">
          <nav className=" bg-[rgb(31,27,47)]/[0.3] shadow-[inset_0_0_15px_0_rgb(54,48,83)]  backdrop-blur-sm animate-header rounded-[32px] h-full relative">
            <div className="bg-[rgb(40,35,60)] opacity-0 rounded-full w-[55px] h-[55px] shadow-lg absolute top-[2.5px] left-[2.5px] cursor-pointer  animate-logo" />
            <div className=" bg-[url(/logo.jpg)] avto opacity-0 rounded-full w-[50px] h-[50px] shadow-lg absolute top-[5px] left-[5px] bg-cover cursor-pointer animate-logo" />
            <div className="text-[rgb(255,255,255)] grid grid-flow-col w-[40%] align-center ml-[28%]">
              <a
                href="#home"
                className=" relative group z-20 font-oswald animate-text1 text-center opacity-0 mt-[18px] cursor-pointer hover:text-white transition-all ease-in-out duration-200"
              >
                Home
                <div className=" bg-white h-[2px] w-0 transition-all duration-300 bottom-0 left-0 right-0 group-hover:w-[50%] ml-[25%] rounded-lg" />
              </a>
              <a
                href="#about"
                className=" relative group font-oswald animate-text2 text-center opacity-0 mt-[18px] cursor-pointer hover:text-white transition-all ease-in-out duration-200"
              >
                About
                <div className=" bg-white h-[2px] w-0 transition-all duration-300 bottom-0 left-0 right-0 group-hover:w-[50%] ml-[25%] rounded-lg" />
              </a>
              <a
                href="#Projects"
                className=" relative group font-oswald animate-text3 text-center opacity-0 mt-[18px] cursor-pointer hover:text-white transition-all ease-in-out duration-200"
              >
                Projects
                <div className=" bg-white h-[2px] w-0 transition-all duration-300 bottom-0 left-0 right-0 group-hover:w-[50%] ml-[25%] rounded-lg" />
              </a>
              <a
                href="#Projects"
                className=" relative group font-oswald animate-text4 text-center opacity-0 mt-[18px] cursor-pointer hover:text-white transition-all ease-in-out duration-200"
              >
                Contact
                <div className=" bg-white h-[2px] w-0 transition-all duration-300 bottom-0 left-0 right-0 group-hover:w-[50%] ml-[25%] rounded-lg" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
