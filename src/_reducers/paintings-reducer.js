import {
    GENERAL_SEARCH,
    FIND_PAINTINGS_BY_ARTIST,
    RANDOM_PAINTINGS,
    UPDATED_ARTISTS,
    PAINTING_DETAILS,
    FIND_MORE_PAINTINGS_BY_ARTIST
} from "../_actions/artpieces-actions";

// setting this reducer to the standard return format of the wikiart API
const paintingsReducer = (state = {"data":[], "paginationToken": "", "hasMore": false}, action) => {
    switch (action.type) {
        case FIND_PAINTINGS_BY_ARTIST:
            return action.paintings_by_artist;
        case FIND_MORE_PAINTINGS_BY_ARTIST:
            return {...state, data: [...state.data, ...action.paintings_by_artist.data],
                              paginationToken: action.paintings_by_artist.paginationToken,
                              hasMore: action.paintings_by_artist.hasMore};
        case GENERAL_SEARCH:
            return action.general_search;
        case RANDOM_PAINTINGS:
            return action.random_paintings;
        case PAINTING_DETAILS:
            // TODO spearate?
            return {...action.painting_details, data: []};
        case UPDATED_ARTISTS:
            return action.updated_artists;
        default:
            return state;
    }
}

export default paintingsReducer;