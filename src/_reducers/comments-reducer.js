import {
    CREATE_COMMENT,
    DELETE_COMMENT,
    UPDATE_COMMENT,
    FIND_ALL_COMMENTS,
    FIND_ARTIST_COMMENTS,
    FIND_PAINTING_COMMENTS
} from "../_actions/comments-actions";

const commentsReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL_COMMENTS:
            return action.comments;
        case FIND_ARTIST_COMMENTS:
            return action.comments;
        case FIND_PAINTING_COMMENTS:
            return action.comments;
        case DELETE_COMMENT:
            return state.filter(comment => comment._id !== action.comment._id);
        case CREATE_COMMENT:
            return [action.newComments, ...state];
        case UPDATE_COMMENT:
            return state.map(comment => comment._id === action.comment._id ? action.comment : comment);
        default:
            return state
    }
}

export default commentsReducer;