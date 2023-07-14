import { AppDispatch } from "app/models";
import {
  endLoadingAC,
  setAuthAC,
  setErrorAC,
  setUserAC,
  startLoadingAC,
} from "shared/model";
import AuthService from "shared/model/services/AuthService";

export const registration = (email: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(startLoadingAC());
    try {
      const response = await AuthService.registration(email, password);
      localStorage.setItem("token", response.data.accessToken);
      dispatch(setAuthAC(true));
      dispatch(setUserAC(response.data.user));
    } catch (e) {
      dispatch(setErrorAC(e.response?.data?.message));
    } finally {
      dispatch(endLoadingAC());
    }
  };
};
