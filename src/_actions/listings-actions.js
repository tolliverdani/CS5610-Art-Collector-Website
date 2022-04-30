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
    const status = await service.updateListing(listing);
    console.log("Here is the listing to be deleted: ")
    console.log(JSON.stringify(listing, undefined, 4))
    dispatch({
        type: DELETE_ACTIVE_LISTING,
        listing
    })
}

export const deleteListing = async (dispatch, listing_id ) => {
    const status = await service.deleteListing(listing_id);
    if ( status === 'OK' ) {
        dispatch({
            type: DELETE_LISTING,
            listing_id
        })
    }
}

export const updateListing = async (dispatch, listing) => {
    const status = await service.updateListing(listing);
    console.log("Here is the new listing: ")
    console.log(JSON.stringify(listing, undefined, 4))
    dispatch({
        type: UPDATE_LISTING,
        listing
    })
}

export const findAllListings = async (dispatch) => {

    const listings = await service.findAllListings();
    dispatch({
        type: FIND_ALL_LISTINGS,
        listings
    })
}

export const findAllActiveListings = async (dispatch) => {
    //console.log("In actions. About to find all active listings");
    const listings = await service.findAllActiveListings();
    //console.log("Here is what we found: " + listings);
    dispatch({
        type: FIND_ALL_ACTIVE_LISTINGS,
        listings
    })
}

export const findActiveListingsByPaintingId = async (dispatch, painting_id) => {
    //console.log("In actions. About to find listings for id: " + painting_id)
    const listings = await service.findListingsByPaintingId(painting_id);
    //console.log("Here is what we found: " + listings)
    dispatch ({
        type: FIND_ACTIVE_LISTINGS_BY_PAINTING_ID,
        listings
    })
}

export const findActiveListingsByOwnerId = async (dispatch, owner_id) => {
    //console.log("In find active listings by owner id")
    const listings = await service.findListingsByOwnerId(owner_id);
    dispatch ({
        type: FIND_ACTIVE_LISTINGS_BY_OWNER_ID,
        listings
    })
}

export const findActiveListingsByArtistId = async (dispatch, artist_id) => {
    //console.log("In find active listings by artist id")
    const listings = await service.findListingsByArtistId(artist_id);
    dispatch ({
        type: FIND_ACTIVE_LISTINGS_BY_ARTIST_ID,
        listings
    })
}

export const createListing = async (dispatch, listing) => {
    console.log("In listings actions. In create listing")
    const inserted_listing = await service.createListing(listing);
    console.log(inserted_listing);
    dispatch ({
        type: CREATE_LISTING,
        inserted_listing
    })
}

export const findSalesPriceHistoryByPaintingId = async (dispatch, painting_id) => {
    //console.log("In actions. In find price history by painting id");
    const listings = await service.findPriceHistoryByPaintingId(painting_id);
    dispatch ({
        type: FIND_SOLD_PRICE_HISTORY_BY_PAINTING_ID,
        listings
    })
}