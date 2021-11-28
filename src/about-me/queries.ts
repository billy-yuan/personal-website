import gql from "graphql-tag";

export const ABOUT_ME_QUERY = gql`
  {
    aboutMes {
      content {
        markdown
      }
    }
  }
`;
