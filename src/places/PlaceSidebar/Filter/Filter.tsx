import { useEffect } from "react";
import { usePlaceContext } from "../../PlacesMain/hooks/context";
import { PlacesActionType } from "../../PlacesMain/hooks/reducer";
import "./style.css";

type FilterProps = {
  filters: string[];
};

function Filter({ filters }: FilterProps) {
  const { state, dispatch } = usePlaceContext();
  // Initialize filters
  useSetFilter(filters);

  const handleClick = (filter: string) => {
    if (state.filter.includes(filter)) {
      dispatch({
        type: PlacesActionType.REMOVE_FILTER,
        payload: {
          filter: [filter],
        },
      });
    } else {
      dispatch({
        type: PlacesActionType.SET_FILTER,
        payload: {
          filter: [filter],
        },
      });
    }
  };

  return (
    <div className="filter-container">
      <div className="filter-header">Show me places for:</div>
      <div className="filter-options-container">
        {filters.map((filter) => {
          const style = state.filter.includes(filter)
            ? { fontWeight: "bold" }
            : {};
          return (
            <span
              style={style}
              key={`filter-${filter}`}
              className="filter-options"
              onClick={() => handleClick(filter)}
            >
              {filter}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function useSetFilter(filters: string[]) {
  const { dispatch } = usePlaceContext();
  useEffect(() => {
    dispatch({
      type: PlacesActionType.SET_FILTER,
      payload: {
        filter: filters,
      },
    });
  }, []);
}

export default Filter;
