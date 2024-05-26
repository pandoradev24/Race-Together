import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const clickSound = new Audio("/audio/click.mp3");
  const startClickSound = () => {
    clickSound.play();
  };
  return (
    <div className="relative w-full h-full bg-[#2B2B2B] flex items-center justify-center font-['Press_Start_2P']">
      <img
        src="/assets/hamburger-icon.svg"
        alt=""
        className="absolute z-[1] h-10 top-10 right-[3.125rem] cursor-pointer"
      />
      <div className="absolute z-[1] top-24">
        <h1 className="text-[2.1875rem] text-center text-white font-normal leading-[5rem]">
          About us
        </h1>
      </div>
      <Link
        to="/lobby"
        onClick={startClickSound}
        className="absolute z-[1] bottom-10 left-[3.125rem] text-white text-[2.1875rem] font-normal"
      >
        {`<<back`}
      </Link>
      <div className="w-[63.25rem] text-white text-center text-[0.875rem] leading-[2.75rem]">
        We here at Racing Together are all about two things: avoiding the
        Deadline Doom and making pixelated aliens go brrr.
        <br />
        <br />
        Our coding skills are about as aerodynamic as a brick, but hey, at least
        we can hit the copy-paste button like a pro driver.
        <br />
        <br />
        So, if you're looking for a physics simulation or a chance to impress
        Elon Musk, you're barking up the wrong binary tree. But if you need a
        quick escape from impending doom (a.k.a. that overdue assignment),
        buckle up and floor it!
      </div>
    </div>
  );
};

export default AboutUs;
