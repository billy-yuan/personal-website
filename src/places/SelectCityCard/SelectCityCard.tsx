import { COLORS } from "../../utility/colors";
import "./style.css";

type SelectCityCardProps = {
  city: string;
  imageUrl?: string;
};
export function SelectCityCard({ city, imageUrl }: SelectCityCardProps) {
  const baseStyle = { color: COLORS.white };

  return (
    <div className="select-city-card-container" style={baseStyle}>
      {imageUrl && <img src={imageUrl} />}
      <div>
        <h2>{city}</h2>
      </div>
    </div>
  );
}
