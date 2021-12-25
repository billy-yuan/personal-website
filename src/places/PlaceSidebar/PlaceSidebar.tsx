import { Place } from "../CityMap/types";
import PlaceCard from "./PlaceCard";
import "./style.css";

type PlacesSidebarProps = {
  data: any;
};
export function PlaceSidebar({ data }: PlacesSidebarProps) {
  return (
    <div className="place-sidebar-container">
      <div className="place-cards-container">
        {data.places.map((place: Place) => {
          return <PlaceCard place={place} />;
        })}
      </div>
      {/* place-card-excess is so there is space between 
      the last card and the footer. 
      It makes the scrolling experience smoother when the user 
      is on the bottom of the page*/}
      <div className="place-card-excess" />
    </div>
  );
}
