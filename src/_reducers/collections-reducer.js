import {UPDATE_COLLECTION, FIND_USER_COLLECTION, ADD_TO_USER_COLLECTION} from "../_actions/collections-actions";

const collectionsReducer = (state= [], action) => {
    switch ( action.type ){
        case UPDATE_COLLECTION:
            return state.map(collection => collection._id === action.collection._id ? action.collection : collection)
        case FIND_USER_COLLECTION:
            return action.collection;
        case ADD_TO_USER_COLLECTION:
            return [action.added_item, ...state];
        default:
            return state;
    }
}

export default collectionsReducer;