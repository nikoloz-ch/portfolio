import React, { useRef } from "react";
import { CardContainer } from "./3dcard";
import { useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView = useInView(ref, { once: true });

  return (
    <div>
      <div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className=" about mx-auto container"
      >
        <div
          id="about"
          className="  w-full backdrop-blur-sm border-purple-600 border-[4px] rounded-3xl h-[600px] mt-[50px] shadman"
        >
          <div className=" bg-grid-white bg-repeat top-0 left-0 right-0 bottom-0 absolute opacity-50 -z-30" />
          <div className="h-full flex">
            <div className=" w-full lg:w-1/3 ml-12 mt-8 h-full">
              <div
                className=" font-oswald text-[60px]"
                style={{
                  transform: isInView ? "none" : "translateY(200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
                }}
              >
                About me
              </div>
              <div
                style={{
                  width: isInView ? "100%" : "0",
                  transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
                }}
                className=" border-[2px] w-full border-white rounded-3xl"
              />
              <div
                className=" font-oswald text-3xl mt-5"
                style={{
                  transform: isInView ? "none" : "translateY(200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s",
                }}
              >
                I build websites as a hobby and am currently working on fully
                learning backend development especially Next.js and some C++. My
                techbase consists mostly of tools of CSS and HTML and some JS.
                When i discovered React.js i knew i found the language to settle
                on.
              </div>
            </div>
            <div
              className="lg:block hidden lg:w-1/2"
              style={{
                transform: isInView ? "none" : "translateX(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.8s",
              }}
            >
              <CardContainer className=" ml-24 mt-12 backdrop-blur-sm h-[90%] w-full">
                <div className=" w-full border-[hsla(0,0%,100%,.2)] border-[2px] h-full rounded-2xl">
                  <div className="flex border-b-[2px] border-[rgba(100,116,139,.3)]">
                    <div className="flex gap-2 p-3">
                      <div className="bg-slate-700 w-2.5 h-2.5 rounded-full" />
                      <div className="bg-slate-700 w-2.5 h-2.5 rounded-full" />
                      <div className="bg-slate-700 w-2.5 h-2.5 rounded-full" />
                    </div>
                  </div>
                  <div className="pt-2 pl-4">
                    <div className="font-pop text-gray-500">
                      {"<"}
                      <span className="text-pink-400">!DOCTYPE </span>
                      <span className="text-orange-400"> html</span>
                      {">"}
                    </div>
                    <div className="font-pop text-gray-500">
                      {"<"}
                      <span className="text-pink-400">html</span>
                      {">"}
                    </div>
                    <div className="font-pop text-gray-500">
                      {"<"}
                      <span className="text-pink-400">head</span>
                      {">"}
                    </div>
                    <div className="font-pop text-gray-500 ml-5">
                      {"<"}
                      <span className="text-pink-400">meta</span>
                      <span className="text-orange-400"> charset</span>
                      <span className="text-gray-200">=</span>
                      <span className="text-lime-400">"UTF-8"</span>
                      {">"}
                    </div>
                    <div className="font-pop text-gray-500 ml-5">
                      {"<"}
                      <span className="text-pink-400">link</span>
                      <span className="text-orange-400"> rel</span>
                      <span className="text-gray-200">=</span>
                      <span className="text-lime-400">"stylesheet"</span>
                      <span className="text-orange-400"> href</span>
                      <span className="text-gray-200">=</span>
                      <span className="text-lime-400">
                        "./styles/index.css"
                      </span>
                      <span className="text-orange-400"> type</span>
                      <span className="text-gray-200">=</span>
                      <span className="text-lime-400">"text/css"</span>
                      {">"}
                    </div>
                    <div className="font-pop text-gray-500 ml-5">
                      {"<"}
                      <span className="text-pink-400">title</span>
                      {">"}
                      <span className="text-gray-200">amazing title yk</span>
                      {"</"}
                      <span className="text-pink-400">title</span>
                      {">"}
                    </div>
                    <div className="font-pop text-gray-500">
                      {"</"}
                      <span className="text-pink-400">head</span>
                      {">"}
                    </div>
                    <div className="font-pop text-gray-500">
                      {"<"}
                      <span className="text-pink-400">body</span>
                      {">"}
                    </div>
                    <div className="font-pop text-gray-500 ml-5">
                      {"<"}
                      <span className="text-pink-400">h1</span>
                      {">"}
                      <span className="text-gray-200">About me</span>
                      {"</"}
                      <span className="text-pink-400">h1</span>
                      {">"}
                    </div>
                    <div className="font-pop text-gray-500 ml-5">
                      {"<"}
                      <span className="text-pink-400">p</span>
                      {">"}
                    </div>
                    <div className="font-pop text-gray-500 ml-10">
                      <span className="text-gray-200">
                        I build websites as a hobby and am currently working on
                        fully learning backend development especially Next.js
                        and some C++. My techbase consists mostly of tools of
                        CSS and HTML and some JS. When i discovered React.js i
                        knew i found the language to settle on.
                      </span>
                    </div>
                    <div className="font-pop text-gray-500 ml-5">
                      {"</"}
                      <span className="text-pink-400">p</span>
                      {">"}
                    </div>
                    <div className="font-pop text-gray-500 ml-5">
                      {"<"}
                      <span className="text-pink-400">script</span>
                      <span className="text-orange-400"> href</span>
                      <span className="text-gray-200">=</span>
                      <span className="text-lime-400">"./scripts/main.js"</span>
                      {">"}
                      {"</"}
                      <span className="text-pink-400">script</span>
                      {">"}
                    </div>
                    <div className="font-pop text-gray-500">
                      {"</"}
                      <span className="text-pink-400">body</span>
                      {">"}
                    </div>
                  </div>
                </div>
              </CardContainer>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto container" ref={ref2}>
        <div className=" grid lg:grid-cols-3 gap-10 mt-10">
          <div
            style={{
              transform: isInView2 ? "none" : "translateX(100px)",
              opacity: isInView2 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s",
            }}
            className=" backdrop-blur-sm border-purple-600 border-[4px] rounded-3xl shadman h-[350px] hover:scale-110 transition-all w-full duration-300"
          >
            <div className=" bg-grid-white bg-repeat top-0 left-0 right-0 bottom-0 absolute opacity-50 -z-30" />
            <div className="w-full">
              <div className=" h-[90%] w-full">
                <div className=" w-full border-[hsla(0,0%,100%,.2)] border-[2px] h-full rounded-b-none rounded-2xl">
                  <div className="flex border-b-[2px] border-[rgba(100,116,139,.3)]">
                    <div className="flex gap-2 p-3">
                      <div className="bg-slate-700 w-2.5 h-2.5 rounded-full" />
                      <div className="bg-slate-700 w-2.5 h-2.5 rounded-full" />
                      <div className="bg-slate-700 w-2.5 h-2.5 rounded-full" />
                    </div>
                  </div>
                  <div className="pt-2 pl-4">
                    <div className="font-pop text-gray-500">
                      <span className="text-blue-400 italic">import </span>
                      <span className="text-gray-200"> React</span>
                      <span className="text-blue-400 italic"> from </span>
                      <span className="text-blue-400">"</span>
                      <span className="text-green-400">react</span>
                      <span className="text-blue-400">"</span>
                    </div>
                    <div className="font-pop text-yellow-500">
                      <span className="text-blue-400 italic">import </span>
                      {"{"}
                      <span className="text-gray-200"> StrictMode </span>
                      {"}"}
                      <span className="text-blue-400 italic"> from </span>
                      <span className="text-blue-400">"</span>
                      <span className="text-green-400">react</span>
                      <span className="text-blue-400">"</span>
                    </div>
                    <div className="font-pop text-yellow-500">
                      <span className="text-blue-400 italic">import </span>
                      {"{"}
                      <span className="text-gray-200"> CreateRoot </span>
                      {"}"}
                      <span className="text-blue-400 italic"> from </span>
                      <span className="text-blue-400">"</span>
                      <span className="text-green-400">react-dom/client</span>
                      <span className="text-blue-400">"</span>
                    </div>
                    <div className="font-pop text-gray-500">
                      <span className="text-blue-400 italic">import </span>
                      <span className="text-gray-200"> App</span>
                      <span className="text-blue-400 italic"> from </span>
                      <span className="text-blue-400">"</span>
                      <span className="text-green-400">./App.jsx</span>
                      <span className="text-blue-400">"</span>
                    </div>
                    <div className="font-pop text-gray-500 mt-3">
                      <span className="text-blue-500">createRoot</span>
                      <span className="text-yellow-400">{"("}</span>
                      <span className="text-gray-200">document </span>
                      <span className="text-blue-500">.getElementById</span>
                      <span className="text-pink-400">{"("}</span>
                      <span className="text-blue-400">'</span>
                      <span className="text-green-400">root</span>
                      <span className="text-blue-400">{"'"}</span>
                      <span className="text-pink-400">{")"}</span>
                      <span className="text-yellow-400">{")"}</span>
                      <span className="text-blue-500">.render</span>
                      <span className="text-yellow-400">{"("}</span>
                    </div>
                    <div className="font-pop text-blue-400 ml-5">
                      {"<"}
                      <span className="text-yellow-400">StrictMode</span>
                      {">"}
                    </div>
                    <div className="font-pop text-blue-400 ml-10">
                      {"<"}
                      <span className="text-yellow-400">App /</span>
                      {">"}
                    </div>
                    <div className="font-pop text-blue-400 ml-5">
                      {"</"}
                      <span className="text-yellow-400">StrictMode</span>
                      {">,"}
                    </div>
                    <div className="font-pop text-gray-500">
                      <span className="text-yellow-400">{")"}</span>
                    </div>
                  </div>
                </div>
                <div className="flex font-oswald text-3xl ml-5 mt-3">
                  <span className=" text-blue-500">React</span>
                  <span className=" text-pink-500">.js</span>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              transform: isInView2 ? "none" : "translateY(100px)",
              opacity: isInView2 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
            }}
            className=" hover:scale-110 transition-all duration-300 backdrop-blur-sm border-purple-600 border-[4px] rounded-3xl shadman h-[350px] w-full"
          >
            <div className=" bg-grid-white bg-repeat top-0 left-0 right-0 bottom-0 absolute opacity-50 -z-30" />
            <div className="w-full">
              <div className=" h-[90%] w-full">
                <div className=" w-full border-[hsla(0,0%,100%,.2)] border-[2px] h-full rounded-b-none rounded-2xl">
                  <div className="flex border-b-[2px] border-[rgba(100,116,139,.3)]">
                    <div className="flex gap-2 p-3">
                      <div className="bg-slate-700 w-2.5 h-2.5 rounded-full" />
                      <div className="bg-slate-700 w-2.5 h-2.5 rounded-full" />
                      <div className="bg-slate-700 w-2.5 h-2.5 rounded-full" />
                    </div>
                  </div>
                  <div className="pt-2 pl-4">
                    <div className="font-pop text-gray-500">
                      <span className="text-pink-400">const </span>
                      <span className="text-gray-200"> express </span>
                      <span className="text-pink-400"> = </span>
                      <span className="text-blue-400"> require</span>
                      <span className="text-gray-200">{"("}</span>
                      <span className="text-blue-400">"</span>
                      <span className="text-lime-400">express</span>
                      <span className="text-blue-400">"</span>
                      <span className="text-gray-200">{")"}</span>
                      <span className="text-gray-200">{";"}</span>
                    </div>
                    <div className="font-pop text-gray-500">
                      <span className="text-pink-400">const </span>
                      <span className="text-gray-200"> app </span>
                      <span className="text-pink-400"> = </span>
                      <span className="text-blue-400"> express</span>
                      <span className="text-gray-200">{"("}</span>
                      <span className="text-gray-200">{")"}</span>
                      <span className="text-gray-200">{";"}</span>
                    </div>
                    <div className="font-pop mt-16 pb-[91px] text-gray-500">
                      <span className="text-gray-200">app.</span>
                      <span className="text-blue-400">use</span>
                      <span className="text-gray-200">{"("}</span>
                      <span className="text-gray-200">{"express"}</span>
                      <span className="text-gray-200">{"."}</span>
                      <span className="text-blue-400">{"json"}</span>
                      <span className="text-gray-200">{"());"}</span>
                    </div>
                  </div>
                </div>
                <div className="flex font-oswald text-3xl ml-5 mt-3">
                  <span className=" text-green-500">Node</span>
                  <span className=" text-pink-500">.js</span>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              transform: isInView2 ? "none" : "translateX(-100px)",
              opacity: isInView2 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.6s",
            }}
            className=" hover:scale-110 transition-all duration-300 backdrop-blur-sm border-purple-600 border-[4px] rounded-3xl shadman h-[350px] w-full"
          >
            <div className=" bg-grid-white bg-repeat top-0 left-0 right-0 bottom-0 absolute opacity-50 -z-30" />
            <div className="w-full">
              <div className=" h-[90%] w-full">
                <div className=" w-full border-[hsla(0,0%,100%,.2)] border-[2px] h-full rounded-b-none rounded-2xl">
                  <div className="flex border-b-[2px] border-[rgba(100,116,139,.3)]">
                    <div className="flex gap-2 p-3">
                      <div className="bg-slate-700 w-2.5 h-2.5 rounded-full" />
                      <div className="bg-slate-700 w-2.5 h-2.5 rounded-full" />
                      <div className="bg-slate-700 w-2.5 h-2.5 rounded-full" />
                    </div>
                  </div>
                  <div className="pt-2 pl-4">
                    <div className="font-pop text-gray-500">
                      <span className="text-lime-400">
                        {"#include <bits/stdc++.h>"}{" "}
                      </span>
                    </div>
                    <div className="font-pop text-yellow-500">
                      <span className="text-pink-400">using </span>
                      <span className="text-blue-400"> namespace </span>
                      <span className="text-green-400"> std</span>
                      <span className="text-gray-200">;</span>
                    </div>
                    <div className="font-pop text-yellow-500">
                      <span className="text-blue-400">int </span>
                      <span className="text-gray-200">
                        {" "}
                        {"a, b, graph[1001][1001];"}{" "}
                      </span>
                    </div>
                    <div className="font-pop text-yellow-500 mt-12 pb-20">
                      <span className="text-blue-400">void </span>
                      <span className="text-yellow-400"> dfs</span>
                      <span className="text-gray-200">{"("}</span>
                      <span className="text-blue-400">int </span>
                      <span className="text-gray-200"> {"ind) {"}</span>
                    </div>
                  </div>
                </div>
                <div className="flex font-oswald text-3xl ml-5 mt-3">
                  <span className=" text-blue-400">C</span>
                  <span className=" text-pink-500">++</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className=" grid lg:grid-flow-col auto-cols-fr mt-10 gap-5"
          ref={ref3}
        >
          <a
            style={{
              transform: isInView3 ? "none" : "translateY(-100px)",
              opacity: isInView3 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
            }}
            href=""
            className=" text-pink-500 font-canada text-lg text-center p-2 rounded-3xl border-purple-600 shadbase border-[2px]"
          >
            C++
          </a>
          <a
            style={{
              transform: isInView3 ? "none" : "translateY(100px)",
              opacity: isInView3 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.1s",
            }}
            href=""
            className=" text-pink-500 font-canada text-lg text-center p-2 rounded-3xl border-purple-600 shadbase border-[2px]"
          >
            HTML
          </a>
          <a
            style={{
              transform: isInView3 ? "none" : "translateY(-100px)",
              opacity: isInView3 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s",
            }}
            href=""
            className=" text-pink-500 font-canada text-lg text-center p-2 rounded-3xl border-purple-600 shadbase border-[2px]"
          >
            SCSS
          </a>
          <a
            style={{
              transform: isInView3 ? "none" : "translateY(100px)",
              opacity: isInView3 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.3s",
            }}
            href=""
            className=" text-pink-500 font-canada text-lg text-center p-2 rounded-3xl border-purple-600 shadbase border-[2px]"
          >
            CSS
          </a>
          <a
            style={{
              transform: isInView3 ? "none" : "translateY(-100px)",
              opacity: isInView3 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.4s",
            }}
            href=""
            className=" text-pink-500 font-canada text-lg text-center p-2 rounded-3xl border-purple-600 shadbase border-[2px]"
          >
            JS
          </a>
          <a
            style={{
              transform: isInView3 ? "none" : "translateY(100px)",
              opacity: isInView3 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
            }}
            href=""
            className=" text-pink-500 font-canada text-lg text-center p-2 rounded-3xl border-purple-600 shadbase border-[2px]"
          >
            node.js
          </a>
          <a
            style={{
              transform: isInView3 ? "none" : "translateY(-100px)",
              opacity: isInView3 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.6s",
            }}
            href=""
            className=" text-pink-500 font-canada text-lg text-center p-2 rounded-3xl border-purple-600 shadbase border-[2px]"
          >
            next.js
          </a>
          <a
            style={{
              transform: isInView3 ? "none" : "translateY(100px)",
              opacity: isInView3 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.7s",
            }}
            href=""
            className=" text-pink-500 font-canada text-lg text-center p-2 rounded-3xl border-purple-600 shadbase border-[2px]"
          >
            React.js
          </a>
          <a
            style={{
              transform: isInView3 ? "none" : "translateY(-100px)",
              opacity: isInView3 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.8s",
            }}
            href=""
            className=" text-pink-500 font-canada text-lg text-center p-2 rounded-3xl border-purple-600 shadbase border-[2px]"
          >
            Tailwind
          </a>
          <a
            style={{
              transform: isInView3 ? "none" : "translateY(100px)",
              opacity: isInView3 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.9s",
            }}
            href=""
            className=" text-pink-500 font-canada text-lg text-center p-2 rounded-3xl border-purple-600 shadbase border-[2px]"
          >
            TS
          </a>
          <a
            style={{
              transform: isInView3 ? "none" : "translateY(-100px)",
              opacity: isInView3 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
            }}
            href=""
            className=" text-pink-500 font-canada text-lg text-center p-2 rounded-3xl border-purple-600 shadbase border-[2px]"
          >
            Firebase
          </a>
          <a
            style={{
              transform: isInView3 ? "none" : "translateY(100px)",
              opacity: isInView3 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2.1s",
            }}
            href=""
            className=" text-pink-500 font-canada text-lg text-center p-2 rounded-3xl border-purple-600 shadbase border-[2px]"
          >
            MongoDB
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
