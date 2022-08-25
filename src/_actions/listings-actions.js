import * as service from "../_services/listings-service"

export const FIND_ACTIVE_LISTINGS_BY_PAINTING_ID = "FIND_ACTIVE_LISTINGS_BY_PAINTING_ID"
export const FIND_ACTIVE_LISTINGS_BY_OWNER_ID = "FIND_ACTIVE_LISTINGS_BY_OWNER_ID"
export const FIND_ACTIVE_LISTINGS_BY_ARTIST_ID = "FIND_ACTIVE_LISTINGS_BY_ARTIST_ID"
export const CREATE_LISTING = "CREATE_LISTING"
export const FIND_ALL_ACTIVE_LISTINGS = "FIND_ALL_ACTIVE_LISTINGS"
export const FIND_SOLD_PRICE_HISTORY_BY_PAINTING_ID = "FIND_SOLD_PRICE_HISTORY_BY_PAINTING_ID"
export const FIND_ALL_LISTINGS = "FIND_ALL_LISTINGS"
export const UPDATE_LISTING = "UPDATE_LISTING"
export const DELETE_LISTING = "DELETE_LISTING"
export const DELETE_ACTIVE_LISTING = "DELETE_ACTIVE_LISTING"

export const deleteActiveListing = async (dispatch, listing) => {
    try {
        await service.updateListing(listing);
        dispatch({
            type: DELETE_ACTIVE_LISTING,
            listing
        })
    } catch (e) {

    }
}

export const deleteListing = async (dispatch, listing_id) => {
    try {
        const status = await service.deleteListing(listing_id);
        if (status === 'OK') {
            dispatch({
                type: DELETE_LISTING,
                listing_id
            })
        }
    } catch (e) {

    }
}

export const updateListing = async (dispatch, listing) => {
    try {
        await service.updateListing(listing);
        dispatch({
            type: UPDATE_LISTING,
            listing
        })
    } catch (e) {

    }
}

export const findAllListings = async (dispatch) => {
    try {
        const listings = await service.findAllListings();
        dispatch({
            type: FIND_ALL_LISTINGS,
            listings
        })
    } catch (e) {

    }
}

export const findAllActiveListings = async (dispatch) => {
    try {
        const listings = await service.findAllActiveListings();
        dispatch({
            type: FIND_ALL_ACTIVE_LISTINGS,
            listings
        })
    } catch (e) {

    }
}

export const findActiveListingsByPaintingId = async (dispatch, painting_id) => {
    try {
        const listings = await service.findListingsByPaintingId(painting_id);
        dispatch({
            type: FIND_ACTIVE_LISTINGS_BY_PAINTING_ID,
            listings
        })
    } catch (e) {

    }
}

export const findActiveListingsByOwnerId = async (dispatch, owner_id) => {
    try {
        const listings = await service.findListingsByOwnerId(owner_id);
        dispatch({
            type: FIND_ACTIVE_LISTINGS_BY_OWNER_ID,
            listings
        })
    } catch (e) {

    }
}

export const findActiveListingsByArtistId = async (dispatch, artist_id) => {
    try {
        const listings = await service.findListingsByArtistId(artist_id);
        dispatch({
            type: FIND_ACTIVE_LISTINGS_BY_ARTIST_ID,
            listings
        })
    } catch (e) {

    }
}

export const createListing = async (dispatch, listing) => {
    try {
        const inserted_listing = await service.createListing(listing);
        dispatch({
            type: CREATE_LISTING,
            inserted_listing
        })
    } catch (e) {

    }
}

export const findSalesPriceHistoryByPaintingId = async (dispatch, painting_id) => {
    try {
        const listings = await service.findPriceHistoryByPaintingId(painting_id);
        dispatch({
            type: FIND_SOLD_PRICE_HISTORY_BY_PAINTING_ID,
            listings
        })
    } catch (e) {

    }
}