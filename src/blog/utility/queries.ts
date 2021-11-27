import { gql } from "@apollo/client";

export const POSTS_QUERY = gql`
  {
    posts(orderBy: publishedAt_DESC) {
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
  query getPostById($slug: String) {
    posts(where: { slug: $slug }) {
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
