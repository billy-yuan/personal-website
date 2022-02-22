import gql from "graphql-tag";

export const PROJECTS_QUERY = gql`
  query getProjects($locale: Locale!) {
    projects(locales: [$locale]) {
      id
      title
      slug
      thumbnailImage {
        id
        url
      }
    }
  }
`;
