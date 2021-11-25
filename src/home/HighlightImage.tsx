import { useEffect, useState } from "react";
import { NavSection } from "../utility/types";
import { useHomeContext } from "./hooks/context";
import "./style.css";

function highlightImageColor(sectionName: NavSection) {
  switch (sectionName) {
    case NavSection.Blog:
      return "#cd5c5c";
    case NavSection["About Me"]:
      return "#84A59D";
    case NavSection.People:
      return "#F6BD60";
    case NavSection.Places:
      return "#F5CAC3";
    default:
      return "black";
  }
}

export function HighlightImage() {
  const { state } = useHomeContext();
  const [currentHighlightImageStyle, setHighlightImageStyle] = useState({});

  useEffect(() => {
    const newHighlightImageStyle = {
      backgroundColor: highlightImageColor(state.mouseoverNav),
      transition: "background-color 0.7s",
      // will switch backgroundImage
    };

    setHighlightImageStyle(newHighlightImageStyle);
  }, [state.mouseoverNav]);

  return (
    <div
      className="home-highlight-image-container"
      style={currentHighlightImageStyle}
    ></div>
  );
}
