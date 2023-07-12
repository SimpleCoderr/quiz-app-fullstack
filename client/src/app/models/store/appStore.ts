import { legacy_createStore } from "redux";
import { rootReducer } from "../reducers";


export const store = legacy_createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch