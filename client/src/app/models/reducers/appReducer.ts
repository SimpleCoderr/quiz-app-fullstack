import { appInitialState } from "../initStates/appInitState";


export const appReducer = (
    state = appInitialState,
    action: any,
) : typeof appInitialState => {
    switch(action.type) {
        default:
            return state
    }
}