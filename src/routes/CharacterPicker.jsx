import clsx from "clsx";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "../components/common/Carousel";
import { game } from "../signals/GameSignal";

const characterList = [
  {
    id: "hoang-1",
    name: "Hoang",
    image: "/assets/character/hoang-1.png",
  },
  {
    id: "son-1",
    name: "Son",
    image: "/assets/character/son-1.png",
  },
  {
    id: "hue-1",
    name: "Hue",
    image: "/assets/character/hue-1.png",
  },
  {
    id: "huy-1",
    name: "Huy",
    image: "/assets/character/huy-1.png",
  },
  {
    id: "anh-1",
    name: "Anh",
    image: "/assets/character/anh-1.png",
  },
  {
    id: "hoang-2",
    name: "Hoang",
    image: "/assets/character/hoang-2.png",
  },
  {
    id: "son-2",
    name: "Son",
    image: "/assets/character/son-2.png",
  },
  {
    id: "hue-2",
    name: "Hue",
    image: "/assets/character/hue-2.png",
  },
  {
    id: "huy-2",
    name: "Huy",
    image: "/assets/character/huy-2.png",
  },
  {
    id: "anh-2",
    name: "Anh",
    image: "/assets/character/anh-2.png",
  },
  {
    id: "hoang-3",
    name: "Hoang",
    image: "/assets/character/hoang-3.png",
  },
  {
    id: "son-3",
    name: "Son",
    image: "/assets/character/son-3.png",
  },
  {
    id: "hue-3",
    name: "Hue",
    image: "/assets/character/hue-3.png",
  },
  {
    id: "huy-3",
    name: "Huy",
    image: "/assets/character/huy-3.png",
  },
  {
    id: "anh-3",
    name: "Anh",
    image: "/assets/character/anh-3.png",
  },
];

const CharacterPicker = () => {
  const navigate = useNavigate();
  const [selectedCharacter, setSelectedCharacter] = React.useState({
    id: "",
    name: "",
    image: "",
  });

  const handleOkButtonClick = () => {
    startClickSound();
    if (selectedCharacter.id !== "") {
      game.value = {
        ...game.value,
        character: selectedCharacter,
      };
      navigate("/map-picker");
    }
  };

  const clickSound = new Audio("/audio/click.mp3");
  const startClickSound = () => {
    clickSound.play();
  };
  return (
    <div className="relative w-full h-full bg-[#2B2B2B] flex items-center justify-center">
      <img
        src="/assets/hamburger-icon.svg"
        alt=""
        className="absolute z-[1] h-10 top-10 right-[3.125rem] cursor-pointer"
      />
      <Link
        to="/lobby"
        onClick={startClickSound}
        className="absolute z-[1] bottom-10 left-[3.125rem] text-white text-[2.1875rem] font-['Press_Start_2P'] font-normal"
      >{`<<back`}</Link>
      <div className="w-full xl:w-[85%] 2xl:w-[70%]">
        <h1 className="mb-20 text-[2.1875rem] text-center text-white font-['Press_Start_2P'] font-normal leading-[5rem]">
          Select your characters
        </h1>
        <Carousel itemsPerSlide={1}>
          <div className="w-full flex flex-row">
            {characterList.slice(0, 5).map((item, i) => (
              <button
                key={item.id}
                className={clsx(
                  "flex flex-col items-center justify-center gap-4 mx-auto",
                  selectedCharacter.id !== "" &&
                    selectedCharacter.id !== item.id
                    ? "opacity-50"
                    : "opacity-100"
                )}
                onClick={() => setSelectedCharacter(item)}
              >
                <img src={item.image} alt="" className={clsx("h-[14rem]")} />
                <span className="text-white text-[1.25rem] text-center font-['Press_Start_2P']">
                  {item.name}
                </span>
              </button>
            ))}
          </div>
          <div className="w-full flex flex-row">
            {characterList.slice(5, 10).map((item, i) => (
              <button
                key={item.id}
                className={clsx(
                  "flex flex-col items-center justify-center gap-4 mx-auto",
                  selectedCharacter.id !== "" &&
                    selectedCharacter.id !== item.id
                    ? "opacity-50"
                    : "opacity-100"
                )}
                onClick={() => setSelectedCharacter(item)}
              >
                <img src={item.image} alt="" className={clsx("h-[14rem]")} />
                <span className="text-white text-[1.25rem] text-center font-['Press_Start_2P']">
                  {item.name}
                </span>
              </button>
            ))}
          </div>
          <div className="w-full flex flex-row">
            {characterList.slice(10, 15).map((item, i) => (
              <button
                key={item.id}
                className={clsx(
                  "flex flex-col items-center justify-center gap-4 mx-auto",
                  selectedCharacter.id !== "" &&
                    selectedCharacter.id !== item.id
                    ? "opacity-50"
                    : "opacity-100"
                )}
                onClick={() => setSelectedCharacter(item)}
              >
                <img src={item.image} alt="" className={clsx("h-[14rem]")} />
                <span className="text-white text-[1.25rem] text-center font-['Press_Start_2P']">
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </Carousel>
        <div className="mt-12 w-full flex items-center justify-center">
          <button
            onClick={() => handleOkButtonClick()}
            className="w-[9.9375rem] h-[2.875rem] bg-[#D9D9D9] hover:bg-[#ffffff] rounded-[0.75rem] text-[#000] text-[1.5625rem] font-['Press_Start_2P'] font-normal shadow-sm active:translate-y-1 transition-all duration-200 ease-in-out"
          >
            ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterPicker;
