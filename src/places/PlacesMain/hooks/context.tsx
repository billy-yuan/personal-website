import React, { createContext, useContext, useReducer } from "react";
import { initialState, PlacesAction, PlacesState, reducer } from "./reducer";

const CurrentPlaceContext = createContext<{
  state: PlacesState;
  dispatch: React.Dispatch<PlacesAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

function CurrentPlaceProvider({ children }: any) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CurrentPlaceContext.Provider value={{ state, dispatch }}>
      {children}
    </CurrentPlaceContext.Provider>
  );
}

const useCurrentPlaceContext = () => useContext(CurrentPlaceContext);

export { CurrentPlaceProvider, useCurrentPlaceContext };
