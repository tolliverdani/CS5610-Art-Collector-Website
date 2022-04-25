import {FIND_ALL_USERS} from "../_actions/users-actions";

const usersReducer = (state = [], action) => {
    // console.log("In users reducer. This is the action type: " + action.type)

    switch (action.type) {
        case FIND_ALL_USERS:
            return action.users;
        default:
            return state
    }
}

export default usersReducer;