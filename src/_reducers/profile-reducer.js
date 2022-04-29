import {UPDATE_PROFILE, GET_PROFILE, LOGOUT, LOG_IN, SIGN_UP, CHECK_LOGGED_IN} from "../_actions/profile-actions";

const profileReducer = (state =
                            {
                                _id: null,
                                email: "",
                                username: "",
                                password: "",
                                joined: Date.now(),
                                rating: 0,
                                collection_id: "",
                                reviewed_privacy_policy: false,
                                location: "Earth",
                                bio: "",
                                pronoun: "",
                                icon: "",
                                is_admin: false,
                                is_artist: false,
                                artist_id: "",
                            }, action) => {
    switch (action.type) {
        case SIGN_UP:
            return action.profile
        case LOG_IN:
            return action.profile
        case LOGOUT:
            return state;
        case GET_PROFILE:
            return action.profile
        case CHECK_LOGGED_IN:
            return action.profile
        case UPDATE_PROFILE:
            return action.profile
        default:
            return state;
    }
}

export default profileReducer;