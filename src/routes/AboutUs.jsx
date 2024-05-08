import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="relative w-full h-full bg-[#2B2B2B] flex items-center justify-center">
      <img
        src="/assets/hamburger-icon.svg"
        alt=""
        className="absolute z-[1] h-10 top-10 right-[3.125rem]"
      />
      <div className="absolute z-[1] top-24">
        <h1 className="text-[2.1875rem] text-center text-white font-['Press_Start_2P'] font-normal leading-[5rem]">
          About us
        </h1>
      </div>
      <Link
        to="/lobby"
        className="absolute z-[1] bottom-10 left-[3.125rem] text-white text-[2.1875rem] font-['Press_Start_2P'] font-normal"
      >
        {`<<back`}
      </Link>
    </div>
  );
};

export default AboutUs;
