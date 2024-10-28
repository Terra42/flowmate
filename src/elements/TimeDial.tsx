import React, { useState, useRef, useEffect, useCallback } from "react";

interface TimeDialInputProps {
  initialMinutes?: number;
  onMinutesChange?: (minutes: number) => void;
  minMinutes?: number;
  maxMinutes?: number;
}

const TimeDialInput: React.FC<TimeDialInputProps> = ({
  initialMinutes = 25,
  onMinutesChange,
  minMinutes = 5,
  maxMinutes = 60,
}) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dialRef = useRef<HTMLDivElement>(null);
  const [minutes, setMinutes] = useState<number>(
    Math.round(initialMinutes / 5) * 5
  );

  const normalizeAngle = (angle: number): number => {
    // Convert the angle to a positive value between 0 and 360
    angle = ((angle % 360) + 360) % 360;
    // Adjust for SVG rotation (-90 degrees)
    angle = (360 - angle + 90) % 360; // Changed here: 360 - angle to reverse direction
    return angle;
  };

  const angleToMinutes = useCallback(
    (angle: number): number => {
      const normalizedAngle = normalizeAngle(angle);
      const rawMinutes = (normalizedAngle / 360) * (maxMinutes - minMinutes) + minMinutes;
      const roundedMinutes = Math.round(rawMinutes / 5) * 5;
      return Math.min(Math.max(roundedMinutes, minMinutes), maxMinutes);
    },
    [minMinutes, maxMinutes]
  );

  const handleDragStart = (event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragMove = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (!isDragging || !dialRef.current) return;

      const rect = dialRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      let clientX, clientY;
      if (event instanceof MouseEvent) {
        clientX = event.clientX;
        clientY = event.clientY;
      } else {
        clientX = event.touches[0].clientX;
        clientY = event.touches[0].clientY;
      }

      const deltaX = clientX - centerX;
      const deltaY = centerY - clientY;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      const newMinutes = angleToMinutes(angle);
      setMinutes(newMinutes);
      onMinutesChange?.(newMinutes);
    },
    [isDragging, angleToMinutes, onMinutesChange]
  );

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => handleDragMove(event);
    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();
      handleDragMove(event);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("touchmove", handleTouchMove, { passive: false });
      document.addEventListener("mouseup", handleDragEnd);
      document.addEventListener("touchend", handleDragEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("mouseup", handleDragEnd);
      document.removeEventListener("touchend", handleDragEnd);
    };
  }, [isDragging, handleDragMove]);

  const circumference = 2 * Math.PI * 44;
  const progressValue = ((minutes - minMinutes) / (maxMinutes - minMinutes)) * circumference;

  return (
    <div className="flex flex-col items-center gap-4 mt-4 mb-8">
      <div
        ref={dialRef}
        className="relative w-32 h-32 rounded-full border-2 border-gray-200 cursor-pointer"
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
      >
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            strokeWidth="8"
            className="stroke-bg-semi"
          />
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            strokeWidth="10"
            strokeDasharray={`${progressValue} ${circumference}`}
            className="stroke-accent"
          />
        </svg>
      </div>
      
      <div className="text-xl font-semibold">
        {minutes} minut
      </div>
    </div>
  );
};

export default TimeDialInput;