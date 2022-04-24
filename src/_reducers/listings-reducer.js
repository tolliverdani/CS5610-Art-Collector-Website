import {
    FIND_ACTIVE_LISTINGS_BY_OWNER_ID,
    FIND_ACTIVE_LISTINGS_BY_ARTIST_ID,
    FIND_ACTIVE_LISTINGS_BY_PAINTING_ID,
    FIND_ALL_ACTIVE_LISTINGS
} from "../_actions/listings-actions";

const listingsReducer = (state = [], action) => {
    console.log(action.type)

    switch ( action.type ){
        case FIND_ACTIVE_LISTINGS_BY_PAINTING_ID:
            return action.listings.filter(listing => listing.active_listing === true);
        case FIND_ACTIVE_LISTINGS_BY_OWNER_ID:
            return action.listings.filter(listing => listing.active_listing === true);
        case FIND_ACTIVE_LISTINGS_BY_ARTIST_ID:
            return action.listings.filter(listing => listing.active_listing === true);
        case FIND_ALL_ACTIVE_LISTINGS:
            return action.listings.filter(listing => listing.active_listing === true);
        default:
            return state
    }
}

export default listingsReducer;