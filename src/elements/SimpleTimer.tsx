import React, { useState, useEffect, useRef, useCallback } from 'react';

interface SimpleTimerProps {
  time: number;
  start: boolean;
  onTimerEnd?: () => void; 
}

const SimpleTimer: React.FC<SimpleTimerProps> = ({ time, start, onTimerEnd }) => {
  const [timeInSeconds, setTimeInSeconds] = useState<number>(time);
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
  }, []);

  const pauseTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
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


  const { minutes, seconds } = formatTime(timeInSeconds);

  return (
        <div>
            <div className="text-4xl font-mono flex justify-center items-center">
                <span className="inline-block w-16 text-center">{minutes}</span>:
                <span className="inline-block w-16 text-center">{seconds}</span>
            </div>
          </div>
  );
};

export default SimpleTimer;
