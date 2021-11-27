import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { ONE_POST_QUERY } from "../blog/utility/queries";
import "./style.css";
import { Post } from "./types";
import ReactMarkdown from "react-markdown";
import { formatDate } from "../utility/utility";
import { COLORS } from "../utility/colors";

export function BlogPost() {
  const { slug } = useParams();
  const { data, loading, error } = useQuery(ONE_POST_QUERY, {
    variables: { slug },
  });

  if (loading) {
    return <div />;
  }

  const posts: Post[] = data.posts;
  const post = posts[0];

  return (
    <div className="post-container">
      <div className="post-header">
        <h1>{post.title}</h1>
        <h3></h3>
        <p style={{ color: COLORS.grey }}>{formatDate(post.publishedAt)}</p>
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
