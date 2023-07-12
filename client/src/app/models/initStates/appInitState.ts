type AppStateType = {
    isLogged: boolean;
    isLoading: boolean;
    error:  null | string
}

export const appInitialState: AppStateType = {
    isLogged: false,
    isLoading: false,
    error: null
}