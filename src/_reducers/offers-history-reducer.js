import {
       FIND_PRICE_HISTORY_ALL_OFFERS_BY_PAINTING_ID
} from "../_actions/offers-actions";

const offersHistoryReducer = (state = [{"date": new Date(), "price": 200}], action) => {
    console.log("We are in the offersHistory reducer. This is the action type: " + action.type)

    switch (action.type) {
        case FIND_PRICE_HISTORY_ALL_OFFERS_BY_PAINTING_ID:
            const price_history = action.offers.map(offer => {
                const temp_date = new Date(offer.date_created);
                const date_for_chart = new Date(temp_date.getFullYear() + "/" + temp_date.getMonth() + "/" + temp_date.getDate())
                return {date: date_for_chart, price: offer.offer_price}})
            return price_history.sort((a, b) => {
                return a.date - b.date;
            });
        default:
            return state
    }
}

export default offersHistoryReducer;