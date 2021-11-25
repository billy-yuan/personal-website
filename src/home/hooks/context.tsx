import { createContext, useContext, useReducer } from "react";
import { HomeAction, HomeState, initialState, reducer } from "./reducer";

type HomeContextValue = {
  state: HomeState;
  dispatch: React.Dispatch<HomeAction>;
};
const initialContextValue: HomeContextValue = {
  state: initialState,
  dispatch: () => {},
};

const HomeContext = createContext(initialContextValue);

export function HomeContextProvider({ children }: any) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <HomeContext.Provider value={{ state, dispatch }}>
      {children}
    </HomeContext.Provider>
  );
}

export const useHomeContext = () => useContext(HomeContext);
