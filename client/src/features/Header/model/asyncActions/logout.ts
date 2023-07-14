import { AppDispatch } from "app/models"
import { endLoadingAC, setAuthAC, setErrorAC, setUserAC, startLoadingAC } from "shared/model"
import AuthService from "shared/model/services/AuthService"
import { IUser } from "shared/types"

export const logout = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(startLoadingAC())
        try {
            const response = await AuthService.logout()
            console.log(response)
            localStorage.removeItem('token')
            dispatch(setAuthAC(false))
            dispatch(setUserAC({} as IUser))
        } catch (e) {
            dispatch(setErrorAC(e.response?.data?.message))
        }
        finally {
            dispatch(endLoadingAC())

        }

    }
}