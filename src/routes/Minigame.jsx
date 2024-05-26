import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Wheel } from "react-custom-roulette";
import { Link } from "react-router-dom";
import Modal from "../components/common/Modal";
import { changeMoney, getMoney } from "../signals/UserSignal";

const buttonMotion = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgba(255,255,255)",
    boxShadow: "0px 0px 8px rgba(255,255,255)",
    transition: {
      yoyo: Infinity,
      duration: 0.3,
    },
  },
};

const containerMotion = {
  hide: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      when: "beforeChildren",
    },
  },
};

const Minigame = () => {
  const data = [
    {
      option: 100000,
      style: {
        backgroundColor: "#62c050",
        textColor: "white",
      },
    },
    {
      option: 1000,
      style: { backgroundColor: "#699ee5", textColor: "white" },
    },
    {
      option: 20000,
      style: { backgroundColor: "#fb8e42", textColor: "white" },
    },
    {
      option: 2000,
      style: { backgroundColor: "#e83d45", textColor: "white" },
    },
    {
      option: 50000,
      style: { backgroundColor: "#62c050", textColor: "white" },
    },
    {
      option: 5000,
      style: { backgroundColor: "#699ee5", textColor: "white" },
    },
    {
      option: 30000,
      style: { backgroundColor: "#fb8e42", textColor: "white" },
    },
    {
      option: 10000,
      style: { backgroundColor: "#e83d45", textColor: "white" },
    },
  ];

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [showPrize, setShowPrize] = useState(0);
  const [modalPrize, setModalPrize] = useState(false);
  const [ableToSpin, setAbleToSpin] = useState(true);

  const handleSpinClick = () => {
    startClickSound();
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const handleSpinStop = () => {
    setMustSpin(false);
    setModalPrize(true);
    setShowPrize(data[prizeNumber].option);
    localStorage.setItem("spinTime", new Date().getTime());
    changeMoney(data[prizeNumber].option);
  };

  const handleClickOkButton = () => {
    setModalPrize(false);
  };

  useEffect(() => {
    const spinTime = localStorage.getItem("spinTime");
    if (spinTime) {
      const currentTime = new Date().getTime();
      const diff = currentTime - spinTime;
      if (diff < 43200) {
        setAbleToSpin(false);
      } else {
        setAbleToSpin(true);
      }
    }
  }, [showPrize]);

  const clickSound = new Audio("/audio/click.mp3");
  const startClickSound = () => {
    clickSound.play();
  };
  return (
    <motion.div
      className="relative w-full h-full bg-[#2B2B2B] flex flex-col items-center justify-center font-['Press_Start_2P']"
      variants={containerMotion}
      initial="hide"
      animate="visible"
    >
      <div className="absolute z-[1] top-10 right-[3.125rem] flex flex-row">
        <span className="text-white text-[1.875rem] font-normal">
          $:
          {getMoney()
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </span>
        <img
          src="/assets/hamburger-icon.svg"
          alt=""
          className="ml-10 h-10 cursor-pointer"
        />
      </div>
      <Link
        to="/lobby"
        onClick={startClickSound}
        className="absolute z-[1] bottom-10 left-[3.125rem] text-white text-[2.1875rem] font-normal"
      >
        {`<<back`}
      </Link>
      <h1
        className="mb-20 text-[2.1875rem] text-center text-white font-normal leading-[5rem] uppercase drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]"
        style={{
          WebkitTextStrokeColor: "#000000",
          WebkitTextStrokeWidth: "1px",
        }}
      >
        Lucky Wheel
      </h1>
      <div className="flex flex-col items-center justify-center p-4 overflow-hidden">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onStopSpinning={handleSpinStop}
          outerBorderColor="#4E5452"
          outerBorderWidth={3}
          innerBorderColor="#4E5452"
          innerBorderWidth={3}
          radiusLineColor="#4E5452"
        />

        <motion.button
          variants={buttonMotion}
          whileHover="hover"
          className={clsx(
            "mt-4 py-3 px-6 bg-white  rounded-[0.75rem] text-black",
            ableToSpin ? "block" : "hidden"
          )}
          onClick={handleSpinClick}
        >
          Spin
        </motion.button>

        <div
          className={clsx(
            "mt-8 text-white text-xl font-normal",
            ableToSpin ? "hidden" : "block"
          )}
        >
          You can only play once every 12 hours
        </div>
      </div>

      <Modal isOpen={modalPrize} setIsOpen={setModalPrize}>
        <div className="relative mx-auto w-[34.4375rem] h-[25.4375rem] bg-white flex flex-col items-center">
          <h1 className="mt-[9rem] text-[1.875rem] font-['Press_Start_2P'] font-normal">
            +{showPrize.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}!
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
    </motion.div>
  );
};

export default Minigame;
