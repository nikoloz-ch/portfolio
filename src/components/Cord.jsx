import React, { useEffect, useState } from "react";

const Cord = () => {
  const [visible, setvisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 180) {
        setvisible(true);
      } else {
        setvisible(false);
      }
    });
  }, []);
  return (
    <a
      href="#"
      className={`fixed ${
        visible === true ? "scale-100" : "scale-0"
      } rounded-full w-[60px] h-[60px] bottom-16 left-16 bg-transparent duration-200 transition-all ease-in-out border-purple-600 shadman border-[2px] flex justify-center items-center`}
    >
      <svg
        className="w-6 h-6 text-purple-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m5 15 7-7 7 7"
        />
      </svg>
    </a>
  );
};

export default Cord;
