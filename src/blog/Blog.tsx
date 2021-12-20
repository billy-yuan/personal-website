import { PostCard } from "./PostCard";
import { Posts } from "./utility/types";
import { POSTS_QUERY } from "./utility/queries";
import { useQuery } from "@apollo/client";
import { FormatDate } from "../utility/utility";
import { useTranslation } from "react-i18next";
import { useOnLanguageChange } from "../utility/useOnLanguageChange";

export function Blog() {
  const { t, i18n } = useTranslation();
  const { data, loading, error, refetch } = useQuery(POSTS_QUERY, {
    variables: { locale: i18n.language },
  });

  const posts: Posts[] = data && data.posts;
  useOnLanguageChange(refetch);

  if (loading || error) return <div />;

  return (
    <div className="blog-container">
      <div className="post-card-header">
        <h1>{t("blog.header")}</h1>
      </div>
      {posts.map((post) => (
        <div key={"post-card-" + post.id}>
          <PostCard
            title={post.title}
            slug={post.slug}
            date={FormatDate.format(post.publishedAt, i18n.language)}
            excerpt={post.excerpt}
          />
        </div>
      ))}
    </div>
  );
}
