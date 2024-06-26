import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const clickSound = new Audio("/audio/click.mp3");
  const startClickSound = () => {
    clickSound.play();
  };

  const handleOnclick = () => {
    startClickSound();
    navigate("/login");
  };
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <img
        src="/assets/homepage-background.png"
        alt="homepage background"
        className="absolute z-0 top-0 bottom-0 left-0 right-0 w-full h-full object-fill"
      />
      <img
        src="/assets/blue-cloud.svg"
        alt="pink cloud"
        className="absolute z-[1] top-0 left-0 right-0 w-full -translate-y-[25%]"
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
      <img
        src="/assets/teen-warning.png"
        alt=""
        className="absolute z-[1] bottom-[15%] left-[2.5%]"
      />
      <div className="absolute top-4 xl:top-12 z-[2] mx-auto w-max">
        <div className="mx-auto w-max text-center text-[3.75rem] text-white font-['Press_Start_2P'] font-normal">
          Race Together
        </div>
        <span className="absolute text-[1.25rem] text-white font-[Lato] font-light -bottom-[12.5%] right-[10%]">
          Pandora Dev
        </span>
      </div>
      <div className="absolute z-[2] w-max h-max flex flex-col items-center text-white text-center font-[Lato]">
        <div
          className="capitalize w-[47.6875rem] text-[4.375rem] font-bold leading-[4.375rem]"
          style={{
            WebkitTextStrokeColor: "#2A6FAF",
            WebkitTextStrokeWidth: "3px",
          }}
        >
          may this journey lead us starward
        </div>
        <div
          className="my-4 text-[#F9F9FF] text-[1.875rem] font-[Lato] font-bold"
          style={{
            WebkitTextStrokeColor: "#2A6FAF",
            WebkitTextStrokeWidth: "1px",
          }}
        >
          Bet on Speed, Win with Precision
        </div>
        <button
          onClick={handleOnclick}
          className="w-[25rem] h-[4rem] bg-[#E6E7F2] hover:bg-[#2192B5] rounded-full shadow-[inset_5px_5px_4px_rgba(0,0,0,0.25)] text-[#2B2445] hover:text-white hover:-translate-y-[2px] active:translate-y-0 transition-all duration-300 ease-in-out"
        >
          <span className=" text-[1.75rem] font-[Lato] font-bold">Start</span>
        </button>
      </div>
    </div>
  );
};

export default Homepage;
