import { Place } from "../../CityMap/types";

type PlacesState = {
  filter: string[];
  currentPlace: Place | null;
};

type PlacesAction = {
  type: PlacesActionType;
  payload: {
    currentPlace: Place;
    filter: string[];
  };
};

enum PlacesActionType {
  "SET_FILTER",
}

const initialState: PlacesState = {
  filter: [],
  currentPlace: null,
};

function reducer(state: PlacesState, action: PlacesAction): PlacesState {
  switch (action.type) {
    case PlacesActionType.SET_FILTER:
      return { ...state, filter: action.payload.filter };
    default:
      return { ...state };
  }
}

export { reducer, initialState };
export type { PlacesState, PlacesAction };
