export type Posts = {
  __typename: "Post";
  id: string;
  title: string;
  publishedAt: string;
  tags: string[];
  content: { __typename: "RichText"; markdown: string };
};
