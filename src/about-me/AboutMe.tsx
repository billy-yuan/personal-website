import { useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import { COLORS } from "../utility/colors";
import { useOnLanguageChange } from "../utility/useOnLanguageChange";
import { GetInTouch } from "./GetInTouch";
import { ABOUT_ME_QUERY } from "./queries";
import "./style.css";

export function AboutMe() {
  const { i18n } = useTranslation();
  const { data, refetch } = useQuery(ABOUT_ME_QUERY, {
    variables: { locale: i18n.language },
  });
  useOnLanguageChange(refetch);

  if (!data) {
    return <div />;
  }

  return (
    <div className="about-me-container">
      <div className="left-about-me">
        <ReactMarkdown>{data.aboutMes[0].content.markdown}</ReactMarkdown>
      </div>
      <div className="right-about-me">
        <div
          className="about-me-picture"
          style={{ backgroundColor: COLORS.bisque }}
        />
        <GetInTouch />
      </div>
    </div>
  );
}
