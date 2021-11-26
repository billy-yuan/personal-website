export enum NavSection {
  "About Me" = "About Me",
  "Blog" = "Blog",
  "People" = "People",
  "Places" = "Places",
  "None" = "None",
}

export const NavSectionURL: { [key in NavSection]: string } = {
  "About Me": "/about-me",
  Blog: "/blog",
  People: "/people",
  Places: "/places",
  None: "/",
};
