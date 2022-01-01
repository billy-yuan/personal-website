import { url } from "../../utility/utility";
import "./style.css";

type SelectCityCardProps = {
  city: string;
  imageUrl: string;
};
export function SelectCityCard({ city, imageUrl }: SelectCityCardProps) {
  return (
    <div className="select-city-card-container">
      <div style={{ backgroundImage: url(imageUrl) }}></div>
      <p>{city}</p>
    </div>
  );
}
