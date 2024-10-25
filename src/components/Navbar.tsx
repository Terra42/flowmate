import Logo from "../assets/svg/Logo";
import Menu from "./Menu";

interface NavbarProps {
  themesVisible: boolean;
  setThemesVisible: (visible: boolean) => void;
  audioRef: React.RefObject<HTMLAudioElement>;
  setIsSoundOn: (isSoundOn: boolean) => void;
  isSoundOn: boolean;
}

const Navbar:React.FC<NavbarProps> = ({themesVisible, setThemesVisible, audioRef, setIsSoundOn, isSoundOn}) => {
  return (
    <div className="bg-bg-semi w-full px-4 flex justify-between items-center rounded-lg">
      <Logo />
      <Menu themesVisible={themesVisible} setThemesVisible={setThemesVisible} audioRef={audioRef} setIsSoundOn={setIsSoundOn} isSoundOn={isSoundOn} />
    </div>
  );
};

export default Navbar;