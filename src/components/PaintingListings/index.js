import react from "react";

import PaintingListingItem from "../PaintingListingItem";
import listings from "./paintinglistings.json";

const PaintingListings = () =>  {
    return (
        <>
            <h5><strong>Painting Listings</strong></h5>
            <ul className={"list-group"}>
                {listings.map(listing_item => <PaintingListingItem listing={listing_item}/>)}
            </ul>
        </>
    )
}

export default PaintingListings;