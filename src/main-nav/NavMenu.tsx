import { Link } from "react-router-dom";
import { NavSection, NavSectionURL } from "../utility/types";
import { useTranslation } from "react-i18next";

type NavMenuProps = {
  isVisible: boolean;
  toggleVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export function NavMenu({ isVisible, toggleVisible }: NavMenuProps) {
  const { t } = useTranslation();

  if (!isVisible) {
    return <></>;
  }
  return (
    <>
      <div
        className="nav-menu-content-cover"
        onClick={() => toggleVisible(false)}
      />
      <div className="nav-menu-container">
        <div className="nav-menu-text-container">
          <Link
            to={NavSectionURL["About Me"]}
            onClick={() => toggleVisible(false)}
          >
            <div className="nav-menu-text-box">{t("navSection.aboutMe")}</div>
          </Link>
          <Link to={NavSectionURL.Blog} onClick={() => toggleVisible(false)}>
            <div className="nav-menu-text-box">{t("navSection.blog")}</div>
          </Link>
          <Link to={NavSectionURL.People} onClick={() => toggleVisible(false)}>
            <div className="nav-menu-text-box">{t("navSection.people")}</div>
          </Link>
          <Link to={NavSectionURL.Places} onClick={() => toggleVisible(false)}>
            <div className="nav-menu-text-box">{t("navSection.places")}</div>
          </Link>
        </div>
      </div>
    </>
  );
}
