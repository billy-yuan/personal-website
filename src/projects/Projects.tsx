import { t } from "i18next";
import "./style.css";

export function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-home-header">
        <h1>{t("projects.header")}</h1>
      </div>
    </div>
  );
}
