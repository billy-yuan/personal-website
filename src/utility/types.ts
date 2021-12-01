export enum NavSection {
  "About Me" = "About Me",
  "Blog" = "Blog",
  "Post" = "Post",
  "People" = "People",
  "Places" = "Places",
  "City" = "City",
  "None" = "None",
}

export const NavSectionURL: { [key in NavSection]: string } = {
  "About Me": "/about",
  Blog: "/blog",
  Post: "/post/:slug",
  People: "/people",
  City: "/places/:slug",
  Places: "/places",
  None: "/",
};
