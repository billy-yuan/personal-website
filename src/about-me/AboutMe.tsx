import { useQuery } from "@apollo/client";
import ReactMarkdown from "react-markdown";
import { COLORS } from "../utility/colors";
import { GetInTouch } from "./GetInTouch";
import { ABOUT_ME_QUERY } from "./queries";
import "./style.css";

export function AboutMe() {
  const { data } = useQuery(ABOUT_ME_QUERY);

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
