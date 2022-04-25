import * as service from "../_services/user-service"

export const FIND_USER_BY_ID = "FIND_USER_BY_ID"

export const findUserById = async (user_id, dispatch) => {
    const user = await service.findUserById(user_id)
    dispatch ({
        type: FIND_USER_BY_ID,
        user
    })
}

export const updateProfile = async (profile) => {
    const updated_profile = await service.updateUser(profile);
    console.log("here is the updated profile that we should push to the context" + JSON.stringify(profile, undefined, 4))
}