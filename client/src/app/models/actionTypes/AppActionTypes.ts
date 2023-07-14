import {
  AUTH_SET,
  ERROR_CLEAN,
  ERROR_SET,
  LOADING_END,
  LOADING_START,
  USER_SET,
} from "shared/model";
import { IUser } from "shared/types";

type StartLoadingAction = {
  type: typeof LOADING_START;
};
type EndLoadingAction = {
  type: typeof LOADING_END;
};

type SetErrorAction = {
  type: typeof ERROR_SET;
  payload: string;
};

type CleanErrorAction = {
  type: typeof ERROR_CLEAN;
};

type SetAuthAction = {
  type: typeof AUTH_SET;
  payload: boolean;
};

type SetUserAction = {
  type: typeof USER_SET;
  payload: IUser;
};

export type IAppAction =
  | StartLoadingAction
  | EndLoadingAction
  | SetErrorAction
  | CleanErrorAction
  | SetAuthAction
  | SetUserAction;
