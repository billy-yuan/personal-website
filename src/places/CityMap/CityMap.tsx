import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { usePlaceContext } from "../PlacesMain/hooks/context";
import { PlacesActionType } from "../PlacesMain/hooks/reducer";
import defaultCenter from "./defaultCenter";
import {
  blackAndWhiteMapStyle,
  mapContainerStyle,
  selectedMarker,
  unselectedMarker,
} from "./mapStyle";
import "./style.css";
import { GoogleMapsLatLong, Place, ZoomType } from "./types";
import { ZoomButtons } from "./ZoomButtons/ZoomButtons";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const googleMapsOptions: google.maps.MapOptions = {
  disableDefaultUI: true,
  styles: blackAndWhiteMapStyle,
};

type CityMapProps = {
  data: Place[];
};

export function CityMap({ data }: CityMapProps) {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [mapCenter, setMapCenter] = useState<GoogleMapsLatLong>(
    defaultCenter.NEW_YORK
  );
  const { state, dispatch } = usePlaceContext();

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
    const newCenter: GoogleMapsLatLong = {
      lat: place.latLong.latitude,
      lng: place.latLong.longitude,
    };
    setMapCenter(newCenter);
    map?.panTo({
      lat: place.latLong.latitude,
      lng: place.latLong.longitude,
    });
    dispatch({
      type: PlacesActionType.SET_CLICKED_PLACE,
      payload: {
        clickedPlace: place,
      },
    });
    dispatch({
      type: PlacesActionType.SET_PLACE,
      payload: {
        currentPlace: place,
      },
    });
  };

  // only update map center if there is data.
  // if there is no data, then do not update the map center
  // since that will cause the map to pan unnecessarily.
  useEffect(() => {
    if (data.length > 0) {
      map?.panTo({
        lat: data[0].latLong.latitude,
        lng: data[0].latLong.longitude,
      });
    }
  }, [data]);

  // pan to currentPlace
  useEffect(() => {
    if (state.currentPlace) {
      map?.panTo({
        lat: state.currentPlace.latLong.latitude,
        lng: state.currentPlace.latLong.longitude,
      });
    }
  }, [state.currentPlace]);

  return (
    <div className="map-container">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          onLoad={(m) => setMap(m)}
          options={googleMapsOptions}
          mapContainerStyle={mapContainerStyle}
          zoom={12}
          center={mapCenter}
        >
          <ZoomButtons
            zoomInCallback={() => handleZoomClick(ZoomType.ZOOM_IN)}
            zoomOutCallback={() => handleZoomClick(ZoomType.ZOOM_OUT)}
          />
          {data.map((place: Place) => (
            <Marker
              key={`marker-${place.id}`}
              onClick={() => handleMarkerClick(place)}
              icon={
                place.name === state.currentPlace?.name
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
