import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { PostCard } from "./PostCard";

const QUERY = gql`
  {
    posts {
      id
      title
      publishedAt
      content {
        markdown
      }
      tags
    }
  }
`;

type Posts = {
  __typename: "Post";
  id: string;
  title: string;
  publishedAt: string;
  tags: string[];
  content: { __typename: "RichText"; markdown: string };
};

export function Blog() {
  const { data, loading, error } = useQuery(QUERY);
  const posts: Posts[] = data && data.posts;

  if (loading || error) return <div />;

  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <PostCard
            id={post.id}
            title={post.title}
            date={post.publishedAt}
            tags={post.tags}
          />
        </div>
      ))}
    </>
  );
}
