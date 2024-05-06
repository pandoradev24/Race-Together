import React from "react";
import { Link } from "react-router-dom";

const LobbyPage = () => {
  return (
    <div className="relative px-[10%] w-screen h-screen">
      <img
        src="/assets/lobby-background.png"
        alt=""
        className="absolute w-full h-full top-0 bottom-0 left-0 right-0"
      />
      <div></div>
      <div className="flex flex-row">
        <Link to="" className="relative z-[1]">
          <img
            src="/assets/character/son-1.png"
            alt=""
            className="w-[10rem] aspect-[51/62]"
          />
        </Link>
      </div>
    </div>
  );
};

export default LobbyPage;
