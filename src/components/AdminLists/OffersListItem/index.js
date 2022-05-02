import React from "react";
import AdminEditProfileModal from "../UserListItem/AdminEditProfileModal";
import AdminEditOfferModal from "./AdminEditOfferModal";

const OffersListItem = ({offer}) => {
    return (
        <div className={"card bg-primary mb-2 text-white"}>
            <div className="card-header d-flex justify-content-between align-items-center p-1 ">
                <div>
                    <h5 className={"m-0"}>
                        <strong>{offer.painting_name}</strong>
                    </h5>
                    {offer.active_offer === true || offer.active_offer === "true" ?
                        <span className="badge bg-success me-1">Active</span> :
                        <span className="badge bg-secondary me-1">Inactive</span>}
                    {offer.accepted === true || offer.active_offer === "true" ?
                        <span className="badge bg-success me-1">Accepted</span> :
                        <span className="badge bg-danger me-1">Rejected</span>}


                </div>
                <AdminEditOfferModal offer={offer}/>
            </div>
            <div className={"card-body p-1"}>
                <p className={"m-0"}><strong>Buyer: </strong>{offer.buyer_name}</p>
                <p className={"m-0"}><strong>Offer Price: </strong>{offer.offer_price}</p>
                <p className={"m-0"}><strong>Date Created: </strong>{new Date(offer.date_created).toLocaleDateString()}</p>



            </div>

        </div>
    )
}

export default OffersListItem
