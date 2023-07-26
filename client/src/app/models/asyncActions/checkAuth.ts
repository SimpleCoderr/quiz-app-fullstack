import axios from "axios";
import {
  API_URL,
  endLoadingAC,
  setAuthAC,
  setErrorAC,
  setUserAC,
  startLoadingAC,
} from "shared/model";
import { AuthResponse } from "shared/types";
import { AppDispatch } from "../store/appStore";

export const checkAuth = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(startLoadingAC());
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });

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
