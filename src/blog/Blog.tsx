import { PostCard } from "./PostCard";
import { Posts } from "./utility/types";
import { POSTS_QUERY } from "./utility/queries";
import { useQuery } from "@apollo/client";
import { formatDate } from "../utility/utility";
import { useTranslation } from "react-i18next";
import { useOnLanguageChange } from "../utility/useOnLanguageChange";

export function Blog() {
  const { i18n } = useTranslation();
  const { data, loading, error, refetch } = useQuery(POSTS_QUERY, {
    variables: { locale: i18n.language },
  });

  const posts: Posts[] = data && data.posts;
  useOnLanguageChange(refetch);

  if (loading || error) return <div />;

  return (
    <>
      <div className="post-card-header">
        <h1>Blog</h1>
      </div>
      {posts.map((post) => (
        <div key={"post-card-" + post.id}>
          <PostCard
            title={post.title}
            slug={post.slug}
            imageUrl={post.coverImage.url}
            date={formatDate(post.publishedAt)}
            excerpt={post.excerpt}
          />
        </div>
      ))}
    </>
  );
}
