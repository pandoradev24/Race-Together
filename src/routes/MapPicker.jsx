import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { setMap } from "../signals/GameSignal";

const MapPicker = () => {
  const navigate = useNavigate();
  const handleMapPick = (selectedMap) => {
    setMap(selectedMap);
    navigate("/racing-wager");
  };
  return (
    <div className="relative w-full h-full bg-[#2B2B2B] flex items-center justify-center">
      <img
        src="/assets/hamburger-icon.svg"
        alt=""
        className="absolute z-[1] h-10 top-10 right-[3.125rem]"
      />
      <Link
        to="/character-picker"
        className="absolute z-[1] bottom-10 left-[3.125rem] text-white text-[2.1875rem] font-['Press_Start_2P'] font-normal"
      >{`<<back`}</Link>
      <div>
        <h1
          className="mb-20 text-[2.1875rem] text-center text-white font-['Press_Start_2P'] font-normal leading-[5rem] drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]"
          style={{
            WebkitTextStrokeColor: "#000000",
            webkitTextStrokeWidth: "1px",
          }}
        >
          Choose where your adventure begins
        </h1>
        <div className="flex flex-row items-center justify-center gap-28">
          <button
            onClick={() => handleMapPick("/assets/map-picker-1.png")}
            className="relative p-2 w-[15.625rem] h-[20.8125rem] bg-[#D9D9D9] opacity-50 hover:opacity-100 flex items-center justify-center"
          >
            <img src="/assets/polygon.svg" alt="" className="absolute z-[2]" />
            <img
              src="/assets/map-picker-1.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </button>
          <button
            onClick={() => handleMapPick("/assets/map-picker-2.png")}
            className="relative p-2 w-[15.625rem] h-[20.8125rem] bg-[#D9D9D9] opacity-50 hover:opacity-100 flex items-center justify-center"
          >
            <img src="/assets/polygon.svg" alt="" className="absolute z-[2]" />
            <img
              src="/assets/map-picker-2.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapPicker;
