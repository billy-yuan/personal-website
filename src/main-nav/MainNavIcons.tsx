import { useState } from "react";
import { Link } from "react-router-dom";
import { NavMenu } from "./NavMenu";
import "./style.css";

export function MainNavIcons({ children }: any) {
  const [isNavMenuVisible, toggleNavMenu] = useState<boolean>(false);

  return (
    <>
      <Link to="/">
        <div className="home-icon">BY</div>
      </Link>
      <div
        className="nav-icon"
        style={{ color: isNavMenuVisible ? "white" : "black" }}
        onClick={() => toggleNavMenu(!isNavMenuVisible)}
      >
        {isNavMenuVisible ? "x" : "="}
      </div>
      <NavMenu isVisible={isNavMenuVisible} toggleVisible={toggleNavMenu} />
      {children}
    </>
  );
}
