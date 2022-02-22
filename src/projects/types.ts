export type Project = {
  id: string;
  title: string;
  thumbnailImage: {
    id: string;
    url: string;
  };
  slug: string;
};

export type ProjectPostType = {
  id: string;
  title: string;
  markdown: {
    markdown: string;
  };
  thumbnailImage: {
    id: string;
    url: string;
  };
  slug: string;
};
