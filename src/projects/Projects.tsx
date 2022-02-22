import { useQuery } from "@apollo/client";
import { t } from "i18next";
import i18n from "../i18n";
import { PROJECTS_QUERY } from "./query";
import "./style.css";

export function Projects() {
  const { data, loading, error, refetch } = useQuery(PROJECTS_QUERY, {
    variables: { locale: i18n.language },
  });

  return (
    <div className="projects-container">
      <div className="projects-home-header">
        <h1>{t("projects.header")}</h1>
      </div>
    </div>
  );
}
