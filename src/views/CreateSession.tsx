import TimeDialInput from '@/elements/TimeDial';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { minutesToSeconds } from '../utils/time';
import IconButton from '@/elements/IconButton';
import Work from '@/assets/svg/Work';

interface CreateSessionProps {
  onSubmit: (goal: string, time: number) => void;
}

const CreateSession: React.FC<CreateSessionProps> = ({ onSubmit }) => {
  const [goal, setGoal] = useState<string>(''); 
  const [time, setTime] = useState<number>(25);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(goal, minutesToSeconds(time));
    navigate('/flow-session');
  };

  return (
    <div className="h-full p-4 flex flex-col items-center">
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-4/5">
      <h2 className='h2 mt-8'>Vytvoř si pracovní blok</h2>
      <div className='mt-8'>
        <span className='text-2xl text-accent font-semibold mr-4'>1.</span>
        <label htmlFor="goal">Na čem chci právě teď pracovat?</label>
        <input
          type="text"
          id="goal"
          placeholder='Např. Navrhnout navigaci'
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className='input mt-4 text-sm bg-secondary'
        />
        <p className={`text-sm text-accent mt-2 ml-2 ${goal.length > 0 ? 'invisible' : 'visible'}`}>Toto pole je povinné</p>
      </div>

      <div className='mt-4'>
        <span className='text-2xl text-accent font-semibold mr-4'>2.</span>
        <label>Jak dlouho tomu chci věnovat?</label>
         <TimeDialInput initialMinutes={25} onMinutesChange={setTime} minMinutes={0} maxMinutes={60}/>
      </div>

      <IconButton IconComponent={Work} title="Pracuji" type='submit'isDisabled={goal.length === 0}/>
    </form>
    </div>
  );
};

export default CreateSession;
