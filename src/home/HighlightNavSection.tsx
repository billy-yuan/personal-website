import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { NavSectionURL } from "../utility/types";
import { HighlightNavCard } from "./HighlightNavCard";
import { HighlightText } from "./HighlightText";
import "./style.css";

export function HighlightNavSection() {
  const { t } = useTranslation();
  return (
    <>
      <div className="highlight-nav-container">
        <HighlightText />
        <Link to={NavSectionURL["About Me"]}>
          <HighlightNavCard name={t("navSection.aboutMe")} />
        </Link>
        <Link to={NavSectionURL.Blog}>
          <HighlightNavCard name={t("navSection.blog")} />
        </Link>
        <HighlightNavCard name={t("navSection.people")} />
        <Link to={NavSectionURL.Places}>
          <HighlightNavCard name={t("navSection.places")} />
        </Link>
        <div className="default-highlight-image"></div>
      </div>
    </>
  );
}
