import { useEffect, useState } from "react";

interface WindoSizeProps {
    width: number | undefined;
    height: number | undefined;
}

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState<WindoSizeProps>({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
    
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth > 1400 ? 1400 : window.innerWidth,
            height: window.innerHeight,
          });
        }
      
        window.addEventListener("resize", handleResize);

        handleResize();
      
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);
    return windowSize;
  }