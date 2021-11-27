import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { ONE_POST_QUERY } from "./utility/queries";

export function Post() {
  const { slug } = useParams();
  const { data, loading, error } = useQuery(ONE_POST_QUERY, {
    variables: { slug },
  });

  if (loading) {
    return <div />;
  }

  const post = data.posts[0];
  return (
    <div className="post-container">
      <h3>{post.title}</h3>
      <p>{post.content.markdown}</p>
    </div>
  );
}
