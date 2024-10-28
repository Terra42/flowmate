import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import FlowSession from "./views/FlowSession";
import CreateSession from "./views/CreateSession";
import HomePage from "./views/HomePage";
import Offboarding from "./views/Offboarding";
import NotFound from "./views/NotFound";
import useViewportHeight from './hooks/useViewportHeight';

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("colorTheme") || "default";
  });
  const [goal, setGoal] = useState<string>('');
  const [time, setTime] = useState<number>(0);

  useViewportHeight();

  const handleFormSubmit = (submittedGoal: string, submittedTime: number) => {
    setGoal(submittedGoal);
    setTime(submittedTime);
  };

  return (
    <div className={`font-sans ${theme} bg-primary-95 text-secondary min-h-[calc(var(--vh,1vh)*100)]`}>
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-session" element={<CreateSession onSubmit={handleFormSubmit} />} />
        <Route path="/flow-session" element={<FlowSession theme={theme} setTheme={setTheme} goal={goal} time={time}/>} />
        <Route path="/offboarding" element={<Offboarding />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
