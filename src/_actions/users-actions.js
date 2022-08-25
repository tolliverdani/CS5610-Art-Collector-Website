import * as service from "../_services/user-service"
import * as security from "../_services/auth-service"

export const FIND_USER_BY_ID = "FIND_USER_BY_ID"
export const FIND_ALL_USERS = "FIND_ALL_USERS"
export const ADMIN_UPDATE_PROFILE = "ADMIN_UPDATE_PROFILE"
export const UPDATE_PROFILE = "UPDATE_PROFILE"
export const ADMIN_DELETE_USER = "ADMIN_DELETE_USER"

export const adminDeleteUser = async (dispatch, user_id) => {
    try {
        const status = await service.deleteUser(user_id);
        if (status === 200) {
            dispatch({
                type: ADMIN_DELETE_USER,
                user_id
            })
        }
    } catch (e) {

    }
}

export const findUserById = async (dispatch, user_id) => {
    try {
        const user = await service.findUserById(user_id)
        dispatch({
            type: FIND_USER_BY_ID,
            user
        })
    } catch (e) {

    }
}

export const updateProfile = async (dispatch, user) => {
    try {
        await security.update(user);
        dispatch({
            type: UPDATE_PROFILE,
            user
        })
    } catch (e) {

    }
}

export const adminUpdateProfile = async (dispatch, user) => {
    try {
        const response = await service.updateUser(user);
        if (response === "OK") {
            dispatch({
                type: ADMIN_UPDATE_PROFILE,
                user
            })
        }
    } catch (e) {

    }
}

export const findAllUsers = async (dispatch) => {
    try {
        const users = await service.findAllUsers()
        dispatch({
            type: FIND_ALL_USERS,
            users
        })
    } catch (e) {

    }
}