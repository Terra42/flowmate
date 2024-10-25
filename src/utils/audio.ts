interface AudioRef {
  current: HTMLAudioElement | null;
}

export const playAudioWithFadeIn = (audioRef: AudioRef) => {
  if (audioRef.current) {
    audioRef.current.volume = 0;
    audioRef.current.play();
    let volume = 0;
    const fadeIn = setInterval(() => {
      if (volume < 1) {
        volume = Math.min(volume + 0.2, 1); // Ensure volume does not exceed 1
        audioRef.current!.volume = volume;
      } else {
        clearInterval(fadeIn);
      }
    }, 100);
  }
};

export const pauseAudioWithFadeOut = (audioRef: AudioRef) => {
  if (audioRef.current) {
    let volume = audioRef.current.volume;
    const fadeOut = setInterval(() => {
      if (volume > 0) {
        volume = Math.max(volume - 0.2, 0); // Ensure volume does not go below 0
        audioRef.current!.volume = volume;
      } else {
        clearInterval(fadeOut);
        audioRef.current!.pause();
      }
    }, 100);
  }
};