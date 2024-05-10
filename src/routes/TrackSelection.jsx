import clsx from "clsx";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { game } from "../signals/GameSignal";

const TrackSelection = () => {
  const navigate = useNavigate();
  const handleSelectTrack = (selectedTrack) => {
    game.value = {
      ...game.value,
      raceTrack: selectedTrack,
    };
  };
  return (
    <div
      className={clsx(
        "relative w-full h-full bg-bottom bg-cover animate-ltr-linear-infinite font-['Press_Start_2P']",
        game.value.map === 1
          ? "bg-[url('/assets/track-selection-1.png')]"
          : "bg-[url('/assets/track-selection-2.png')]"
      )}
    >
      <div className="absolute bottom-[2.8125rem] right-[4.8125rem] flex flex-col gap-[6vh] text-white text-[2.1875rem] leading-[3.75rem]">
        <button className="">{`>>Short`}</button>
        <button className="">{`>>Medium`}</button>
        <button className="">{`>>Long`}</button>
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
