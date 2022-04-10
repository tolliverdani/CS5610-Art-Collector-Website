import {
    ARTIST_GENERAL_SEARCH
} from "../_actions/artpieces-actions";

const artistReducer = (state = [], action) => {
    switch (action.type) {
        case ARTIST_GENERAL_SEARCH:
            return action.artist_general_search;
        default:
            return state;
    }
}

export default artistReducer;