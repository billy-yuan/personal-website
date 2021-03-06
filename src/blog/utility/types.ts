export type Posts = {
  __typename: "Post";
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: {
    url: string;
  };
  publishedAt: string;
  tags: string[];
  content: { __typename: "RichText"; markdown: string };
};
