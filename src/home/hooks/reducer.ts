import { NavSection } from "../../utility/types";

export type HomeState = {
  mouseoverNav: NavSection;
};

export enum HomeActionType {
  "UPDATE_NAV_MOUSEOVER",
}

export type HomeAction = {
  type: HomeActionType;
  payload: NavSection;
};

export const initialState: HomeState = {
  mouseoverNav: NavSection.None,
};

export function reducer(state: HomeState, action: HomeAction) {
  switch (action.type) {
    case HomeActionType.UPDATE_NAV_MOUSEOVER:
      return { ...state, mouseoverNav: action.payload };
    default:
      return { ...state };
  }
}
