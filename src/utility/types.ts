export enum NavSection {
  "About Me" = "About Me",
  "Blog" = "Blog",
  "Post" = "Post",
  "People" = "People",
  "Coffee" = "Coffee",
  "City" = "City",
  "Projects" = "Projects",
  "None" = "None",
}

export const NavSectionURL: { [key in NavSection]: string } = {
  "About Me": "/about",
  Blog: "/blog",
  Post: "/post/:slug",
  People: "/people",
  City: "/coffee/:slug",
  Coffee: "/coffee",
  Projects: "/projects",
  None: "/",
};
