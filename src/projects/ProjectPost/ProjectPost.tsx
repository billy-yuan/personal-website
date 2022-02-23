import { useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { ONE_PROJECT_QUERY } from "./query";
import { ProjectPostType } from "../types";
import "./style.css";

export function ProjectPost() {
  const { i18n } = useTranslation();
  const { slug } = useParams();
  const { data, loading, error } = useQuery(ONE_PROJECT_QUERY, {
    variables: { slug, locale: i18n.language },
  });

  if (!data || data.projects.length === 0) {
    return <></>;
  }

  const projectPost: ProjectPostType = data.projects[0];
  const markdown: string = projectPost.markdown.markdown;

  return (
    <div className="project-post-container">
      <div className="project-post-header">
        <h1>{projectPost.title}</h1>
      </div>
      <div className="project-post-cover-image">
        <img src={projectPost.thumbnailImage.url} />
      </div>
      <div className="project-markdown-container">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}
