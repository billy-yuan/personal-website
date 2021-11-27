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
      {posts.map((post) => (
        <div key={post.id}>
          <PostCard
            id={post.id}
            title={post.title}
            date={formatDate(post.publishedAt)}
            tags={post.tags}
          />
        </div>
      ))}
    </>
  );
}
