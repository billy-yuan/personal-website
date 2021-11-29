import { Link } from "react-router-dom";
import { NavSection, NavSectionURL } from "../utility/types";
import { HighlightNavCard } from "./HighlightNavCard";
import { HighlightText } from "./HighlightText";
import "./style.css";

export function HighlightNavSection() {
  return (
    <>
      <div className="highlight-nav-container">
        <HighlightText />
        <Link to={NavSectionURL["About Me"]}>
          <HighlightNavCard name={NavSection["About Me"]} />
        </Link>
        <Link to={NavSectionURL.Blog}>
          <HighlightNavCard name={NavSection.Blog} />
        </Link>
        <HighlightNavCard name={NavSection.People} />
        <Link to={NavSectionURL.Places}>
          <HighlightNavCard name={NavSection.Places} />
        </Link>
        <div className="default-highlight-image"></div>
      </div>
    </>
  );
}
