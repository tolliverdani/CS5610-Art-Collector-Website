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
    // console.log("We are in user actions. We are in the findUserById. Here is the userId: " + user_id)

    const user = await service.findUserById(user_id)
    // console.log("We are in user actions. We are in the findUserById. Here is the user: " + JSON.stringify(user,undefined,4))
    dispatch ({
        type: FIND_USER_BY_ID,
        user
    })
}

export const updateProfile = async (dispatch, user) => {
    console.log("inside updateProfile")
    const updated_profile = await service.updateUser(user);
    dispatch ({
        type: UPDATE_PROFILE,
        updated_profile
    })
}
export const adminUpdateProfile = async (dispatch, user) => {
    const updated_profile = await service.updateUser(user);
    dispatch ({
        type: ADMIN_UPDATE_PROFILE,
        user
    })
}

export const findAllUsers = async (dispatch) => {
    const users = await service.findAllUsers()
    dispatch ({
        type: FIND_ALL_USERS,
        users
    })
}