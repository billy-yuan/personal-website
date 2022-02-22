export type Project = {
  id: string;
  title: string;
  thumbnailImage: {
    id: string;
    url: string;
  };
  markdown: {
    markdown: string;
  };
};
