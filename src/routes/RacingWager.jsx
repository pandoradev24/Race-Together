import React from "react";
import { Link } from "react-router-dom";
import { user } from "../signals/User";

const RacingWager = () => {
  return (
    <div className="relative w-full h-full bg-[#2B2B2B] flex items-center justify-center">
      <div className="absolute z-[1] top-10 right-[3.125rem] flex flex-row">
        <span className="text-white text-[1.875rem] font-['Press_Start_2P'] font-normal">
          $:{user.value.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </span>
        <img src="/assets/hamburger-icon.svg" alt="" className="ml-10 h-10" />
      </div>
      <Link
        to="/character-picker"
        className="absolute z-[1] bottom-10 left-[3.125rem] text-white text-[2.1875rem] font-['Press_Start_2P'] font-normal"
      >
        {`<<back`}
      </Link>
      <div></div>
    </div>
  );
};

export default RacingWager;
