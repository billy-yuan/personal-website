import { Place } from "../CityMap/types";
import Filter from "./Filter";
import PlaceCard from "./PlaceCard";
import "./style.css";

type PlacesSidebarProps = {
  data: any;
};
export function PlaceSidebar({ data }: PlacesSidebarProps) {
  return (
    <div className="place-sidebar-container">
      <Filter />
      {data.places.map((place: Place) => {
        return <PlaceCard place={place} />;
      })}
    </div>
  );
}
