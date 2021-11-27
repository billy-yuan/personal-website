export enum NavSection {
  "About Me" = "About Me",
  "Blog" = "Blog",
  "Post" = "Post",
  "People" = "People",
  "Places" = "Places",
  "None" = "None",
}

export const NavSectionURL: { [key in NavSection]: string } = {
  "About Me": "/about",
  Blog: "/blog",
  Post: "/post/:slug",
  People: "/people",
  Places: "/places",
  None: "/",
};
