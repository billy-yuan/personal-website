import { gql } from "@apollo/client";

export const PLACES_QUERY = gql`
  query ($slug: String) {
    places(where: { city: { slug: $slug } }) {
      id
      name
      city {
        name
        slug
      }
      imageUrl {
        url
      }
      description
      latLong {
        latitude
        longitude
      }
    }
  }
`;
