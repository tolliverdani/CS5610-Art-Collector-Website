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
} from "../_actions/offers-actions";

const offersReducer = (state = [{"date": new Date(), "price": 200}], action) => {
    console.log("We are in the offers reducer. This is the action type: " + action.type)

    switch (action.type) {
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