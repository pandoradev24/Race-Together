import React from "react";
import { Link } from "react-router-dom";
import { user } from "../signals/UserSignal";

const LobbyPage = () => {
  return (
    <div className="relative px-[3.125rem] py-10 w-full h-full font-['Press_Start_2P']">
      <img
        src="/assets/lobby-background.png"
        alt=""
        className="absolute w-full h-full top-0 bottom-0 left-0 right-0"
      />
      <div className="flex flex-row">
        <Link
          to=""
          className="relative z-[1] flex flex-col items-center justify-center"
        >
          <img
            src="/assets/character/son-1.png"
            alt=""
            className="h-[7.5rem]"
          />
          <span className="text-white text-base text-center">mini game</span>
        </Link>
        <Link
          to="/shop"
          className="relative z-[1] ml-20 flex flex-col items-center justify-center"
        >
          <img
            src="/assets/character/huy-1.png"
            alt=""
            className="h-[7.5rem]"
          />
          <span className="text-white text-base text-center">shop</span>
        </Link>
        <div className="ml-auto relative z-[1] flex flex-row">
          <span className="text-white text-[1.875rem]">
            $:
            {user.value.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </span>
          <img src="/assets/hamburger-icon.svg" alt="" className="ml-10 h-10" />
        </div>
      </div>
      <div className="mt-10">
        <Link
          to=""
          className="relative z-[1] w-max flex flex-col items-center justify-center"
        >
          <img
            src="/assets/character/anh-1.png"
            alt=""
            className="h-[7.5rem]"
          />
          <span className="text-white text-base text-center">hi hello</span>
        </Link>
      </div>
      <div className="absolute bottom-10 flex flex-row">
        <Link
          to="/about-us"
          className="relative z-[1] flex flex-col items-center justify-center"
        >
          <img
            src="/assets/character/hoang-1.png"
            alt=""
            className="h-[7.5rem]"
          />
          <span className="text-white text-base text-center">about us</span>
        </Link>
        <Link
          to="/tutorial"
          className="relative z-[1] ml-20 flex flex-col items-center justify-center"
        >
          <img
            src="/assets/character/hue-1.png"
            alt=""
            className="h-[7.5rem]"
          />
          <span className="text-white text-base text-center">how to play</span>
        </Link>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full">
        <div className="relative w-full h-full flex flex-col items-center">
          <Link
            to="/character-picker"
            className="absolute bottom-[25%] z-[1] text-white text-center text-[3rem] leading-[5rem] uppercase underline drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]"
          >
            Play
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LobbyPage;
