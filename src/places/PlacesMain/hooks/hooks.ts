import { Place } from "../../CityMap/types";

/**
 * Get unique values of `goodfor` from an array of Places.
 */
export function useGetFilters(data: Place[]) {
  const filters: string[] = [];

  data.forEach((place) => {
    place.goodfor.forEach((filter) => {
      if (!filters.includes(filter)) {
        filters.push(filter);
      }
    });
  });
  return filters;
}
