import { AUTH_SET, ERROR_CLEAN, ERROR_SET, LOADING_END, LOADING_START, USER_SET } from "shared/model";
import { IAppAction } from "../actionTypes/AppActionTypes";
import { appInitialState } from "../initStates/appInitState";

export const appReducer = (
  state = appInitialState,
  action: IAppAction
): typeof appInitialState => {
  switch (action.type) {
    case LOADING_START:
      return { ...state, isLoading: true };
    case LOADING_END:
      return { ...state, isLoading: false };
    case ERROR_SET:
      console.log(action.payload)
        return {...state, error: action.payload}
    case ERROR_CLEAN:
        return {...state, error: null}
    case USER_SET:
        return {...state, user: action.payload}
    case AUTH_SET:
        return {...state, isLogged: action.payload}
    default:
      return state;
  }
};
