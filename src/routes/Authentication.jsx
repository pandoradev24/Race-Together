import React from "react";
import { Outlet } from "react-router-dom";

const Authentication = () => {
  return (
    <div className="relative w-screen h-screen bg-[#E4D6C0] flex items-center justify-center font-[Inter]">
      <img
        src="/assets/pink-cloud.svg"
        alt="pink cloud"
        className="absolute z-[1] top-0 left-0 right-0 w-screen -translate-y-[25%]"
      />
      <img
        src="/assets/left-cloud.svg"
        alt="left cloud"
        className="absolute z-[1] top-0 left-0 w-[22.5%]"
      />
      <img
        src="/assets/right-cloud.svg"
        alt="right cloud"
        className="absolute z-[1] top-[2%] right-0 w-[10%]"
      />
      <img
        src="/assets/cloud.svg"
        alt="cloud"
        className="absolute z-[1] top-[30%] left-[5%] w-[17.5%]"
      />
      <div className="absolute top-4 z-[2] mx-auto w-max">
        <div className="mx-auto w-max text-center text-[7.6875rem] text-white font-[Sacramento] font-normal">
          Race Together
        </div>
        <span className="absolute text-[1.25rem] text-white font-[Lato] font-light bottom-[12.5%] right-[5%]">
          Pandora Dev
        </span>
      </div>
      <Outlet />
    </div>
  );
};

export default Authentication;
