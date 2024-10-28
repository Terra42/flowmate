import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import VideoBackground from "../components/VideoBackground";
import Themes from "../components/Themes";
import Timer from "../components/Timer";
import Goal from "../components/Goal";
import { playAudioWithFadeIn, pauseAudioWithFadeOut } from "../utils/audio";
import PauseModal from "@/components/PauseModal";
import Footer from "@/components/Footer";

interface FlowSessionProps {
  theme: string;
  setTheme: (newTheme: string) => void;
  goal: string;
  time: number;
}

const FlowSession:React.FC<FlowSessionProps> = ({theme, setTheme, goal, time}) => {
  const [themesVisible, setThemesVisible] = useState(false);
  const [videoSrc, setVideoSrc] = useState("/videos/video_bg_default.mp4");
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [startTimer, setStartTimer] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    if (audioRef.current) {
      audioRef.current.pause(); 
      audioRef.current.load(); 

      if (isSoundOn) {
        audioRef.current.oncanplaythrough = () => {
          playAudioWithFadeIn(audioRef);
        };
      } else {
        audioRef.current.oncanplaythrough = null;
      }
    }
  };

  const handleTimerEnd = () => {
    setIsTimerRunning(false);
    setThemesVisible(false);
    pauseAudioWithFadeOut(audioRef);
  };

  const handleTimerPaused = () => {
    pauseAudioWithFadeOut(audioRef);
  }

  const handleTimerStart = () => {
    if (isSoundOn) {
      playAudioWithFadeIn(audioRef);
    }
  }

  useEffect(() => {
    const colorTheme = localStorage.getItem("colorTheme") || "default";
    const storedVideoSrc = `/videos/video_bg_${colorTheme}.mp4`;
    if (storedVideoSrc) {
      setVideoSrc(storedVideoSrc);
    } else {
      setVideoSrc("/videos/video_bg_default.mp4");
    }
  }, []);

  useEffect(() => {
    setStartTimer(true);
  },[]);

  return (
    <div className={`${theme} text-secondary relative h-screen w-full overflow-hidden`}>
      <VideoBackground videoSrc={videoSrc} />
      <audio
        ref={audioRef}
        src={`/audio/${theme}.mp3`}
        loop
        style={{ display: "none" }}
      />
      <div className="relative h-screen z-10 m-4">
        <div className="relative">
          <Navbar
            themesVisible={themesVisible}
            setThemesVisible={setThemesVisible}
            audioRef={audioRef}
            setIsSoundOn={setIsSoundOn}
            isSoundOn={isSoundOn}
          />
          {themesVisible ? (
            <Themes
              setVideoSrc={setVideoSrc}
              onThemeChange={handleThemeChange}
            />
          ) : null}
        </div>
        {isTimerRunning ?
        <>
          <Goal goal={goal} />
          <Timer time={time} start={startTimer} onTimerEnd={handleTimerEnd} onTimerPaused={handleTimerPaused} onTimerStart={handleTimerStart}/>
          </>
         : 
         <PauseModal/>}
         <div className="absolute bottom-8 w-full">
          <Footer/>
         </div>
      </div>
    </div>
  );
};

export default FlowSession;