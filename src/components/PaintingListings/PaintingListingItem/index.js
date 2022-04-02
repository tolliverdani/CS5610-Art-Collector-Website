import React from "react";
import ConfirmationModal from "../../ConfirmationModal";

const PaintingListingItem = ({
                                 listing = {
                                     id: "pli01",
                                     type: "For Sale",
                                     cost: 200,
                                     denomination: "USD",
                                     quality: "Excellent",
                                     seller: "@nziegler"
                                 }
                             }) => {

    const button_name = listing.type === 'For Barter' ? 'Trade' : 'Buy';
    const transaction_type = listing.type === 'For Barter' ? 'Trade' : 'Purchase';

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
                    <ConfirmationModal button_text={button_name}
                                       modal_heading={`Confirm ${transaction_type}`}
                                       message={`You have not yet made the ${transaction_type.toLowerCase()}. Once you confirm, the artwork holder will be notified.`}
                                       accept_button={button_name}
                                       close_button={"Cancel"}
                    />
                {/*<a className="btn btn-primary rounded-pill btn-sm" href="/#">{listing.type === 'For Barter' ? 'Trade' : 'Buy'}</a>*/}


                </div>
            </li>
        </div>
    )

}

export default PaintingListingItem;