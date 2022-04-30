import React from "react";

import ComponentHeader from "../ComponentHeader";
import UserListingItem from "./UserListingItem";
import ArtistListingItem from "./ArtistListingItem";
import PaintingListingItem from "./PaintingListingItem";
import EmptyListings from "../Errors/EmptyListings";

const ListingData = (type, data) => {

    //console.log(data)

    switch (type) {
        case "artist":
            return data.map(listing_item =>
                <ArtistListingItem key={listing_item._id} grid_item={listing_item}/>)
        case "user":
            return data.map(listing_item =>
                <UserListingItem key={listing_item._id} grid_item={listing_item}/>)
        case "painting":
            return data.map(listing_item =>
                <PaintingListingItem key={listing_item._id} grid_item={listing_item}/>)
        default:
            return []
    }
}

const ListingsGrid = (params) => {

    return (
        <>
            {ComponentHeader("Active Listings")}
            <div className={"p-2 mb-2"}>
                {params.data.length === 0 ?
                    <EmptyListings/>
                    : <div className={'row row-cols-auto row-cols-sm-2 row-cols-md-3 row-cols-xl-4'}>
                        {ListingData(params.type, params.data)}
                    </div>
                }
            </div>
        </>
    )
}

export default ListingsGrid;