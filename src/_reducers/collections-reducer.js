import {UPDATE_COLLECTION, FIND_USER_COLLECTION} from "../_actions/collections-actions";

const collectionsReducer = (state= {
    "_id": "",
    "user_id": "",
    "contents": [],
    "__v": 0

}, action) => {
    switch ( action.type ){
        case UPDATE_COLLECTION:
            return state.map(collection => collection._id === action.collection._id ? action.collection : collection)
        case FIND_USER_COLLECTION:
            return action.collection;
        default:
            return state;
    }
}

export default collectionsReducer;