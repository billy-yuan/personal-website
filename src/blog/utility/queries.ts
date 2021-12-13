import { gql } from "@apollo/client";

export const POSTS_QUERY = gql`
  query ($locale: Locale!) {
    posts(locales: [$locale], orderBy: publishedAt_DESC) {
      id
      title
      slug
      publishedAt
      excerpt
      coverImage {
        url
      }
      content {
        markdown
      }
      tags
    }
  }
`;

export const ONE_POST_QUERY = gql`
  query getPostById($slug: String, $locale: Locale!) {
    posts(locales: [$locale], where: { slug: $slug }) {
      id
      title
      publishedAt
      coverImage {
        url
      }
      content {
        markdown
      }
      tags
    }
  }
`;
