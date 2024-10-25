import { useNavigate } from "react-router-dom";
import IconButton from "../elements/IconButton";
import SoundOn from "../assets/svg/SoundOn";
import Leave from "../assets/svg/Leave";
import ColorPalette from "../assets/svg/ColorPalette";
import SoundOff from "../assets/svg/SoundOff";
import { pauseAudioWithFadeOut, playAudioWithFadeIn } from "../utils/audio";

interface MenuProps {
  themesVisible: boolean;
  setThemesVisible: (visible: boolean) => void;
  audioRef: React.RefObject<HTMLAudioElement>;
  setIsSoundOn: (isSoundOn: boolean) => void;
  isSoundOn: boolean;
}

const Menu: React.FC<MenuProps> = ({
  themesVisible,
  setThemesVisible,
  audioRef,
  setIsSoundOn,
  isSoundOn
}) => {

    const navigate = useNavigate();

  const toggleSound = () => {
    if (audioRef.current) {
      if (isSoundOn) {
        pauseAudioWithFadeOut(audioRef);
      } else {
        playAudioWithFadeIn(audioRef);
      }
      setIsSoundOn(!isSoundOn);
    }
  };


  return (
    <div className="flex">
      {isSoundOn ? (
        <IconButton IconComponent={SoundOn} onClick={() => toggleSound()} />
      ) : (
        <IconButton IconComponent={SoundOff} onClick={() => toggleSound()} />
      )}
      <IconButton IconComponent={ColorPalette} onClick={() => setThemesVisible(!themesVisible)} />
      <IconButton IconComponent={Leave} onClick={() => navigate('/offboarding')} />
    </div>
  );
};

export default Menu;
