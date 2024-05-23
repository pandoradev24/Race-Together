import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../components/common/Modal";
import { setWager } from "../signals/GameSignal";
import { getMoney, user } from "../signals/UserSignal";

const defaultOption = {
  carId: 0,
  place: 0,
  amount: 0,
};
const options = [10000, 20000, 50000, 100000, 200000];

const RacingWager = () => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [wagerDetails, setWagerDetails] = React.useState(defaultOption);
  const [query, setQuery] = React.useState("");
  const [error, setError] = React.useState("");

  const filteredAmount =
    query === ""
      ? options
      : options.filter((option) => {
          return option.toString().includes(query.toString());
        });

  const handleCloseModal = () => {
    setOpenDialog(false);
    setError("");
    setWagerDetails(defaultOption);
  };

  const handleSelectCar = (carOwner, place) => {
    setWagerDetails({
      ...wagerDetails,
      carOwner,
      place,
    });
    setOpenDialog(true);
  };

  const handleClickOkButton = () => {
    if (wagerDetails.amount > user.value.money) {
      setError("Not enough money!");
    } else {
      setError("");
      setWager(wagerDetails);
      handleCloseModal();
      navigate("/track-selection");
    }
  };

  return (
    <div className="relative w-full h-full bg-[#2B2B2B] flex items-center justify-center font-['Press_Start_2P']">
      <div className="absolute z-[1] top-10 right-[3.125rem] flex flex-row">
        <span className="text-white text-[1.875rem] font-normal">
          $:
          {getMoney()
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
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
            WebkitTextStrokeWidth: "1px",
          }}
        >
          You bet
        </h1>
        <div className="flex flex-row gap-[6.5rem]">
          <div className="h-[28.8125rem] grid grid-flow-col grid-rows-5 text-[2.1825rem] text-[#514A4A] font-normal">
            <div className="flex flex-row items-center gap-[3.1825rem]">
              <button
                onClick={() => handleSelectCar("Huy", 1)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                1
              </button>
              <button
                onClick={() => handleSelectCar("Huy", 2)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                2
              </button>
              <button
                onClick={() => handleSelectCar("Huy", 3)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                3
              </button>
            </div>
            <div className="flex flex-row items-center gap-[3.1825rem]">
              <button
                onClick={() => handleSelectCar("Hoang", 1)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                1
              </button>
              <button
                onClick={() => handleSelectCar("Hoang", 2)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                2
              </button>
              <button
                onClick={() => handleSelectCar("Hoang", 3)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                3
              </button>
            </div>
            <div className="flex flex-row items-center gap-[3.1825rem]">
              <button
                onClick={() => handleSelectCar("Son", 1)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                1
              </button>
              <button
                onClick={() => handleSelectCar("Son", 2)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                2
              </button>
              <button
                onClick={() => handleSelectCar("Son", 3)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                3
              </button>
            </div>
            <div className="flex flex-row items-center gap-[3.1825rem]">
              <button
                onClick={() => handleSelectCar("Hue", 1)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                1
              </button>
              <button
                onClick={() => handleSelectCar("Hue", 2)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                2
              </button>
              <button
                onClick={() => handleSelectCar("Hue", 3)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                3
              </button>
            </div>
            <div className="flex flex-row items-center gap-[3.1825rem]">
              <button
                onClick={() => handleSelectCar("Anh", 1)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                1
              </button>
              <button
                onClick={() => handleSelectCar("Anh", 2)}
                className="w-[8.5rem] h-[3rem] bg-[#D9D9D9] opacity-80 hover:opacity-100"
              >
                2
              </button>
              <button
                onClick={() => handleSelectCar("Anh", 3)}
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
          <button
            onClick={handleCloseModal}
            className="absolute z-[1] top-2 right-4 text-black text-[1.875rem] font-['Press_Start_2P'] font-normal"
          >
            x
          </button>
          <h1 className="mt-[2.6875rem] text-[1.875rem] font-['Press_Start_2P'] font-normal">
            Chon so tien
          </h1>
          <div className="mt-[2.6875rem] w-full flex justify-center">
            <Listbox
              value={wagerDetails.amount}
              onChange={(value) =>
                setWagerDetails({ ...wagerDetails, amount: value })
              }
            >
              <ListboxButton
                className={clsx(
                  "relative block px-10 w-[17.5rem] h-[3.75rem] bg-white rounded-[0.5rem] border border-solid border-[#333/10] shadow-xl text-[#333] text-base font-[Montserrat] leading-[1.21875] focus:outline-none",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                  "flex items-center justify-start"
                )}
              >
                {wagerDetails.amount
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                <ChevronDownIcon
                  className="group pointer-events-none absolute right-2.5 size-6 fill-[#333]"
                  aria-hidden="true"
                />
              </ListboxButton>
              <Transition
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <ListboxOptions
                  anchor="bottom"
                  className="w-[var(--button-width)] rounded-[0.5rem] border border-solid border-[#333/10] bg-white shadow-xl p-2 [--anchor-gap:var(--spacing-1)] focus:outline-none"
                >
                  {filteredAmount.map((option, index) => (
                    <ListboxOption
                      key={index}
                      value={option}
                      className="group flex items-center gap-2 rounded-lg my-1 py-2 px-8 select-none hover:cursor-pointer hover:bg-[#333]/10"
                    >
                      <div className="text-base text-[#333] font-[Montserrat]">
                        {option
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      </div>
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Transition>
            </Listbox>
          </div>
          <div
            className={clsx(
              error != "" ? "mt-8 w-full flex justify-center" : "hidden"
            )}
          >
            <span className="text-red-500 font-['Press_Start_2P']">
              {error}
            </span>
          </div>
          <div className="absolute bottom-[3.3125rem] w-full flex justify-center">
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
  );
};

export default RacingWager;
