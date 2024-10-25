import TimeDialInput from "@/elements/TimeDial";
import { motivation } from "@/data/motivation";
import { useEffect, useState } from "react";
import Button from "@/elements/Button";
import SimpleTimer from "@/elements/SimpleTimer";
import { minutesToSeconds } from "../utils/time";
import { useNavigate } from "react-router-dom";
import IconButton from "@/elements/IconButton";
import Rest from "@/assets/svg/Rest";

const PauseModal = () => {
  const [currentMotivation, setCurrentMotivation] = useState(motivation[0]);
  const [time, setTime] = useState<number>(5);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [startTimer, setStartTimer] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const navigate = useNavigate();

  const getRandomMotivation = () => {
    const randomIndex = Math.floor(Math.random() * motivation.length);
    setCurrentMotivation(motivation[randomIndex]);
  };

  const handleTimerEnd = () => {
    setShowOptions(true);
  };

  useEffect(() => {
    getRandomMotivation();
  }, []);

  return (
    <div className="bg-bg-semi mt-4 p-8 rounded-xl text-center">
      {showOptions ? (
        <div className="flex flex-col gap-4">
          <h3 className="text-xl mb-4">Chceš pokračovat v práci?</h3>
          <Button
            title="Ano, chci nový blok"
            onClick={() => navigate("/create-session")}
          />
          <Button title="Ne, končím!" onClick={() => navigate("/offboarding")} isReversed={true}/>
        </div>
      ) : (
        <>
          <h2 className="h2 mb-4">{currentMotivation}</h2>
          <p>Je na čase dát si pauzu.</p>
          {isTimerRunning ? (
            <div className="mt-8 border-2 border-accent p-4 rounded-xl bg-primary-60">
              <SimpleTimer
                time={minutesToSeconds(time)}
                start={startTimer}
                onTimerEnd={handleTimerEnd}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <TimeDialInput
                initialMinutes={5}
                onMinutesChange={setTime}
                minMinutes={0}
                maxMinutes={40}
              />
              <IconButton
                IconComponent={Rest}
                title="Odpočívám"
                onClick={() => {
                  setStartTimer(true);
                  setIsTimerRunning(true);
                }}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PauseModal;
