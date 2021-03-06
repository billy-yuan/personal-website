import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { ONE_POST_QUERY } from "../blog/utility/queries";
import "./style.css";
import { Post } from "./types";
import ReactMarkdown from "react-markdown";
import { FormatDate } from "../utility/utility";
import { COLORS } from "../utility/colors";
import { useTranslation } from "react-i18next";
import { useOnLanguageChange } from "../utility/useOnLanguageChange";

export function BlogPost() {
  const { i18n } = useTranslation();
  const { slug } = useParams();
  const { data, loading, error, refetch } = useQuery(ONE_POST_QUERY, {
    variables: { slug, locale: i18n.language },
  });

  useOnLanguageChange(refetch);

  if (loading || error) {
    return <div />;
  }

  const posts: Post[] = data.posts;
  const post = posts[0];

  return (
    <div className="post-container">
      <div className="post-header">
        <h1>{post.title}</h1>
        <h3></h3>
        <p style={{ color: COLORS.grey }}>
          {FormatDate.format(post.publishedAt, i18n.language)}
        </p>
      </div>
      <div className="post-cover-image">
        <img src={post.coverImage.url} />
      </div>
      <ReactMarkdown
        components={{
          h1: "h3",
          h2: "h3",
        }}
      >
        {post.content.markdown}
      </ReactMarkdown>
    </div>
  );
}
