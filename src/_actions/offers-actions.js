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
export const FIND_ALL_OFFERS = "FIND_ALL_OFFERS"
export const UPDATE_OFFER = "UPDATE_OFFER"
export const DELETE_OFFER = "DELETE_OFFER"

export const deleteOffer = async (dispatch, offer_id) => {
    try {
        const status = await service.deleteOffer(offer_id);
        if (status === 200) {
            dispatch({
                type: DELETE_OFFER,
                offer_id
            })
        }
    } catch (e) {
        alert("Ut oh! We were unable to delete the offer");
    }
}

export const updateOffer = async (dispatch, updated_offer) => {
    try {
        const status = await service.updateOffer(updated_offer);
        if (status === 200) {
            dispatch({
                type: UPDATE_OFFER,
                updated_offer
            })
        }
    } catch (e) {
        alert("Ut oh! We were unable to update the offer")
    }
}


export const findAllOffersByPaintingId = async (dispatch, painting_id) => {
    try {
        const offers = await service.findOffersByPaintingId(painting_id);
        dispatch({
            type: FIND_ALL_OFFERS_BY_PAINTING_ID,
            offers
        })
    } catch (e) {

    }
}


export const findPriceHistoryAllOffersByPaintingId = async (dispatch, painting_id) => {
    try {
        const offers = await service.findOffersByPaintingId(painting_id);
        dispatch({
            type: FIND_PRICE_HISTORY_ALL_OFFERS_BY_PAINTING_ID,
            offers
        })
    } catch (e) {

    }
}

export const findAllOffersByArtistId = async (dispatch, artist_id) => {
    try {
        const offers = await service.findOffersByArtistId(artist_id);
        dispatch({
            type: FIND_ALL_OFFERS_BY_PAINTING_ID,
            offers
        })
    } catch (e) {

    }
}

export const findAllOffersBySellerId = async (dispatch, user_id) => {
    try {
        const offers = await service.findOffersBySellerId(user_id);
        dispatch({
            type: FIND_ALL_OFFERS_BY_SELLER_ID,
            offers
        })
    } catch (e) {

    }
}

export const findAllOffersByBidderId = async (dispatch, user_id) => {
    try {
        const offers = await service.findOffersByBidderId(user_id);
        dispatch({
            type: FIND_ALL_OFFERS_BY_BIDDER_ID,
            offers
        })
    } catch (e) {

    }
}

export const findActiveOffersByPaintingId = async (dispatch, painting_id) => {
    try {
        const offers = await service.findOffersByPaintingId(painting_id);
        dispatch({
            type: FIND_ACTIVE_OFFERS_BY_PAINTING_ID,
            offers
        })
    } catch (e) {

    }
}

export const findActiveOffersByArtistId = async (dispatch, artist_id) => {
    try {
        const offers = await service.findOffersByArtistId(artist_id);
        dispatch({
            type: FIND_ACTIVE_OFFERS_BY_PAINTING_ID,
            offers
        })
    } catch (e) {

    }
}

export const findActiveOffersBySellerId = async (dispatch, user_id) => {
    try {
        const offers = await service.findOffersBySellerId(user_id);
        dispatch({
            type: FIND_ACTIVE_OFFERS_BY_SELLER_ID,
            offers
        })
    } catch (e) {

    }
}

export const findActiveOffersByBidderId = async (dispatch, user_id) => {
    try {
        const offers = await service.findOffersByBidderId(user_id);
        dispatch({
            type: FIND_ACTIVE_OFFERS_BY_BIDDER_ID,
            offers
        })
    } catch (e) {

    }
}

export const findInactiveOffersByPaintingId = async (dispatch, painting_id) => {
    try {
        const offers = await service.findOffersByPaintingId(painting_id);
        dispatch({
            type: FIND_INACTIVE_OFFERS_BY_PAINTING_ID,
            offers
        })
    } catch (e) {

    }
}

export const findInactiveOffersByArtistId = async (dispatch, artist_id) => {
    try {
        const offers = await service.findOffersByArtistId(artist_id);
        dispatch({
            type: FIND_INACTIVE_OFFERS_BY_PAINTING_ID,
            offers
        })
    } catch (e) {

    }
}

export const findInactiveOffersBySellerId = async (dispatch, user_id) => {
    try {
        const offers = await service.findOffersBySellerId(user_id);
        dispatch({
            type: FIND_INACTIVE_OFFERS_BY_SELLER_ID,
            offers
        })
    } catch (e) {

    }
}

export const findInactiveOffersByBidderId = async (dispatch, user_id) => {
    try {
        const offers = await service.findOffersByBidderId(user_id);
        dispatch({
            type: FIND_INACTIVE_OFFERS_BY_BIDDER_ID,
            offers
        })
    } catch (e) {

    }
}

export const createOffer = async (dispatch, offer) => {
    try {
        const inserted_offer = await service.createOffer(offer);
        dispatch({
            type: CREATE_OFFER,
            inserted_offer
        })
    } catch (e) {
        alert("We were unable to create this offer")
    }
}

export const approveOffer = async (dispatch, offer) => {
    try {
        const approved_offer = await service.approveOffer(offer);
        dispatch({
            type: APPROVE_OFFER,
            listing_id: approved_offer.listingId
        })
    } catch (e) {
        alert("We were unable to approve this offer")
    }
}

export const rejectOffer = async (dispatch, offer) => {
    try {
        const rejected_offer = await service.rejectOffer(offer);
        if (rejected_offer === 200) {
            dispatch({
                type: REJECT_OFFER,
                offer
            })
        }
    } catch (e) {
        alert("We were unable to reject this offer")
    }
}

export const findAllOffers = async (dispatch) => {
    try {
        const offers = await service.findAllOffers();
        dispatch({
            type: FIND_ALL_OFFERS,
            offers
        })
    } catch (e) {

    }
}