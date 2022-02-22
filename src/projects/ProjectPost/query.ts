import { gql } from "@apollo/client";

export const ONE_PROJECT_QUERY = gql`
  query getOneProject($locale: Locale!, $slug: String) {
    projects(locales: [$locale], where: { slug: $slug }) {
      id
      title
      slug
      markdown {
        markdown
      }
      thumbnailImage {
        id
        url
      }
    }
  }
`;
