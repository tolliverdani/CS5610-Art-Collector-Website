import * as service from "../_services/user-service"

export const FIND_USER_BY_ID = "FIND_USER_BY_ID"
export const FIND_ALL_USERS = "FIND_ALL_USERS"

export const findUserById = async (dispatch, user_id) => {
    // console.log("We are in user actions. We are in the findUserById. Here is the userId: " + user_id)

    const user = await service.findUserById(user_id)
    // console.log("We are in user actions. We are in the findUserById. Here is the user: " + JSON.stringify(user,undefined,4))
    dispatch ({
        type: FIND_USER_BY_ID,
        user
    })
}

export const updateProfile = async (profile) => {
    const updated_profile = await service.updateUser(profile);
    // console.log("here is the updated profile that we should push to the context" + JSON.stringify(profile, undefined, 4))
}

export const findAllUsers = async (dispatch) => {
    const users = await service.findAllUsers()
    dispatch ({
        type: FIND_ALL_USERS,
        users
    })
}