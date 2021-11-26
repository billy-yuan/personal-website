import { Link } from "react-router-dom";
import { NavSection, NavSectionURL } from "../utility/types";

type NavMenuProps = {
  isVisible: boolean;
  toggleVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export function NavMenu({ isVisible, toggleVisible }: NavMenuProps) {
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
            <div className="nav-menu-text-box">{NavSection["About Me"]}</div>
          </Link>
          <Link to={NavSectionURL.Blog} onClick={() => toggleVisible(false)}>
            <div className="nav-menu-text-box">{NavSection.Blog}</div>
          </Link>
          <Link to={NavSectionURL.People} onClick={() => toggleVisible(false)}>
            <div className="nav-menu-text-box">{NavSection.People}</div>
          </Link>
          <Link to={NavSectionURL.Places} onClick={() => toggleVisible(false)}>
            <div className="nav-menu-text-box">{NavSection.Places}</div>
          </Link>
        </div>
      </div>
    </>
  );
}
