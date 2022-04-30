import * as service from "../_services/auth-service"

export const UPDATE_PROFILE = "UPDATE_PROFILE"
export const LOG_IN = "LOG_IN"
export const SIGN_UP = "SIGN_UP"
export const GET_PROFILE = "GET_PROFILE"
export const LOGOUT = "LOGOUT"
export const CHECK_LOGGED_IN = "CHECK_LOGGED_IN"

export const getProfile = async (dispatch) => {
    const profile = await service.profile();
    dispatch({
        type: GET_PROFILE,
        profile
    })
    return profile
}

export const checkLoggedIn = async (dispatch) => {
    try {
        const profile = await service.profile()
        dispatch({
            type: CHECK_LOGGED_IN,
            profile
        })
        return profile
    } catch (e) {
        dispatch({
            type: CHECK_LOGGED_IN,
            profile: null
        })
        return null
    }
}

export const update = async (dispatch, user) => {
    const profile = await service.update(user);
    if (profile === "OK") {
        dispatch({
            type: UPDATE_PROFILE,
            profile
        })
    }
}


export const login = async (dispatch, email, password) => {
    const profile = await service.login(email, password);
    dispatch({
        type: LOG_IN,
        profile
    })
}

export const signup = async (dispatch, email, username, password) => {
    const profile = await service.signup(email, username, password);
    dispatch({
        type: SIGN_UP,
        profile
    })
}

export const logout = async (dispatch) => {
    const profile = await service.logout();
    dispatch({
        type: LOGOUT,
        profile
    })
}