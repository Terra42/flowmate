import { useEffect } from 'react';

function useViewportHeight() {
  const setViewportHeight = () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  };

  useEffect(() => {
    setViewportHeight(); // Initial setup
    window.addEventListener('resize', setViewportHeight); // Update on resize
    
    return () => window.removeEventListener('resize', setViewportHeight); // Cleanup on unmount
  }, []);
}

export default useViewportHeight;
