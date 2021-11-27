import { PostCard } from "./PostCard";
import { Posts } from "./utility/types";
import { POSTS_QUERY } from "./utility/queries";
import { useQuery } from "@apollo/client";
import { formatDate } from "./utility/utility";

export function Blog() {
  const { data, loading, error } = useQuery(POSTS_QUERY);
  const posts: Posts[] = data && data.posts;

  if (loading || error) return <div />;

  return (
    <>
      <div className="post-card-header">
        <h1>Blog</h1>
      </div>
      {posts.map((post) => (
        <div key={"post-card-" + post.id}>
          <PostCard
            id={post.id}
            title={post.title}
            imageUrl={post.coverImage.url}
            date={formatDate(post.publishedAt)}
            excerpt={post.excerpt}
          />
        </div>
      ))}
    </>
  );
}
