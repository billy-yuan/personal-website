import { COLORS } from "../../utility/colors";

export const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

export const blackAndWhiteMapStyle = [
  {
    featureType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "water",
    stylers: [
      {
        visibility: "on",
      },
      {
        lightness: -100,
      },
    ],
  },

  {
    featureType: "poi.park",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#cccccc",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.neighborhood",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
];

export const seeNeighborhoods = {
  featureType: "administrative.neighborhood",
  stylers: [
    {
      visibility: "on",
    },
  ],
};

export const unselectedMarker = {
  path: "M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z",
  border: COLORS.black,
  fillOpacity: 0.2,
  strokeWeight: 2,
  rotation: 0,
  scale: 1,
};

export const selectedMarker = {
  ...unselectedMarker,
  fillColor: COLORS.black,
  fillOpacity: 1,
};
