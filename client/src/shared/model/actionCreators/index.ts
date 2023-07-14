import { IUser } from "shared/types";
import {
  LOADING_START,
  LOADING_END,
  ERROR_SET,
  ERROR_CLEAN,
  AUTH_SET,
  USER_SET,
} from "./../types/index";

export const startLoadingAC = () => ({ type: LOADING_START });
export const endLoadingAC = () => ({ type: LOADING_END });

export const setErrorAC = (error: string) => ({
  type: ERROR_SET,
  payload: error,
});
export const cleanErrorAC = () => ({ type: ERROR_CLEAN });

export const setAuthAC = (isAuth: boolean) => ({
  type: AUTH_SET,
  payload: isAuth,
});

export const setUserAC = (user: IUser) => ({
  type: USER_SET,
  payload: user,
});
