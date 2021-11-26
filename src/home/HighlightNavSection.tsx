import { Link } from "react-router-dom";
import { NavSection } from "../utility/types";
import { HighlightNavCard } from "./HighlightNavCard";
import { HighlightText } from "./HighlightText";
import "./style.css";

export function HighlightNavSection() {
  return (
    <>
      <div className="highlight-nav-container">
        <HighlightText />
        <HighlightNavCard name={NavSection["About Me"]} />
        <Link to="/blog">
          <HighlightNavCard name={NavSection.Blog} />
        </Link>
        <HighlightNavCard name={NavSection.People} />
        <HighlightNavCard name={NavSection.Places} />
        <div className="default-highlight-image"></div>
      </div>
    </>
  );
}
