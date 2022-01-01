import { useEffect, useState } from "react";

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(
    window.matchMedia("screen and (max-width: 760px)").matches
  );

  const handleResize = () => {
    setIsMobile(window.matchMedia("screen and (max-width: 760px)").matches);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
}
