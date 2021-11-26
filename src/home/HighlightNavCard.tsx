import { NavSection } from "../utility/types";
import { HighlightImage } from "./HighlightImage";
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
    <>
      <HighlightImage name={name} />
      <div className="highlight-nav-card">
        <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {name}
        </span>
      </div>
    </>
  );
}
