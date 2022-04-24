import React from "react";

import ListingItem from "./ListingItem";
import ComponentHeader from "../ComponentHeader";

const PaintingListings = ({data, profile}) => {

    return (
        <>
            {ComponentHeader("Active Listings")}
            <div className={"p-2 mb-2"}>
                <div className={'row row-cols-auto row-cols-sm-2 row-cols-md-3 row-cols-xl-4'}>
                    {data.map(listing_item =>
                        <ListingItem key={listing_item._id} grid_item={listing_item} profile={profile}/>)}
                </div>
            </div>
        </>
    )
}

export default PaintingListings;