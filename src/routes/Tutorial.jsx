import React from "react";
import { Link } from "react-router-dom";

const Tutorial = () => {
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
          How to play
        </h1>
      </div>
      <Link
        to="/lobby"
        onClick={startClickSound}
        className="absolute z-[1] bottom-10 left-[3.125rem] text-white text-[2.1875rem] font-normal"
      >
        {`<<back`}
      </Link>
      <div className="w-[63.125rem] text-center text-white font-normal leading-[1.875rem] flex flex-col gap-8">
        <div className="text-[1.25rem]">1. Pick Your Pixel Punk:</div>
        <p className="text-[0.625rem]">
          Choose the cars, characters and where your adventure begins!
        </p>
        <div className="text-[1.25rem]">2. Car Roulette:</div>
        <p className="text-[0.625rem]">
          Spin the wheel and pray the internet gods bless you with a decent
          (ish) ride.
        </p>
        <div className="text-[1.25rem]">3. Bet the Benjamins:</div>
        <p className="text-[0.625rem]">
          Feeling spicy? Throw down some fake cash and see if you win.
        </p>
        <div className="text-[1.25rem]">
          4. The Race: Hold on tight, physics
          <br /> are...suggestive.
        </div>
        <p className="text-[0.625rem]">
          Hit the gas and... well, hope for the best.
        </p>
      </div>
    </div>
  );
};

export default Tutorial;
