import { url } from "../../utility/utility";
import "./style.css";

type SelectProjectCardProps = {
  project: string;
  imageUrl: string;
};
export function SelectProjectCard({
  project,
  imageUrl,
}: SelectProjectCardProps) {
  return (
    <div className="select-project-card-container">
      <div style={{ backgroundImage: url(imageUrl) }}></div>
      <h3>{project}</h3>
    </div>
  );
}
