import React from "react";
import { Link } from "react-router-dom";
import { user } from "../signals/UserSignal";

const items = [
  {
    id: 1,
    name: "PANDORA PASS",
    price: 119000,
  },
  {
    id: 2,
    name: "LUCKY DRINK",
    price: 49000,
  },
  {
    id: 3,
    name: "CREDIT PACK",
    price: 499000,
  },
];

const Shop = () => {
  const clickSound = new Audio("/audio/click.mp3");
  const startClickSound = () => {
    clickSound.play();
  };
  return (
    <div className="relative w-full h-full bg-[#2B2B2B] flex items-center justify-center font-['Press_Start_2P']">
      <div className="absolute z-[1] top-10 right-[3.125rem] flex flex-row">
        <span className="text-white text-[1.875rem] font-normal">
          $:{user.value.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
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
      <div className="flex flex-row gap-[1.2rem]">
        {items.map((item) => (
          <ShopCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;

const ShopCard = ({ item }) => {
  return (
    <div className="w-[16.875rem] h-[25rem] bg-[#6B70F2] rounded-[1.5625rem] px-8 pt-[1.625rem]">
      <h2 className="text-white text-[0.875rem] text-center font-normal leading-[3.75rem]">
        {item.name}
      </h2>
      <button className="mt-[12.5rem] w-full h-[3.8125rem] bg-white rounded-[0.75rem] text-[#000] text-[0.875rem]">
        <span className="underline">đ</span>
        {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
      </button>
    </div>
  );
};
