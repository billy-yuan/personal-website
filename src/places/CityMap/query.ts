import { gql } from "@apollo/client";

export const PLACES_QUERY = gql`
  query ($slug: String) {
    places(where: { city: { slug: $slug } }) {
      name
      city {
        name
        slug
      }
      description
      latLong {
        latitude
        longitude
      }
    }
  }
`;
