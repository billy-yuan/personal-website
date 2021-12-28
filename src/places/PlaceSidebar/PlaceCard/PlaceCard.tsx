import "./style.css";
import { Place } from "../../CityMap/types";
import { usePlaceContext } from "../../PlacesMain/hooks/context";
import { PlacesActionType } from "../../PlacesMain/hooks/reducer";
import { useEffect, useRef } from "react";

type PlaceCardProps = {
  place: Place;
};

function vh(v: number) {
  var h = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  return (v * h) / 100;
}

function PlaceCard({ place }: PlaceCardProps) {
  const { state, dispatch } = usePlaceContext();
  const ref = useRef<HTMLDivElement | null>(null);

  const currentPlaceStyle = { textDecoration: "underline" };

  // scroll to div if it is current place
  useEffect(() => {
    if (
      place.id === state.currentPlace?.id &&
      ref.current?.offsetTop &&
      state.clickedPlace
    ) {
      window.scrollTo({
        top: ref.current?.offsetTop - vh(20),
        behavior: "smooth",
      });
    }

    return () => {
      dispatch({
        type: PlacesActionType.SET_CLICKED_PLACE,
        payload: {
          clickedPlace: null,
        },
      });
    };
  }, [state.currentPlace]);

  const handleMouseEnter = (currentPlace: Place) => {
    dispatch({
      type: PlacesActionType.SET_PLACE,
      payload: {
        currentPlace,
      },
    });
  };

  const handleMouseLeave = () => {
    dispatch({
      type: PlacesActionType.SET_PLACE,
      payload: {
        currentPlace: null,
      },
    });
  };

  return (
    <div
      className="place-card-container"
      onMouseEnter={() => handleMouseEnter(place)}
      onMouseLeave={() => handleMouseLeave()}
      ref={ref}
    >
      <div className="place-card-text-container">
        <h3
          style={place.id === state.currentPlace?.id ? currentPlaceStyle : {}}
        >
          {place.name}
        </h3>
        <p>{place.description}</p>
        {place.goToOrder.length > 0 && (
          <p>
            <span style={{ fontWeight: "bold" }}>Go to order:</span>{" "}
            {place.goToOrder.join(" + ")}
          </p>
        )}
      </div>
    </div>
  );
}

export default PlaceCard;
