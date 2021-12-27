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
  id: string;
  name: string;
  goToOrder: string[];
  goodfor: string[];
  description: string;
  imageUrl?: {
    __typename: "Asset";
    url: string;
  };
  city: City;
  latLong: LatLong;
};
