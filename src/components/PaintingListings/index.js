import react from "react";

import PaintingListingItem from "./PaintingListingItem";
import listings from "./paintinglistings.json";

const PaintingListings = () =>  {
    return (
        <>
            <h5><strong>Listings</strong></h5>
            <ul className={"list-group"}>
                {listings.map(listing_item => <PaintingListingItem key={listing_item.id} listing={listing_item}/>)}
            </ul>
        </>
    )
}

export default PaintingListings;