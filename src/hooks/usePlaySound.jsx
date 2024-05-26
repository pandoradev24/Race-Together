import { Howl } from "howler";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const usePlaySound = (soundFile, duration) => {
  const soundRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const sound = new Howl({
      src: [soundFile],
      loop: true,
    });

    soundRef.current = sound;

    return () => {
      sound.stop();
    };
  }, [soundFile]);

  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.stop();
      }
    };
  }, [location]);

  const play = () => {
    soundRef.current.play();

    const fadeOutTime = 1000; // Thời gian giảm âm lượng (0.5 giây)
    const fadeOutVolume = 0; // Âm lượng cuối cùng sau khi giảm

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
