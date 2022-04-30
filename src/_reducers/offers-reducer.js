import {
    FIND_ACTIVE_OFFERS_BY_ARTIST_ID,
    FIND_ACTIVE_OFFERS_BY_BIDDER_ID,
    FIND_ACTIVE_OFFERS_BY_PAINTING_ID,
    FIND_ACTIVE_OFFERS_BY_SELLER_ID,
    FIND_ALL_OFFERS_BY_ARTIST_ID,
    FIND_ALL_OFFERS_BY_BIDDER_ID,
    FIND_ALL_OFFERS_BY_PAINTING_ID,
    FIND_ALL_OFFERS_BY_SELLER_ID,
    FIND_INACTIVE_OFFERS_BY_ARTIST_ID,
    FIND_INACTIVE_OFFERS_BY_BIDDER_ID,
    FIND_INACTIVE_OFFERS_BY_PAINTING_ID,
    FIND_INACTIVE_OFFERS_BY_SELLER_ID,
    APPROVE_OFFER, CREATE_OFFER, REJECT_OFFER, FIND_ALL_OFFERS, UPDATE_OFFER, DELETE_OFFER
} from "../_actions/offers-actions";

const offersReducer = (state = [], action) => {

    switch (action.type) {
        case DELETE_OFFER:
            return state.filter(offer => offer._id !== action.offer_id)
        case UPDATE_OFFER:
            return state.map(offer => offer._id === action.updated_offer._id ? action.updated_offer : offer)
        case CREATE_OFFER:
            return [...state, action.inserted_offer]
        case APPROVE_OFFER:
            return state.filter(offer => offer.listing_id !== action.listing_id)
        case REJECT_OFFER:
            return state.filter(offer => offer._id !== action.offer._id)
        case FIND_ALL_OFFERS:
            return action.offers;
        case FIND_ALL_OFFERS_BY_PAINTING_ID:
            return action.offers;
        case FIND_ALL_OFFERS_BY_ARTIST_ID:
            return action.offers;
        case FIND_ALL_OFFERS_BY_BIDDER_ID:
            return action.offers;
        case FIND_ALL_OFFERS_BY_SELLER_ID:
            return action.offers;
        case FIND_ACTIVE_OFFERS_BY_PAINTING_ID:
            return action.offers.filter(offer => offer.active_offer === true);
        case FIND_ACTIVE_OFFERS_BY_ARTIST_ID:
            return action.offers.filter(offer => offer.active_offer === true);
        case FIND_ACTIVE_OFFERS_BY_BIDDER_ID:
            return action.offers.filter(offer => offer.active_offer === true);
        case FIND_ACTIVE_OFFERS_BY_SELLER_ID:
            return action.offers.filter(offer => offer.active_offer === true);
        case FIND_INACTIVE_OFFERS_BY_PAINTING_ID:
            return action.offers.filter(offer => offer.active_offer === false);
        case FIND_INACTIVE_OFFERS_BY_ARTIST_ID:
            return action.offers.filter(offer => offer.active_offer === false);
        case FIND_INACTIVE_OFFERS_BY_BIDDER_ID:
            return action.offers.filter(offer => offer.active_offer === false);
        case FIND_INACTIVE_OFFERS_BY_SELLER_ID:
            return action.offers.filter(offer => offer.active_offer === false);
        default:
            return state
    }
}

export default offersReducer;