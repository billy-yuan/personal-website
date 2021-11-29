import gql from "graphql-tag";

export const SELECT_PLACE_QUERY = gql`
  {
    cities {
      id
      name
      imageUrl {
        url
      }
    }
  }
`;
