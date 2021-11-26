import { Link } from "react-router-dom";
import "./style.css";

export function MainNavIcons({ children }: any) {
  return (
    <>
      <Link to="/">
        <div className="home-icon">BY</div>
      </Link>
      <div className="nav-icon">=</div>
      {children}
    </>
  );
}
