import { useEffect, useRef } from "react";
import { Place } from "../types";
import "./style.css";

type PlaceOverlayProps = {
  clickedPlace: Place;
  setClickedPlace: React.Dispatch<React.SetStateAction<Place | null>>;
};
export function PlaceOverlay({
  clickedPlace,
  setClickedPlace,
}: PlaceOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent) => {
    // TODO: See if there is a better way to tell if the user is clicking on a marker
    const isMarker = e.target instanceof HTMLImageElement;

    if (!overlayRef?.current?.contains(e.target as Node) && !isMarker) {
      setClickedPlace(null);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [clickedPlace]);

  return (
    <div className="place-overlay-container" ref={overlayRef}>
      <div className="place-overlay-image" />
      <div className="place-overlay-text">
        <h2>{clickedPlace.name}</h2>
        <p>{clickedPlace.description}</p>
      </div>
    </div>
  );
}
