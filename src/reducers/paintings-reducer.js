import {
    ARTIST_GENERAL_SEARCH,
    FIND_PAINTINGS_BY_ARTIST,
    RANDOM_PAINTINGS,
    ARTIST_DETAILS,
    UPDATED_ARTISTS
} from "../actions/artpieces-actions";

const paintingsReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_PAINTINGS_BY_ARTIST:
            return action.all_paintings_by_artist;
        case ARTIST_GENERAL_SEARCH:
            return action.artist_general_search;
        case RANDOM_PAINTINGS:
            return action.random_paintings;
        case ARTIST_DETAILS:
            return action.artist_details;
        case UPDATED_ARTISTS:
            return action.updated_artists;
        default:
            return [];
    }
}

export default paintingsReducer;