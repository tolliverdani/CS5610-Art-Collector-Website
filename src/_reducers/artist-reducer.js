import {
    ARTIST_GENERAL_SEARCH,
    ARTIST_DETAILS
} from "../_actions/artpieces-actions";

const artistReducer = (state = [], action) => {
    switch (action.type) {
        case ARTIST_GENERAL_SEARCH:
            return action.artist_general_search;
        case ARTIST_DETAILS:
            return action.artist_details;
        default:
            return state;
    }
}

export default artistReducer;