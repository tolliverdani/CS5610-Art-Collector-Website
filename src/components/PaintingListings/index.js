import React from "react";

import ListingItem from "./ListingItem";
import listings from "./paintinglistings.json";
import ComponentHeader from "../ComponentHeader";

const PaintingListings = ({data}) =>  {


        return (
            <div className={"p-2 border-bottom"}>
                {ComponentHeader("Active Listings")}
                <div className={'row row-cols-auto row-cols-sm-2 row-cols-md-3 row-cols-xl-4'}>
                    {data.map(listing_item =>
                        <ListingItem key={listing_item.id} grid_item={listing_item}/>)}
                </div>
            </div>
        )
}

export default PaintingListings;