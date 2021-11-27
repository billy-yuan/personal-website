export type Post = {
  id: string;
  content: {
    __typename: "RichText";
    markdown: string;
  };
  coverImage: {
    __typename: "Asset";
    url: string;
  };
  publishedAt: string;
  tags: string[];
  title: string;
  __typename: "Post";
};
