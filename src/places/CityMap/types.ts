export enum ZoomType {
  "ZOOM_IN",
  "ZOOM_OUT",
}
export type LatLong = {
  __typename: "Location";
  latitude: number;
  longitude: number;
};

export type GoogleMapsLatLong = {
  lat: number;
  lng: number;
};

export type City = {
  __typename: "City";
  name: string;
  slug: string;
};

export type Place = {
  name: string;
  description: string;
  city: City;
  latLong: LatLong;
};
