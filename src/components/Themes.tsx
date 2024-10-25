import ThemePicker from "../elements/ThemePicker";
import { themes } from "../data/themes";
import { useState } from "react";

interface ThemesProps {
  setVideoSrc: (src: string) => void;
  onThemeChange: (newTheme: string) => void;
}

const Themes: React.FC<ThemesProps> = ({ setVideoSrc,  onThemeChange }) => {
  const [activeTheme, setActiveTheme] = useState(() => {
    return localStorage.getItem('colorTheme') || 'default';
  });

  return (
    <div className="bg-bg-semi rounded-xl mt-4 p-4 flex flex-wrap justify-center gap-4">
        {themes.map((theme: { id: React.Key | null | undefined; title: string; theme: string; }) => (
        <ThemePicker
          key={theme.id}
          title={theme.title}
          theme={theme.theme}
          setVideoSrc={setVideoSrc}
          setActiveTheme={setActiveTheme}
          activeTheme={activeTheme}
          onThemeChange={onThemeChange}
        />
        ))}
    </div>
  );
};

export default Themes;
