import { gql } from "@apollo/client";

export const PLACES_QUERY = gql`
  query ($slug: String, $locale: Locale!) {
    places(locales: [$locale], where: { city: { slug: $slug } }) {
      id
      name
      goToOrder
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
