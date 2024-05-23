import clsx from "clsx";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getMap, setRaceTrack } from "../signals/GameSignal";

const TrackSelection = () => {
  const navigate = useNavigate();
  const handleSelectTrack = (selectedTrack) => {
    setRaceTrack(selectedTrack);
    navigate("/racing");
  };
  return (
    <div
      className={clsx(
        "relative w-full h-full font-['Press_Start_2P'] flex flex-col"
      )}
    >
      <img
        src="/assets/hamburger-icon.svg"
        alt=""
        className="absolute z-[1] h-10 top-10 right-[3.125rem]"
      />
      <div
        className={clsx(
          "w-full h-[calc(100vh-25rem)] bg-bottom bg-cover bg-repeat-x animate-ltr-linear-infinite",
          getMap() === 1
            ? "bg-[url('/assets/track-selection-1.png')]"
            : "bg-[url('/assets/track-selection-2.png')]"
        )}
      />
      <div className="w-full h-[25rem] bg-[#bdbdbd] grid grid-flow-col grid-rows-3 gap-y-1 text-white text-[2.1875rem] leading-[3.75rem]">
        <div className="relative px-[5%] bg-[#282828] flex items-center justify-end">
          <button
            onClick={() => handleSelectTrack("short")}
            className="w-[17.5rem] text-start opacity-80 hover:opacity-100"
          >{`>>Short`}</button>
        </div>
        <div
          onClick={() => handleSelectTrack("medium")}
          className="relative px-[5%] bg-[#282828] flex items-center justify-end"
        >
          <button className="w-[17.5rem] text-start opacity-80 hover:opacity-100">{`>>Medium`}</button>
        </div>
        <div
          onClick={() => handleSelectTrack("long")}
          className="relative px-[5%] bg-[#282828] flex items-center justify-end"
        >
          <button className="w-[17.5rem] text-start opacity-80 hover:opacity-100">{`>>Long`}</button>
        </div>
      </div>
      <Link
        to="/racing-wager"
        className="absolute z-[1] bottom-10 left-[3.125rem] text-white text-[2.1875rem] font-normal"
      >
        {`<<back`}
      </Link>
    </div>
  );
};

export default TrackSelection;
