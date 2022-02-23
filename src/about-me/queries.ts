import gql from "graphql-tag";

export const ABOUT_ME_QUERY = gql`
  query ($locale: Locale!) {
    aboutMes(locales: [$locale]) {
      content {
        markdown
      }
      profilePic {
        url
      }
    }
  }
`;
