interface ThemePickerProps {
    title: string;
    theme: string;
    activeTheme: string;
    setVideoSrc: (src:string) => void;
    setActiveTheme: (theme:string) => void;
    onThemeChange: (newTheme:string) => void;
}

const ThemePicker:React.FC<ThemePickerProps> = ({title, theme, setVideoSrc, setActiveTheme, activeTheme, onThemeChange}) => {
    const handleThemePickerClick = (newTheme:string) => {
        setVideoSrc(`/videos/video_bg_${theme}.mp4`);
        setActiveTheme(newTheme)
        localStorage.setItem('colorTheme', theme);
        onThemeChange(theme);
    }

    return (
        <button className={`theme-picker ${activeTheme === theme ? "theme-picker-active" : "theme-picker-inactive" }`} onClick={() => handleThemePickerClick(theme)}>{title}</button>
    );
}

export default ThemePicker;