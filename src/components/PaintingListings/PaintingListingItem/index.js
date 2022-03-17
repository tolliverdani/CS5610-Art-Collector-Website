import React from "react";

const PaintingListingItem = ({
                                 listing = {
                                     key: "pli01",
                                     type: "For Sale",
                                     cost: 200,
                                     denomination: "USD",
                                     quality: "Excellent",
                                     seller: "@nziegler"
                                 }
                             }) => {
    return (
        <div>
            {/*Container to hold listing item*/}
            <li className={"list-group-item d-flex justify-content-between align-items-center"} key={listing.key}>
                {/*Container to hold text of listing, so that bid icon can be right justified*/}
                <div>
                    <h6 className={"mb-0"}><strong>{listing.type}</strong></h6>
                    <p className={`mb-0 ${listing.type === 'For Barter' ? 'd-none' : ''}`}>
                        <strong>Cost: </strong>{listing.cost} {listing.denomination}</p>
                    <p className={"mb-0"}><strong>Quality: </strong>{listing.quality}</p>
                    <p className={"mb-0"}><strong>Seller: </strong>{listing.seller}</p>
                </div>
                {/*Bid button*/}
                <a className="btn btn-primary rounded-pill" href="/#">Bid</a>

            </li>
        </div>
    )

}

export default PaintingListingItem;