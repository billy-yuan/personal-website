import { Place } from "../../CityMap/types";

type PlacesState = {
  filter: string[];
  currentPlace: Place | null;
  clickedPlace: Place | null;
  currentIndex: number;
};

type PlacesAction = {
  type: PlacesActionType;
  payload: {
    currentPlace?: Place | null;
    filter?: string[];
    clickedPlace?: Place | null;
    currentIndex?: number;
  };
};

enum PlacesActionType {
  "SET_PLACE",
  "SET_CLICKED_PLACE",
  "CLEAR_CLICKED_PLACE",
  "SET_FILTER",
  "REMOVE_FILTER",
  "SET_INDEX",
}

const initialState: PlacesState = {
  filter: [],
  currentPlace: null,
  clickedPlace: null,
  currentIndex: 0,
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
      if (
        action.payload.clickedPlace !== undefined &&
        action.payload.currentPlace !== undefined
      ) {
        return {
          ...state,
          currentPlace: action.payload.currentPlace,
          clickedPlace: action.payload.clickedPlace,
        };
      }
      throw new Error("Payload is mising clickedPlace");
    case PlacesActionType.CLEAR_CLICKED_PLACE:
      return { ...state, clickedPlace: null };
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
    case PlacesActionType.SET_INDEX:
      if (action.payload.currentIndex !== undefined) {
        return { ...state, currentIndex: action.payload.currentIndex };
      }
      throw new Error("Payload is missing currentIndex");
    default:
      throw new Error("Action type is not valid");
  }
}

export { PlacesActionType, reducer, initialState };
export type { PlacesState, PlacesAction };
