import { Place } from "../CityMap/types";
import PlaceCard from "./PlaceCard";
import "./style.css";

type PlacesSidebarProps = {
  data: any;
};
export function PlaceSidebar({ data }: PlacesSidebarProps) {
  return (
    <div className="place-sidebar-container">
      {data.places.map((place: Place) => {
        return (
          <div>
            <PlaceCard place={place} />
          </div>
        );
      })}
    </div>
  );
}
