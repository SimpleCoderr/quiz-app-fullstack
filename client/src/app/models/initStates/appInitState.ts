import { IUser } from "shared/types";

type AppStateType = {
  isLogged: boolean;
  isLoading: boolean;
  user: IUser;
  error: null | string;
};

export const appInitialState: AppStateType = {
  isLogged: false,
  isLoading: false,
  user: {} as IUser,
  error: null,
};
