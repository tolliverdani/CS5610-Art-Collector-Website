import {
    GENERAL_SEARCH,
    FIND_PAINTINGS_BY_ARTIST,
    RANDOM_PAINTINGS,
    ARTIST_DETAILS,
    UPDATED_ARTISTS,
    PAINTING_DETAILS
} from "../_actions/artpieces-actions";

const paintingsReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_PAINTINGS_BY_ARTIST:
            return action.all_paintings_by_artist;
        case GENERAL_SEARCH:
            return action.general_search;
        case RANDOM_PAINTINGS:
            return action.random_paintings;
        case PAINTING_DETAILS:
            return action.painting_details;
        case UPDATED_ARTISTS:
            return action.updated_artists;
        default:
            return state;
    }
}

export default paintingsReducer;