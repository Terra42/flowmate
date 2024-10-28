import React, { useState, useEffect, useRef, useCallback } from 'react';
import IconButton from "../elements/IconButton";
import Hide from "../assets/svg/Hide";
import Pause from "../assets/svg/Pause";
import Start from "../assets/svg/Start";
import Clock from "../assets/svg/Clock";

interface TimerProps {
  time: number;
  start: boolean;
  onTimerEnd?: () => void;
  onTimerPaused?: () => void;
  onTimerStart?: () => void;
}

const Timer: React.FC<TimerProps> = ({ time, start, onTimerEnd, onTimerPaused, onTimerStart }) => {
  const [timeInSeconds, setTimeInSeconds] = useState<number>(time);
  const [isTimerVisible, setIsTimerVisible] = useState<boolean>(true);
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = useCallback(() => {
    if (intervalRef.current) return; 
    intervalRef.current = setInterval(() => {
      setTimeInSeconds((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    setIsPaused(false);
  }, []);

  const pauseTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsPaused(true);
  }, []);

  useEffect(() => {
    if (start) {
      startTimer();
    } else {
      pauseTimer();
    }

    return () => {
      pauseTimer(); 
    };
  }, [start, startTimer, pauseTimer]);

  useEffect(() => {
    if (timeInSeconds === 0 && onTimerEnd) {
      onTimerEnd();
    }
  }, [timeInSeconds, onTimerEnd]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return {
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(secs).padStart(2, "0"),
    };
  };

  const handleStartClick = () => {
    setIsPaused(false);
    startTimer();
    if (onTimerStart) {
      onTimerStart();
    }
  };

  const handlePauseClick = () => {
    setIsPaused(true);
    pauseTimer();
    if (onTimerPaused) {
      onTimerPaused();
    }
  };

  const handleShowClick = () => {
    setIsTimerVisible(true);
  };

  const { hours, minutes, seconds } = formatTime(timeInSeconds);

  return (
    <>
      {isTimerVisible ? (
        <div className="bg-bg-semi rounded-lg px-4 py-2 absolute bottom-16 right-0 w-full flex justify-between items-center">
            <div>
                <IconButton IconComponent={Hide} onClick={() => setIsTimerVisible(false)} />
                {isPaused ? (
                <IconButton IconComponent={Start} onClick={handleStartClick} />
                ) : (
                <IconButton IconComponent={Pause} onClick={handlePauseClick} />
                )}
            </div>
            <div className="text-2xl font-mono">
                <span className="inline-block w-10 text-center">{hours}</span>:
                <span className="inline-block w-10 text-center">{minutes}</span>:
                <span className="inline-block w-10 text-center">{seconds}</span>
            </div>
          </div>
      ) : (
        <div className="bg-bg-semi rounded-lg px-4 py-2 absolute bottom-8 left-0">
            <IconButton IconComponent={Clock} onClick={handleShowClick} />
        </div>
      )}
    </>
  );
};

export default Timer;