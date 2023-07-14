import axios from "axios";
import {
  API_URL,
  endLoadingAC,
  setAuthAC,
  setErrorAC,
  setUserAC,
} from "shared/model";
import { AuthResponse } from "shared/types";
import { AppDispatch } from "../store/appStore";

export const checkAuth = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      console.log("asdfasdf");
      console.log(response);

      localStorage.setItem("token", response.data.accessToken);
      dispatch(setAuthAC(true));
      dispatch(setUserAC(response.data.user));
    } catch (e) {
      console.log(e.response?.data?.message);
      dispatch(setErrorAC(e.response?.data?.message));
    } finally {
        console.log('eeee')
      dispatch(endLoadingAC());
    }
  };
};
