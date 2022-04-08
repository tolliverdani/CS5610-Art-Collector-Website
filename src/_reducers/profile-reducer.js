import profile from "../data/profile.json";

const profileReducer = (state = profile, action) => {
    switch (action.type) {
        case "update-profile":
            return action.profileData;
        default:
            return state;
    }
}

export default profileReducer;