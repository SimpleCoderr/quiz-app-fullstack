import { legacy_createStore, applyMiddleware, AnyAction } from "redux";
import { rootReducer } from "../reducers";
import { ThunkDispatch } from "redux-thunk";
import thunk from "redux-thunk";


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
const state = store.getState()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<typeof state, any, AnyAction>