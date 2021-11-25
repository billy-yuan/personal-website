import { NavSection } from "../utility/types";
import { useHomeContext } from "./hooks/context";
import { HomeActionType } from "./hooks/reducer";

type HighlightNavCardProps = {
  name: NavSection;
};

export function HighlightNavCard({ name }: HighlightNavCardProps) {
  const { dispatch } = useHomeContext();

  const handleMouseEnter = () => {
    dispatch({ type: HomeActionType.UPDATE_NAV_MOUSEOVER, payload: name });
  };

  const handleMouseLeave = () => {
    dispatch({
      type: HomeActionType.UPDATE_NAV_MOUSEOVER,
      payload: NavSection.None,
    });
  };

  return (
    <div
      className="highlight-nav-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>{name}</span>
    </div>
  );
}
