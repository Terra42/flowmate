import TimeDialInput from "@/elements/TimeDial";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { minutesToSeconds } from "../utils/time";
import IconButton from "@/elements/IconButton";
import Work from "@/assets/svg/Work";
import Footer from "@/components/Footer";

interface CreateSessionProps {
  onSubmit: (goal: string, time: number) => void;
}

const CreateSession: React.FC<CreateSessionProps> = ({ onSubmit }) => {
  const [goal, setGoal] = useState<string>("");
  const [time, setTime] = useState<number>(25);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(goal, minutesToSeconds(time));
    navigate("/flow-session");
  };

  return (
    <div className="h-screen flex flex-col items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col text-center z-10 sm:w-4/5"
      >
        <h2 className="h2 mt-8">Vytvoř si pracovní blok</h2>

        <div className="border-2 border-solid border-accent rounded-xl p-4 mt-8 flex flex-col bg-primary-95 sm:p-12">
          <div className="text-left sm:mb-8">
            <span className="text-2xl text-accent font-semibold mr-4">1.</span>
            <label htmlFor="goal">Na čem chci právě teď pracovat?</label>
            <input
              type="text"
              id="goal"
              placeholder="Např. Navrhnout navigaci"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="input mt-4 text-sm bg-secondary"
            />
            <p
              className={`text-sm text-accent text-start mt-2 ml-2 ${
                goal.length > 0 ? "invisible" : "visible"
              }`}
            >
              Toto pole je povinné
            </p>
          </div>

          <div className="text-start mt-4 flex flex-col sm:items-start sm:mb-6">
            <div>
              <span className="text-2xl text-accent font-semibold mr-4">
                2.
              </span>
              <label>Jak dlouho tomu chci věnovat?</label>
            </div>
            <TimeDialInput
              initialMinutes={25}
              onMinutesChange={setTime}
              minMinutes={0}
              maxMinutes={60}
            />
          </div>

          <div className="self-center sm:self-start">
            <IconButton
              IconComponent={Work}
              title="Začínám teď!"
              type="submit"
              isDisabled={goal.length === 0}
            />
          </div>
        </div>
      </form>
      <div className="w-full mt-12">
          <Footer/>
         </div>
    </div>
  );
};

export default CreateSession;
