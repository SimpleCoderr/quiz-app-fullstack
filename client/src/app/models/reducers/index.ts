import { combineReducers } from "redux";
import { quizReducer } from "./quizReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
  app: appReducer,
  quiz: quizReducer,
});
