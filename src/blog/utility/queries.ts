import { gql } from "@apollo/client";

export const POSTS_QUERY = gql`
  {
    posts(orderBy: publishedAt_DESC) {
      id
      title
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
