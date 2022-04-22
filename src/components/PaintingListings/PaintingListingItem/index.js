import React from "react";
import ConfirmationModal from "../ConfirmationModal"

const PaintingListingItem = ({
                                 listing = {
                                     _id: "pli01",
                                     cost: 200,
                                     denomination: "USD",
                                     quality: "Excellent",
                                     seller: "@nziegler"
                                 }
                             }) => {
    return (
        <div>
            {/*Container to hold listing item*/}
            <li className={"list-group-item mb-2 bg-light border-0"}>
                {/*Container to hold text of listing, so that bid icon can be right justified*/}
                <div>
                    <p className={`mb-0 ${listing.type === 'For Barter' ? 'd-none' : ''}`}>
                        <strong>Cost: </strong>{listing.cost} {listing.denomination}</p>
                    <p className={"mb-0"}><strong>Quality: </strong>{listing.quality}</p>
                    <p className={"mb-0"}><strong>Seller: </strong>{listing.seller}</p>
                </div>
                <div className={"d-grid mt-1"}>
                {/*Bid button*/}
                    <ConfirmationModal price={listing.cost}
                                       id={listing._id}
                    />
                {/*<a className="btn btn-primary rounded-pill btn-sm" href="/#">{listing.type === 'For Barter' ? 'Trade' : 'Buy'}</a>*/}
                </div>
            </li>
        </div>
    )

}

export default PaintingListingItem;