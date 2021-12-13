import gql from "graphql-tag";

export const SELECT_PLACE_QUERY = gql`
  query ($locale: Locale!) {
    cities(locales: [$locale]) {
      id
      name
      slug
      imageUrl {
        url
      }
    }
  }
`;
