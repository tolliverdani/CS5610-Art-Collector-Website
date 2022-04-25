import * as service from "../_services/user-service"
import {useProfile} from "../_context/profile-context";


export const updateProfile = async (profile) => {
    const updated_profile = await service.updateUser(profile);
    console.log("here is the updated profile that we should push to the context" + JSON.stringify(profile, undefined, 4))
}