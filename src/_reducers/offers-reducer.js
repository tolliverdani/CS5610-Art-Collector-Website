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
    FIND_PRICE_HISTORY_ALL_OFFERS_BY_PAINTING_ID
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
        case "FIND_PRICE_HISTORY_ALL_OFFERS_BY_PAINTING_ID":
            const price_history = action.offers.map(offer => {
                const temp_date = new Date(offer.date_created);
                const date_for_chart = new Date(temp_date.getFullYear() + "/" + temp_date.getMonth() + "/" + temp_date.getDate())
                return {date: date_for_chart, price: offer.offer_price}})
            return price_history.sort((a, b) => {
                return a.date - b.date;
            });
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