import React from "react";
import { Carousel } from "flowbite-react";
import { useRef } from "react";
import { Clipboard } from "flowbite-react";
import { useInView } from "framer-motion";

const Carusel = () => {
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const isInView4 = useInView(ref4, { once: true });
  const isInView5 = useInView(ref5, { once: true });
  return (
    <div id="Projects">
      <div
        className=" text-3xl text-center p-20 relative text-white"
        ref={ref4}
        style={{
          transform: isInView4 ? "none" : "translateY(200px)",
          opacity: isInView4 ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <span>My Projects</span>
        <span className="absolute blur-xl top-20 bottom-0 left-0 right-0 !text-purple-500">
          My projects{" "}
        </span>
      </div>
      <div
        style={{
          transform: isInView4 ? "none" : "translateY(200px)",
          opacity: isInView4 ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className=" mx-auto container grid grid-cols-3 gap-2 md:gap-16"
      >
        <a
          href="https://nikoloz-ch.github.io/MyMarket-replica/"
          className="text-center md:text-3xl text-xl text-white p-5 border-purple-600 border-[3px] rounded-xl shadbase duration-300 ease-in-out"
        >
          MyMarket Replica
        </a>
        <a
          href="https://calculator-mauve-eight.vercel.app/"
          className="text-center md:text-3xl text-xl text-white p-5 border-purple-600 border-[3px] rounded-xl shadbase duration-300 ease-in-out"
        >
          JS Calculator
        </a>
        <a
          href="https://searchbar-phi.vercel.app/"
          className="text-center md:text-3xl text-xl text-white p-5 border-purple-600 border-[3px] rounded-xl shadbase duration-300 ease-in-out"
        >
          React Searchbar
        </a>
      </div>
      <div
        style={{
          transform: isInView4 ? "none" : "translateY(200px)",
          opacity: isInView4 ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className=" text-3xl text-center p-20 relative text-white"
      >
        <span>Contact</span>
        <span
          style={{
            transform: isInView4 ? "none" : "translateY(200px)",
            opacity: isInView4 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="absolute blur-xl top-20 bottom-0 left-0 right-0 !text-purple-500"
        >
          Contact{" "}
        </span>
      </div>
      <div className=" mx-auto container lg:grid lg:grid-cols-4 md:grid md:grid-cols-4 gap-16">
        <div className="flex flex-col lg:flex-row w-full gap-2">
          <div className="flex">
            <label htmlFor="npm-install" className="sr-only">
              Label
            </label>
            <input
              style={{
                transform: isInView4 ? "none" : "translateY(200px)",
                opacity: isInView4 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              id="npm-install"
              type="text"
              className="col-span-6 block w-[250px] mx-10 rounded-lg border border-purple-600 shadbase2 bg-transparent p-2.5 text-sm text-gray-500 "
              value="beeamteam@gmail.com"
              disabled
              readOnly
            />
            <Clipboard
              style={{
                transform: isInView4 ? "none" : "translateY(200px)",
                opacity: isInView4 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              valueToCopy="beeamteam@gmail.com"
              className="!bg-transparent shadbase2 border-purple-600 border"
              label="Copy"
            />
          </div>
          <div className="flex">
            <label htmlFor="npm-install" className="sr-only">
              Label
            </label>
            <input
              style={{
                transform: isInView4 ? "none" : "translateY(200px)",
                opacity: isInView4 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              id="npm-install"
              type="text"
              className="col-span-6 block w-[250px] mx-10 rounded-lg border border-purple-600 shadbase2 bg-transparent p-2.5 text-sm text-gray-500 "
              value="(+995) 599 88 69 85"
              disabled
              readOnly
            />
            <Clipboard
              style={{
                transform: isInView4 ? "none" : "translateY(200px)",
                opacity: isInView4 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              valueToCopy="599 88 69 85"
              className="!bg-transparent shadbase2 border-purple-600 border"
              label="Copy"
            />
          </div>
          <div className="flex">
            <label htmlFor="npm-install" className="sr-only">
              Label
            </label>
            <input
              style={{
                transform: isInView4 ? "none" : "translateY(200px)",
                opacity: isInView4 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              id="npm-install"
              type="text"
              className="col-span-6 block w-[250px] mx-10 rounded-lg border border-purple-600 shadbase2 bg-transparent p-2.5 text-sm text-gray-500 "
              value="Xlerzest (discord)"
              disabled
              readOnly
            />
            <Clipboard
              style={{
                transform: isInView4 ? "none" : "translateY(200px)",
                opacity: isInView4 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              valueToCopy="Xlerzest"
              className="!bg-transparent shadbase2 border-purple-600 border"
              label="Copy"
            />
          </div>
          <div className="flex">
            <label htmlFor="npm-install" className="sr-only">
              Label
            </label>
            <input
              style={{
                transform: isInView4 ? "none" : "translateY(200px)",
                opacity: isInView4 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              id="npm-install"
              type="text"
              className="col-span-6 block w-[250px] mx-10 rounded-lg border border-purple-600 shadbase2 bg-transparent p-2.5 text-sm text-gray-500 "
              value="https://github.com/nikoloz-ch"
              disabled
              readOnly
            />
            <Clipboard
              style={{
                transform: isInView4 ? "none" : "translateY(200px)",
                opacity: isInView4 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              valueToCopy="https://github.com/nikoloz-ch"
              className="!bg-transparent shadbase2 border-purple-600 border"
              label="Copy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carusel;
