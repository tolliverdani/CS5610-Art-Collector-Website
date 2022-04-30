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
            //console.log("in find all comments")
            return action.comments;
        case FIND_ARTIST_COMMENTS:
            //console.log("in find artist comments")
            return action.comments;
        case FIND_PAINTING_COMMENTS:
            //console.log("in find painting comments")
            return action.comments;
        case DELETE_COMMENT:
            return state.filter(comment => comment._id !== action.comment._id);
        case CREATE_COMMENT:
            //console.log("in create comment")
            return [action.newComment, ...state];
        case UPDATE_COMMENT:
            return state.map(comment => comment._id === action.comment._id ? action.comment : comment);
        default:
            return state
    }
}

export default commentsReducer;