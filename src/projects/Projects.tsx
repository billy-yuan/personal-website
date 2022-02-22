import { useQuery } from "@apollo/client";
import { t } from "i18next";
import { Link } from "react-router-dom";
import i18n from "../i18n";
import { NavSectionURL } from "../utility/types";
import { PROJECTS_QUERY } from "./query";
import { SelectProjectCard } from "./SelectProjectCard/SelectProjectCard";
import "./style.css";
import { Project } from "./types";

export function Projects() {
  const { data, loading, error, refetch } = useQuery(PROJECTS_QUERY, {
    variables: { locale: i18n.language },
  });

  if (!data) {
    return <></>;
  }
  return (
    <div className="projects-container">
      <div className="projects-home-header">
        <h1>{t("projects.header")}</h1>
        <div className="city-container">
          {data.projects.map((project: Project) => (
            <Link to={`${NavSectionURL.Projects}/${project.slug}`}>
              <SelectProjectCard
                key={project.id}
                project={project.title}
                imageUrl={project.thumbnailImage.url}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
