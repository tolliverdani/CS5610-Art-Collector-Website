import {ADMIN_DELETE_USER, ADMIN_UPDATE_PROFILE, FIND_ALL_USERS} from "../_actions/users-actions";

const usersReducer = (state = [], action) => {

    switch (action.type) {
        case ADMIN_DELETE_USER:
            return state.filter(user => user._id !== action.user_id)
        case FIND_ALL_USERS:
            const unsorted_all = action.users;
            return unsorted_all.sort((a, b) => {
                if (a.username > b.username) {
                    return 1;
                } else if (a.username.toLowerCase() < b.username.toLowerCase()) {
                    return -1;
                }
                return 0;
            })
        case ADMIN_UPDATE_PROFILE:
            const unsorted = state.map(user => user._id === action.user._id ? action.user : user)
            return unsorted.sort((a, b) => {
                if (a.username > b.username) {
                    return 1;
                } else if (a.username.toLowerCase() < b.username.toLowerCase()) {
                    return -1;
                }
                return 0;
            })
        default:
            return state
    }
}

export default usersReducer;