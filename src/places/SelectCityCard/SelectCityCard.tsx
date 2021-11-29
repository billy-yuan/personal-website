import { COLORS } from "../../utility/colors";
import { url } from "../../utility/utility";
import "./style.css";

type SelectCityCardProps = {
  city: string;
  imageUrl: string;
};
export function SelectCityCard({ city, imageUrl }: SelectCityCardProps) {
  const baseStyle = { color: COLORS.white };

  return (
    <div className="select-city-card-container" style={baseStyle}>
      <div style={{ backgroundImage: url(imageUrl) }}>
        <h2>{city}</h2>
      </div>
    </div>
  );
}
