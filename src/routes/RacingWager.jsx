import React from "react";
import { Link } from "react-router-dom";
import { user } from "../signals/UserSignal";
import Modal from "../components/common/Modal";
import { Combobox, ComboboxInput } from "@headlessui/react";

const options = [10000, 20000, 50000, 100000, 200000];

const RacingWager = () => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [wagerDetails, setWagerDetails] = React.useState({
    carId: 0,
    place: 0,
    amount: 0,
  });
  const [query, setQuery] = React.useState("");

  const filteredAmount =
    query === ""
      ? options
      : options.filter((option) => {
          return option.includes(query);
        });

  const handleSelectCar = (carId, place) => {
    setWagerDetails({
      ...wagerDetails,
      carId,
      place,
    });
    setOpenDialog(true);
  };
  return (
    <div className="relative w-full h-full bg-[#2B2B2B] flex items-center justify-center font-['Press_Start_2P']">
      <div className="absolute z-[1] top-10 right-[3.125rem] flex flex-row">
        <span className="text-white text-[1.875rem] font-normal">
          $:{user.value.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </span>
        <img src="/assets/hamburger-icon.svg" alt="" className="ml-10 h-10" />
      </div>
      <Link
        to="/map-picker"
        className="absolute z-[1] bottom-10 left-[3.125rem] text-white text-[2.1875rem] font-normal"
      >
        {`<<back`}
      </Link>
      <div>
        <h1
          className="mb-20 text-[2.1875rem] text-center text-white font-normal leading-[5rem] uppercase drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]"
          style={{
            WebkitTextStrokeColor: "#000000",
            webkitTextStrokeWidth: "1px",
          }}
        >
          You bet
        </h1>
        <div className="flex flex-row gap-[6.5rem]">
          <div className="h-[28.8125rem] grid grid-flow-col grid-rows-5 text-[2.1825rem] text-[#514A4A] font-normal">
            <div className="flex flex-row items-center gap-[3.1825rem]">
              <button
                onClick={() => handleSelectCar("blue", 1)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                1
              </button>
              <button
                onClick={() => handleSelectCar("blue", 2)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                2
              </button>
              <button
                onClick={() => handleSelectCar("blue", 3)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                3
              </button>
            </div>
            <div className="flex flex-row items-center gap-[3.1825rem]">
              <button
                onClick={() => handleSelectCar("yellow", 1)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                1
              </button>
              <button
                onClick={() => handleSelectCar("yellow", 2)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                2
              </button>
              <button
                onClick={() => handleSelectCar("yellow", 3)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                3
              </button>
            </div>
            <div className="flex flex-row items-center gap-[3.1825rem]">
              <button
                onClick={() => handleSelectCar("red", 1)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                1
              </button>
              <button
                onClick={() => handleSelectCar("red", 2)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                2
              </button>
              <button
                onClick={() => handleSelectCar("red", 3)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                3
              </button>
            </div>
            <div className="flex flex-row items-center gap-[3.1825rem]">
              <button
                onClick={() => handleSelectCar("orange", 1)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                1
              </button>
              <button
                onClick={() => handleSelectCar("orange", 2)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                2
              </button>
              <button
                onClick={() => handleSelectCar("orange", 3)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                3
              </button>
            </div>
            <div className="flex flex-row items-center gap-[3.1825rem]">
              <button
                onClick={() => handleSelectCar("grey", 1)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                1
              </button>
              <button
                onClick={() => handleSelectCar("grey", 2)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                2
              </button>
              <button
                onClick={() => handleSelectCar("grey", 3)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                3
              </button>
            </div>
          </div>
          <img src="/assets/cars.svg" alt="" className="h-[28.8125rem]" />
        </div>
      </div>
      <Modal isOpen={openDialog} setIsOpen={setOpenDialog}>
        <div className="relative mx-auto w-[34.4375rem] h-[25.4375rem] bg-white flex flex-col items-center">
          <button className="absolute z-[1] top-2 right-4 text-black text-[1.875rem] font-['Press_Start_2P'] font-normal">
            x
          </button>
          <h1 className="mt-[2.6875rem] text-[1.875rem] font-['Press_Start_2P'] font-normal">
            Chon so tien
          </h1>
          <div className="px-[7.5rem] w-full">
            <Combobox
              value={wagerDetails.amount}
              onChange={(e) =>
                setWagerDetails({ ...wagerDetails, amount: e.target.value })
              }
            >
              <ComboboxInput
                aria-label="Wager"
                displayValue={wagerDetails.amount}
                onChange={(e) => setQuery(e.target.value)}
              />
            </Combobox>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RacingWager;

const ComboBox = () => {
  const [selected, setSelected] = React.useState(null);
  return (
    <Combobox value={selected} onChange={setSelected}>
      <Combobox.Button className="w-full h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100">
        {selected || "Chon so tien"}
      </Combobox.Button>
      <Combobox.Options className="w-full">
        {options.map((option) => (
          <Combobox.Option key={option} value={option}>
            {option}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
};
