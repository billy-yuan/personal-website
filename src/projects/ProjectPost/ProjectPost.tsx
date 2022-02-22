import { useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { ONE_PROJECT_QUERY } from "./query";

export function ProjectPost() {
  const { i18n } = useTranslation();
  const { slug } = useParams();
  const { data, loading, error } = useQuery(ONE_PROJECT_QUERY, {
    variables: { slug, locale: i18n.language },
  });

  if (!data || data.projects.length === 0) {
    return <></>;
  }

  const markdown: string = data.projects[0].markdown.markdown;

  return (
    <div>
      Project Post
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}
