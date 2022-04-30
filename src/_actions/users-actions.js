import * as service from "../_services/user-service"

export const FIND_USER_BY_ID = "FIND_USER_BY_ID"
export const FIND_ALL_USERS = "FIND_ALL_USERS"
export const ADMIN_UPDATE_PROFILE = "ADMIN_UPDATE_PROFILE"
export const UPDATE_PROFILE = "UPDATE_PROFILE"
export const ADMIN_DELETE_USER = "ADMIN_DELETE_USER"

export const adminDeleteUser = async (dispatch, user_id) => {
    console.log("In user actions. In adminDeleteUser");
    const status = await service.deleteUser(user_id);
    if ( status === 200 ){
        dispatch({
            type: ADMIN_DELETE_USER,
            user_id
        })
    }
}

export const findUserById = async (dispatch, user_id) => {
    console.log("In user actions. In findUserById");
    const user = await service.findUserById(user_id)
    dispatch ({
        type: FIND_USER_BY_ID,
        user
    })
}

export const updateProfile = async (dispatch, user) => {
    console.log("Inside updateProfile. This is the user that is going to be dispatched: " + JSON.stringify(user,undefined,4))
    const updated_profile = await service.updateUser(user);
    console.log("Inside updateProfile. This is the user that was returned: " + JSON.stringify(updated_profile,undefined,4))

    dispatch ({
        type: UPDATE_PROFILE,
        user
    })
}
export const adminUpdateProfile = async (dispatch, user) => {
    const response = await service.updateUser(user);
    if ( response === "OK" ) {
        console.log("In Admin Update Profile. Passing this user to the reducer: " + JSON.stringify(user, undefined, 4))
        dispatch({
            type: ADMIN_UPDATE_PROFILE,
            user
        })
    }
}

export const findAllUsers = async (dispatch) => {
    const users = await service.findAllUsers()
    dispatch ({
        type: FIND_ALL_USERS,
        users
    })
}