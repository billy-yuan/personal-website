import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { NavMenu } from "./NavMenu";
import "./style.css";

export function MainNavIcons({ children }: any) {
  const [isNavMenuVisible, toggleNavMenu] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const selectedLanguageStyle = {
    textDecoration: "underline",
  };

  return (
    <div className="main-nav-icons-container">
      <Link to="/">
        <div className="home-icon">BY</div>
      </Link>
      <div className="right-nav-icons">
        <div className="choose-language">
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
        </div>
        <div
          className="nav-icon"
          style={{ color: isNavMenuVisible ? "white" : "black" }}
          onClick={() => toggleNavMenu(!isNavMenuVisible)}
        >
          {isNavMenuVisible ? "x" : "="}
        </div>
      </div>
      <NavMenu isVisible={isNavMenuVisible} toggleVisible={toggleNavMenu} />
      {children}
    </div>
  );
}
