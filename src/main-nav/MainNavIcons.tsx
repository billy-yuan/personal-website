import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useIsMobile } from "../utility/useIsMobile";
import { NavMenu } from "./NavMenu";
import "./style.css";

export function MainNavIcons({ children }: any) {
  const [isNavMenuVisible, toggleNavMenu] = useState<boolean>(false);
  const isMobile = useIsMobile();
  const { i18n } = useTranslation();
  const selectedLanguageStyle = {
    textDecoration: "underline",
    fontWeight: "600",
  };

  return (
    <>
      <div
        className="main-nav-icons-container"
        style={isNavMenuVisible ? { background: "none" } : {}}
      >
        <Link to="/">
          <div
            className="home-icon"
            style={isNavMenuVisible && isMobile ? { display: "none" } : {}}
          >
            BY
          </div>
        </Link>
        <div
          className="right-nav-icons"
          style={{ color: isNavMenuVisible ? "white" : "black" }}
        >
          {/* <div className="choose-language">
            <span
              onClick={() => i18n.changeLanguage("en")}
              style={i18n.language === "en" ? selectedLanguageStyle : {}}
            >
              EN
            </span>
            <span> / </span>
            <span
              onClick={() => i18n.changeLanguage("ja")}
              style={i18n.language === "ja" ? selectedLanguageStyle : {}}
            >
              JP
            </span>
          </div> */}
          <div
            className="nav-icon"
            onClick={() => toggleNavMenu(!isNavMenuVisible)}
          >
            {isNavMenuVisible ? "x" : "="}
          </div>
        </div>
      </div>
      <NavMenu isVisible={isNavMenuVisible} toggleVisible={toggleNavMenu} />
      {children}
    </>
  );
}
