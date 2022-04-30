import {FIND_PRICE_HISTORY_ALL_OFFERS_BY_PAINTING_ID} from "../_actions/offers-actions";

const offersHistoryReducer = (state = [{"date": new Date(), "price": 200}], action) => {

    switch (action.type) {
        case FIND_PRICE_HISTORY_ALL_OFFERS_BY_PAINTING_ID:
            return action.offers.map(offer => {
                const temp_date = new Date(offer.date_created);
                const date_for_chart = new Date(temp_date.getFullYear() + "/" + temp_date.getMonth() + "/" + temp_date.getDate())
                return {date: date_for_chart, price: offer.offer_price}
            })
        default:
            return state
    }
}

export default offersHistoryReducer;