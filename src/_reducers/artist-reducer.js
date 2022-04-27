import {
    ARTIST_GENERAL_SEARCH,
    ARTIST_DETAILS, UPDATED_ARTISTS
} from "../_actions/artpieces-actions";

const artistReducer = (state = [], action) => {

    switch (action.type) {
        case ARTIST_GENERAL_SEARCH:
            return action.artist_general_search;
        case ARTIST_DETAILS:
            return action.artist_details;
        case UPDATED_ARTISTS:
            return action.updated_artists
        default:
            return state;
    }
}

export default artistReducer;