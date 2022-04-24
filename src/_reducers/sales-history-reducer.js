import {FIND_SOLD_PRICE_HISTORY_BY_PAINTING_ID} from "../_actions/listings-actions";

const saleHistoryReducer = (state = [{"date": new Date(), "price": 200}], action) => {
    console.log("We are in the offersHistory reducer. This is the action type: " + action.type)

    switch (action.type) {
        case FIND_SOLD_PRICE_HISTORY_BY_PAINTING_ID:
            const price_history = action.listings.map(listing => {
                const temp_date = new Date(listing.date_removed);
                const date_for_chart = new Date(temp_date.getFullYear() + "/" + temp_date.getMonth() + "/" + temp_date.getDate())
                return {date: date_for_chart, price: listing.sale_price}
            })
            console.log(price_history)
            return price_history
        default:
            return state
    }
}

export default saleHistoryReducer;