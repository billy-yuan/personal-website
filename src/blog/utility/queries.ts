import { gql } from "@apollo/client";

export const POSTS_QUERY = gql`
  {
    posts {
      id
      title
      publishedAt
      content {
        markdown
      }
      tags
    }
  }
`;
