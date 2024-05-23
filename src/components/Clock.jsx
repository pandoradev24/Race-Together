import React, { useEffect } from "react";

const convertSecondsToTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${
    remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
  }`;
};

export default function Clock({ seconds, isCounting, setSeconds }) {
  useEffect(() => {
    if (!isCounting) return;
    if (seconds <= 0) return;

    const interval = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isCounting, seconds]);

  return (
    <div className="relative z-10 text-[2.1875rem] text-white">
      <p>{convertSecondsToTime(seconds)}</p>
    </div>
  );
}
