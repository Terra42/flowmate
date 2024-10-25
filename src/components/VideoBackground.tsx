import { useEffect, useRef } from "react";

interface VideoBackgroundProps {
  videoSrc: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [videoSrc]);

  const handleVideoError = () => {
    console.error("Error loading video:", videoSrc);
  };

  return (
    <>
      {videoSrc !== "/videos/video_bg_default.mp4" && (
        <video
          ref={videoRef}
          className="absolute top-0 left-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/mp4" onError={handleVideoError} />
          Your browser does not support the video tag.
        </video>
      )}
    </>
  );
};

export default VideoBackground;