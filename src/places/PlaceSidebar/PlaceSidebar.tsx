import { Place } from "../CityMap/types";
import Filter from "./Filter";
import PlaceCard from "./PlaceCard";
import "./style.css";
const exampleFilters = ["Work", "Coffee", "Catch up"];

type PlacesSidebarProps = {
  data: any;
};
export function PlaceSidebar({ data }: PlacesSidebarProps) {
  return (
    <div className="place-sidebar-container">
      <Filter filters={exampleFilters} />
      {data.places.map((place: Place) => {
        return <PlaceCard place={place} />;
      })}
    </div>
  );
}
