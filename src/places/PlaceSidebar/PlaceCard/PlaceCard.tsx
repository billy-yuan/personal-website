import "./style.css";
import { Place } from "../../CityMap/types";

type PlaceCardProps = {
  place: Place;
};

function PlaceCard({ place }: PlaceCardProps) {
  return (
    <div className="place-card-container">
      <div className="place-card-text-container">
        <h3>{place.name}</h3>
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
