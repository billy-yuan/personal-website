import "./style.css";
import { Place } from "../../CityMap/types";
import { usePlaceContext } from "../../PlacesMain/hooks/context";
import { PlacesActionType } from "../../PlacesMain/hooks/reducer";

type PlaceCardProps = {
  place: Place;
};

function PlaceCard({ place }: PlaceCardProps) {
  const { state, dispatch } = usePlaceContext();
  const currentPlaceStyle = { textDecoration: "underline" };

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
