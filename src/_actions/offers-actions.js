import * as service from "../_services/offers-service"

export const FIND_ALL_OFFERS_BY_PAINTING_ID = "FIND_ALL_OFFERS_BY_PAINTING_ID"
export const FIND_PRICE_HISTORY_ALL_OFFERS_BY_PAINTING_ID = "FIND_PRICE_HISTORY_ALL_OFFERS_BY_PAINTING_ID"
export const FIND_ALL_OFFERS_BY_ARTIST_ID = "FIND_ALL_OFFERS_BY_PAINTING_ID"
export const FIND_ALL_OFFERS_BY_BIDDER_ID = "FIND_ALL_OFFERS_BY_OWNER_ID"
export const FIND_ALL_OFFERS_BY_SELLER_ID = "FIND_ALL_OFFERS_BY_OWNER_ID"
export const FIND_ACTIVE_OFFERS_BY_PAINTING_ID = "FIND_ACTIVE_OFFERS_BY_PAINTING_ID"
export const FIND_ACTIVE_OFFERS_BY_ARTIST_ID = "FIND_ACTIVE_OFFERS_BY_PAINTING_ID"
export const FIND_ACTIVE_OFFERS_BY_BIDDER_ID = "FIND_ACTIVE_OFFERS_BY_OWNER_ID"
export const FIND_ACTIVE_OFFERS_BY_SELLER_ID = "FIND_ACTIVE_OFFERS_BY_OWNER_ID"
export const FIND_INACTIVE_OFFERS_BY_PAINTING_ID = "FIND_INACTIVE_OFFERS_BY_PAINTING_ID"
export const FIND_INACTIVE_OFFERS_BY_ARTIST_ID = "FIND_INACTIVE_OFFERS_BY_PAINTING_ID"
export const FIND_INACTIVE_OFFERS_BY_BIDDER_ID = "FIND_INACTIVE_OFFERS_BY_OWNER_ID"
export const FIND_INACTIVE_OFFERS_BY_SELLER_ID = "FIND_INACTIVE_OFFERS_BY_OWNER_ID"
export const CREATE_OFFER = "CREATE_OFFER"
export const APPROVE_OFFER = "APPROVE_OFFER"
export const REJECT_OFFER = "REJECT_OFFER"


export const findAllOffersByPaintingId = async (dispatch, painting_id) => {
    ////console.log("In actions. About to find offers for id: " + painting_id)
    const offers = await service.findOffersByPaintingId(painting_id);
    ////console.log("Here is what we found: " + offers)
    dispatch ({
        type: FIND_ALL_OFFERS_BY_PAINTING_ID,
        offers
    })
}

export const findPriceHistoryAllOffersByPaintingId = async (dispatch, painting_id) => {
    ////console.log("In offers actions. In find price history on painting id: " + painting_id)
    const offers = await service.findOffersByPaintingId(painting_id);
    //console.log("In offers actions. Here are the returned offers: " + offers)
    dispatch ({
        type: FIND_PRICE_HISTORY_ALL_OFFERS_BY_PAINTING_ID,
        offers
    })
}

export const findAllOffersByArtistId = async (dispatch, artist_id) => {
    ////console.log("In actions. About to find offers for id: " + artist_id)
    const offers = await service.findOffersByArtistId(artist_id);
    ////console.log("Here is what we found: " + offers)
    dispatch ({
        type: FIND_ALL_OFFERS_BY_PAINTING_ID,
        offers
    })
}

export const findAllOffersBySellerId = async (dispatch, user_id) => {
    ////console.log("In find active offers by owner id")
    const offers = await service.findOffersBySellerId(user_id);
    dispatch ({
        type: FIND_ALL_OFFERS_BY_SELLER_ID,
        offers
    })
}

export const findAllOffersByBidderId = async (dispatch, user_id) => {
    const offers = await service.findOffersByBidderId(user_id);
    dispatch ({
        type: FIND_ALL_OFFERS_BY_BIDDER_ID,
        offers
    })
}

export const findActiveOffersByPaintingId = async (dispatch, painting_id) => {
    ////console.log("In actions. About to find offers for id: " + painting_id)
    const offers = await service.findOffersByPaintingId(painting_id);
    ////console.log("Here is what we found: " + offers)
    dispatch ({
        type: FIND_ACTIVE_OFFERS_BY_PAINTING_ID,
        offers
    })
}

export const findActiveOffersByArtistId = async (dispatch, artist_id) => {
    ////console.log("In actions. About to find offers for id: " + artist_id)
    const offers = await service.findOffersByArtistId(artist_id);
    ////console.log("Here is what we found: " + offers)
    dispatch ({
        type: FIND_ACTIVE_OFFERS_BY_PAINTING_ID,
        offers
    })
}

export const findActiveOffersBySellerId = async (dispatch, user_id) => {
    ////console.log("In find active offers by owner id")
    const offers = await service.findOffersBySellerId(user_id);
    dispatch ({
        type: FIND_ACTIVE_OFFERS_BY_SELLER_ID,
        offers
    })
}

export const findActiveOffersByBidderId = async (dispatch, user_id) => {
    ////console.log("In find active offers by user id")
    const offers = await service.findOffersByBidderId(user_id);
    dispatch ({
        type: FIND_ACTIVE_OFFERS_BY_BIDDER_ID,
        offers
    })
}

export const findInactiveOffersByPaintingId = async (dispatch, painting_id) => {
    ////console.log("In actions. About to find offers for id: " + painting_id)
    const offers = await service.findOffersByPaintingId(painting_id);
    ////console.log("Here is what we found: " + offers)
    dispatch ({
        type: FIND_INACTIVE_OFFERS_BY_PAINTING_ID,
        offers
    })
}

export const findInactiveOffersByArtistId = async (dispatch, artist_id) => {
    ////console.log("In actions. About to find offers for id: " + artist_id)
    const offers = await service.findOffersByArtistId(artist_id);
    ////console.log("Here is what we found: " + offers)
    dispatch ({
        type: FIND_INACTIVE_OFFERS_BY_PAINTING_ID,
        offers
    })
}

export const findInactiveOffersBySellerId = async (dispatch, user_id) => {
    ////console.log("In find active offers by owner id")
    const offers = await service.findOffersBySellerId(user_id);
    dispatch ({
        type: FIND_INACTIVE_OFFERS_BY_SELLER_ID,
        offers
    })
}

export const findInactiveOffersByBidderId = async (dispatch, user_id) => {
    ////console.log("In find active offers by user id")
    const offers = await service.findOffersByBidderId(user_id);
    dispatch ({
        type: FIND_INACTIVE_OFFERS_BY_BIDDER_ID,
        offers
    })
}

export const createOffer = async (dispatch, offer) => {
    ////console.log("In create offer")
    const inserted_offer = await service.createOffer(offer);
    dispatch ({
        type: CREATE_OFFER,
        inserted_offer
    })
}

export const approveOffer = async (dispatch, offer) => {
    ////console.log("In approve offer")
    const approved_offer = await service.approveOffer(offer);
    console.log(approved_offer);
    console.log(approved_offer.listingId);

    dispatch ({
        type: APPROVE_OFFER,
        listing_id: approved_offer.listingId
    })
}

export const rejectOffer = async (dispatch, offer) => {
    console.log("In offer actions. In reject offer")
    const rejected_offer = await service.rejectOffer(offer);
    if ( rejected_offer === 200 ) {
        dispatch({
            type: REJECT_OFFER,
            offer
        })
    }
}