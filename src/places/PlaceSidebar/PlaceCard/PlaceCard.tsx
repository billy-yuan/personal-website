import "./style.css";
import { Place } from "../../CityMap/types";

type PlaceCardProps = {
  place: Place;
};

function PlaceCard({ place }: PlaceCardProps) {
  return <div className="place-card-container">{place.name}</div>;
}

export default PlaceCard;
