import * as service from "../_services/artist-service";

export const UPDATED_ARTISTS = 'UPDATED_ARTISTS';

const newArtistsReducer = (state =
                               {
                                   "data": [],
                                   "paginationToken": "",
                                   "hasMore": false
                               }, action) => {
    switch (action.type) {

        case UPDATED_ARTISTS:
            return action.updated_artists;
        default:
            return state;
    }
}

export default newArtistsReducer;