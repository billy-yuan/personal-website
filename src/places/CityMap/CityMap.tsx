import { useQuery } from "@apollo/client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  blackAndWhiteMapStyle,
  mapContainerStyle,
  selectedMarker,
  unselectedMarker,
} from "./mapStyle";
import { PLACES_QUERY } from "./query";
import "./style.css";
import { Place, ZoomType } from "./types";
import { ZoomButtons } from "./ZoomButtons/ZoomButtons";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const googleMapsOptions: google.maps.MapOptions = {
  disableDefaultUI: true,
  gestureHandling: "none",
  styles: blackAndWhiteMapStyle,
};

export function CityMap() {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [clickedPlace, setClickedPlace] = useState<Place | null>(null);
  const { slug } = useParams();
  const { data, loading, error } = useQuery(PLACES_QUERY, {
    variables: { slug },
  });

  const handleZoomClick = (zoomType: ZoomType) => {
    const zoomLevel = map?.getZoom();
    if (!map || zoomLevel === undefined) {
      return;
    }
    switch (zoomType) {
      case ZoomType.ZOOM_IN:
        map.setZoom(zoomLevel + 1);
        break;
      case ZoomType.ZOOM_OUT:
        map.setZoom(zoomLevel - 1);
        break;
      default:
        return;
    }
  };

  const handleMarkerClick = (place: Place) => {
    setClickedPlace(place);
    map?.panTo({
      lat: place.latLong.latitude,
      lng: place.latLong.longitude,
    });
  };

  if (loading || error) {
    return <div />;
  }
  const startingCenter = {
    lat: data.places[0].latLong.latitude,
    lng: data.places[0].latLong.longitude,
  };

  return (
    <div className="map-container">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          onLoad={(m) => setMap(m)}
          options={googleMapsOptions}
          mapContainerStyle={mapContainerStyle}
          zoom={13}
          center={startingCenter}
        >
          <ZoomButtons
            zoomInCallback={() => handleZoomClick(ZoomType.ZOOM_IN)}
            zoomOutCallback={() => handleZoomClick(ZoomType.ZOOM_OUT)}
          />
          {data.places.map((place: Place) => (
            <Marker
              onClick={() => handleMarkerClick(place)}
              icon={
                place.name === clickedPlace?.name
                  ? selectedMarker
                  : unselectedMarker
              }
              position={{
                lat: place.latLong.latitude,
                lng: place.latLong.longitude,
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
