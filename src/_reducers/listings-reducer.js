import {
    FIND_ACTIVE_LISTINGS_BY_OWNER_ID,
    FIND_ACTIVE_LISTINGS_BY_ARTIST_ID,
    FIND_ACTIVE_LISTINGS_BY_PAINTING_ID,
    FIND_ALL_ACTIVE_LISTINGS,
    CREATE_LISTING, FIND_ALL_LISTINGS
} from "../_actions/listings-actions";
import {APPROVE_OFFER} from "../_actions/offers-actions";

const listingsReducer = (state = [], action) => {
    // console.log("In listing reducer. This is the action type: " + action.type)

    switch ( action.type ){
        case CREATE_LISTING:
            return [...state, action.inserted_listing];
        case APPROVE_OFFER:
            return state.filter(listing => listing._id !== action.listing_id);
        case FIND_ALL_LISTINGS:
            return action.listings;
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