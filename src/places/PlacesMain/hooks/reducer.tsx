import { Place } from "../../CityMap/types";

type PlacesState = {
  filter: string[];
  currentPlace: Place | null;
  clickedPlace: Place | null;
};

type PlacesAction = {
  type: PlacesActionType;
  payload: {
    currentPlace?: Place | null;
    filter?: string[];
    clickedPlace?: Place | null;
  };
};

enum PlacesActionType {
  "SET_PLACE",
  "SET_CLICKED_PLACE",
  "SET_FILTER",
  "REMOVE_FILTER",
}

const initialState: PlacesState = {
  filter: [],
  currentPlace: null,
  clickedPlace: null,
};

function reducer(state: PlacesState, action: PlacesAction): PlacesState {
  switch (action.type) {
    case PlacesActionType.SET_PLACE:
      if (action.payload.currentPlace !== undefined) {
        return {
          ...state,

          currentPlace: action.payload.currentPlace,
        };
      }
      throw new Error("Payload is missing currentPlace");
    case PlacesActionType.SET_CLICKED_PLACE:
      if (action.payload.clickedPlace !== undefined) {
        return {
          ...state,
          clickedPlace: action.payload.clickedPlace,
        };
      }
      throw new Error("Payload is mising clickedPlace");
    case PlacesActionType.SET_FILTER:
      if (action.payload.filter !== undefined) {
        return {
          ...state,
          filter: [...state.filter, ...action.payload.filter],
        };
      }
      throw new Error("Payload is missing filter");
    case PlacesActionType.REMOVE_FILTER:
      if (action.payload.filter !== undefined) {
        const filterToRemove = action.payload.filter[0];
        return {
          ...state,
          filter: state.filter.filter((item) => item !== filterToRemove),
        };
      }
      throw new Error("Payload is missing filter");
    default:
      throw new Error("Action type is not valid");
  }
}

export { PlacesActionType, reducer, initialState };
export type { PlacesState, PlacesAction };
