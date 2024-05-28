import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const Root = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const backgroundMusicRef = React.useRef(null);
  const currentTimeRef = React.useRef(0);

  React.useEffect(() => {
    if (!backgroundMusicRef.current) {
      backgroundMusicRef.current = new Audio("/audio/background-music.mp3");
      backgroundMusicRef.current.loop = true;
    }

    const backgroundMusic = backgroundMusicRef.current;

    if (!["/", "/login", "/register", "/recovery"].includes(pathname)) {
      backgroundMusic.currentTime = currentTimeRef.current;
      if (backgroundMusic.paused) {
        backgroundMusic.play();
        backgroundMusic.volume = 0.5;
      }
    } else {
      backgroundMusic.pause();
      currentTimeRef.current = backgroundMusic.currentTime;
    }

    return () => {
      currentTimeRef.current = backgroundMusic.currentTime;
    };
  }, [pathname]);

  return (
    <main className="mx-auto w-screen max-w-[120rem] h-screen">
      <Outlet />
    </main>
  );
};

export default Root;
