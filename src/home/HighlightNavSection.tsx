import { Link } from "react-router-dom";
import { NavSection } from "../utility/types";
import { HighlightNavCard } from "./HighlightNavCard";
import "./style.css";

export function HighlightNavSection() {
  return (
    <div className="highlight-nav-container">
      <HighlightNavCard name={NavSection["About Me"]} />
      <Link to="/blog">
        <HighlightNavCard name={NavSection.Blog} />
      </Link>
      <HighlightNavCard name={NavSection.People} />
      <HighlightNavCard name={NavSection.Places} />
    </div>
  );
}
