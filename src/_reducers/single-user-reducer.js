import {FIND_USER_BY_ID} from "../_actions/users-actions";

const usersReducer = (state = {}, action) => {

    switch (action.type) {
        case FIND_USER_BY_ID:
            return action.user
        default:
            return state
    }
}

export default usersReducer;