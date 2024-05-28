import { Howl } from "howler";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const usePlaySound = (soundFile, duration, volume = 1) => {
  const soundRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const sound = new Howl({
      src: [soundFile],
      loop: true,
      volume: volume,
    });
    soundRef.current = sound;
    return () => {
      sound.stop();
    };
  }, [soundFile, volume]);

  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.stop();
      }
    };
  }, [location]);

  const play = () => {
    soundRef.current.play();
    const fadeOutTime = 1000;
    const fadeOutVolume = 0;
    setTimeout(() => {
      soundRef.current.fade(
        soundRef.current.volume(),
        fadeOutVolume,
        fadeOutTime
      );
    }, duration - fadeOutTime);
    setTimeout(() => {
      soundRef.current.stop();
    }, duration);
  };

  return play;
};

export default usePlaySound;