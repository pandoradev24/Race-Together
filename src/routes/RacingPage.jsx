import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInterval } from "react-timing-hooks";
import Clock from "../components/Clock";
import Countdown from "../components/Countdown";
import Modal from "../components/common/Modal";
import {
  getCharacter,
  getMap,
  getRacingTime,
  getWager,
} from "../signals/GameSignal";
import { changeMoney } from "../signals/UserSignal";

const cars = [
  {
    name: "Huy",
    car: "/assets/car/huy-car.png",
  },
  {
    name: "Hoang",
    car: "/assets/car/hoang-car.png",
  },
  {
    name: "Son",
    car: "/assets/car/son-car.png",
  },
  {
    name: "Hue",
    car: "/assets/car/hue-car.png",
  },
  {
    name: "Anh",
    car: "/assets/car/anh-car.png",
  },
];

const RacingPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [countdown, setCountdown] = useState(-Infinity);
  const [isCounting, setIsCounting] = useState(false);
  const [seconds, setSeconds] = useState(15);
  const [finishedRank, setFinishedRank] = useState([]);
  const backgroundRef = useRef(null);
  const background2Ref = useRef(null);
  const [showPodium, setShowPodium] = useState(false);
  const [awardModal, setAwardModal] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      setIsCounting(true);
    }
  }, [countdown]);

  if (seconds <= 5) {
    const backgroundRight =
      window.innerWidth - backgroundRef.current.getBoundingClientRect().right;
    backgroundRef.current.style.right = backgroundRight + "px";
    const background2Right =
      window.innerWidth - background2Ref.current.getBoundingClientRect().right;
    background2Ref.current.style.right = background2Right + "px";
  }

  const addRandomRightToCar = () => {
    if (seconds === 0) {
      setCountdown(-Infinity);
      setIsCounting(false);
      pause();
      const ranks = calculateRanks();
      setFinishedRank(ranks);
      const showPodiumTimeout = setTimeout(() => {
        setShowPodium(true);
        clearTimeout(showPodiumTimeout);
      }, 3000);
      return;
    }

    if (seconds > 4 ? (getRacingTime() - seconds) % 2 === 0 : seconds >= 0) {
      const cars = document.querySelectorAll(".car");
      cars.forEach((car, i) => {
        if (seconds <= 4) {
          if (seconds < 2) {
            if (i === calculateRanks()[0].index) {
              car.style.right = window.innerWidth * 0.7 + "px";
              return;
            } else {
              const currentRight = Number(car.style.right.slice(0, -2));
              const getFinishRight = (current) => {
                return (
                  current +
                  Math.floor(
                    (window.innerWidth * 0.55 - current) * Math.random()
                  )
                );
              };
              car.style.right = getFinishRight(currentRight) + "px";
            }
          } else {
            const currentRight = Number(car.style.right.slice(0, -2));
            const getFinishRight = (current) => {
              return (
                current +
                Math.floor((window.innerWidth * 0.55 - current) * Math.random())
              );
            };
            car.style.right = getFinishRight(currentRight) + "px";
          }
        } else {
          const randomRight = Math.floor(
            Math.random() * window.innerWidth * 0.3
          );
          car.style.right = `${randomRight}px`;
        }
      });
    }
  };

  const { start, pause, resume, isPaused } = useInterval(
    addRandomRightToCar,
    isCounting ? 1000 : 3000,
    { startOnMount: false }
  );

  const startCountdown = () => {
    setOpen(false);
    setCountdown(3);
    setSeconds(getRacingTime());
    start();
  };

  const calculateRanks = () => {
    const cars = document.querySelectorAll(".car");
    const finishedRights = [];

    cars.forEach((car, i) => {
      const right = Number(car.style.right.slice(0, -2));
      finishedRights.push({
        index: i,
        right,
      });
    });

    return finishedRights.toSorted((a, b) => b.right - a.right);
  };

  const getCharacterPodium = (rank) => {
    if (cars[finishedRank[rank - 1]?.index]?.name === getCharacter().name) {
      return getCharacter().image;
    }
    return getCharacter(cars[finishedRank[rank - 1].index].name);
  };

  const getAward = () => {
    let check = false;
    const wager = getWager();
    for (let i = 0; i < finishedRank.length; i++) {
      if (
        cars[finishedRank[i]?.index]?.name === wager.carOwner &&
        i + 1 === wager.place
      ) {
        check = true;
        break;
      }
    }
    return check ? wager.amount : -wager.amount;
  };

  const handleClickOkButton = () => {
    changeMoney(getAward());
    navigate("/lobby");
  };

  return (
    <div
      className={clsx(
        "relative w-full h-full font-['Press_Start_2P'] flex flex-col overflow-hidden"
      )}
    >
      <img
        src="/assets/hamburger-icon.svg"
        alt=""
        className="absolute z-[1] h-10 top-10 right-[3.125rem]"
      />
      {countdown <= 0 && countdown > -Infinity && (
        <>
          <div className="absolute top-10 left-[3.4575rem]">
            <Clock
              seconds={seconds}
              isCounting={isCounting}
              setSeconds={setSeconds}
            />
          </div>
        </>
      )}
      <div
        ref={backgroundRef}
        className={clsx(
          "absolute z-0 top-0 w-full h-[30vh] bg-contain bg-repeat-x right-0",
          getMap() === 1
            ? "bg-[url('/assets/track-selection-1.png')]"
            : "bg-[url('/assets/racing-background-2.png')]"
        )}
        style={{
          animation:
            isCounting && seconds > 3 ? "water 10s linear infinite" : "none",
        }}
      />
      <div
        ref={background2Ref}
        className={clsx(
          "absolute z-0 top-0 w-full h-[30vh] bg-contain bg-repeat-x right-full",
          getMap() === 1
            ? "bg-[url('/assets/track-selection-1.png')]"
            : "bg-[url('/assets/racing-background-2.png')]"
        )}
        style={{
          animation:
            isCounting && seconds > 3 ? "water-2 10s linear infinite" : "none",
        }}
      />
      <div className="relative mt-[30vh] w-full h-[70vh] bg-[#b4b4b4] grid grid-flow-row grid-rows-5 gap-y-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="w-full h-full bg-[#282828]" />
        ))}
        <img
          src="/assets/start-line.png"
          alt=""
          className={clsx(
            "absolute h-full object-fill",
            showPodium && "hidden"
          )}
          style={{
            right:
              (isCounting && seconds > 0) || seconds === 0 ? "-100%" : "0%",
            transition: "right 8s linear",
          }}
        />
        <img
          src="/assets/finish-line.png"
          alt=""
          className={clsx(
            "absolute h-full object-fill",
            showPodium && "hidden"
          )}
          style={{
            left: seconds <= 6 ? "0%" : "-50%",
            transition: "left 3s linear",
          }}
        />
        {cars.map((car, i) => (
          <img
            key={i}
            className={clsx(
              "absolute z-[1] w-[13.5rem] h-[9.5625rem] right-6 car",
              showPodium ? "hidden" : ""
            )}
            src={car.car}
            style={{
              top: `${i * 15 - 8}vh`,
              transition:
                seconds >= 0 ? (seconds > 2 ? "right 2s" : "right 1s") : "none",
            }}
          />
        ))}
      </div>
      <Countdown countdown={countdown} setCountdown={setCountdown} />
      <Modal isOpen={open} setIsOpen={setOpen}>
        <div
          onClick={startCountdown}
          className="w-full h-[90vh] flex items-center justify-center text-white text-[2rem] font-['Press_Start_2P']"
        >
          <div className="cursor-pointer">Start</div>
        </div>
      </Modal>
      <div
        className={clsx(
          "absolute z-[2] w-full h-full flex items-center justify-center",
          showPodium ? "" : "hidden"
        )}
      >
        <div className="relative mt-[30vh] w-[37.5rem] h-[16.8125rem]">
          <img
            src="/assets/podium.png"
            alt=""
            className="absolute w-full h-full"
          />
          <div className="absolute w-[10.5rem] -top-[9.5rem] left-[14rem] flex justify-center">
            <img src={getCharacterPodium(1)} alt="" className="h-[11rem] " />
          </div>

          <div className="absolute w-[10rem] -top-[7.5rem] left-[4.5rem] flex justify-center">
            <img src={getCharacterPodium(2)} alt="" className=" h-[11rem] " />
          </div>
          <div className="absolute -top-[7rem] left-[25rem] w-[10rem] flex justify-center">
            <img src={getCharacterPodium(3)} alt="" className="h-[11rem]" />
          </div>
        </div>
        <button
          onClick={() => setAwardModal(true)}
          className="absolute z-10 w-full h-full"
        >
          <div className="relative w-full h-full">
            <p className="absolute bottom-[2.625rem] right-16 text-xl text-white text-center font-normal leading-[3.75rem]">
              tap anywhere to continue
            </p>
          </div>
        </button>
        <Modal isOpen={awardModal} setIsOpen={setAwardModal}>
          <div className="relative mx-auto w-[34.4375rem] h-[25.4375rem] bg-white flex flex-col items-center">
            <h1 className="mt-[9rem] text-[1.875rem] font-['Press_Start_2P'] font-normal">
              {getAward() < 0
                ? `${getAward()
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              !`
                : `+ ${getAward()
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}!`}
            </h1>
            <div className="mt-[2.1875rem] w-full flex justify-center">
              <button
                onClick={handleClickOkButton}
                className="w-[11.25rem] h-[2.9375rem] bg-[#8ABEFB] rounded-[0.75rem] text-[1.25rem] text-white font-['Press_Start_2P'] font-normal"
              >
                ok
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default RacingPage;
