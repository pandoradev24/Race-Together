import React, { useEffect, useState } from "react";

export default function Countdown({ countdown, setCountdown }) {
  useEffect(() => {
    if (countdown === -1) return;

    const interval = setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <p
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl text-red-600 z-10"
      style={{
        display: countdown < 0 ? "none" : "block",
      }}
    >
      {countdown === 0 ? "GO!" : countdown}
    </p>
  );
}
