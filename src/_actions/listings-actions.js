import * as service from "../_services/listings-service"

export const FIND_ACTIVE_LISTINGS_BY_PAINTING_ID = "FIND_ACTIVE_LISTINGS_BY_PAINTING_ID"
export const FIND_ACTIVE_LISTINGS_BY_OWNER_ID = "FIND_ACTIVE_LISTINGS_BY_OWNER_ID"
export const CREATE_LISTING = "CREATE_LISTING"

export const findActiveListingsByPaintingId = async (dispatch, painting_id) => {
    console.log("In actions. About to find listings for id: " + painting_id)
    const listings = await service.findListingsByPaintingId(painting_id);
    console.log("Here is what we found: " + listings)
    dispatch ({
        type: FIND_ACTIVE_LISTINGS_BY_PAINTING_ID,
        listings
    })
}

export const findActiveListingsByOwnerId = async (dispatch, owner_id) => {
    console.log("In find active listings by owner id")
    const listings = await service.findListingsByOwnerId(owner_id);
    dispatch ({
        type: FIND_ACTIVE_LISTINGS_BY_OWNER_ID,
        listings
    })
}

export const createListing = async (dispatch, listing) => {
    console.log("In create listing")
    const inserted_listing = await service.createListing(listing);
    dispatch ({
        type: CREATE_LISTING,
        inserted_listing
    })
}