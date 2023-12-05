import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

const useResize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 500);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width: windowSize.width,
    height: windowSize.height,
    isMobile: windowSize.width <= 768,
    isTable: windowSize.width < 1140 && windowSize.width > 768,
    isDesktop: windowSize.width >= 1140,
  };
};

export default useResize;
