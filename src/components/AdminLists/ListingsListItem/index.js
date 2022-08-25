import React from "react";
import AdminEditListingModal from "./AdminEditListingModal";

const ListingsListItem = ({listing}) => {
    return (
        <div className={"card bg-primary mb-2 text-white"}>
            <div className="card-header d-flex justify-content-between align-items-center p-1 ">
                <div>
                    <h5 className={"m-0"}>
                        <strong>{listing.painting_title}</strong>
                    </h5>
                    <p className={"m-0"}>{listing.artist_name}</p>
                    {listing.active_listing === true || listing.active_listing === "true" ?
                        <span className="badge bg-success me-1">Active</span> :
                        <span className="badge bg-secondary me-1">Inactive</span>}
                    {listing.sold === true || listing.sold === "true" ?
                        <span className="badge bg-success me-1">Sold</span> :
                        <span className="badge bg-danger me-1">Not Sold</span>}


                </div>
                <AdminEditListingModal listing={listing}/>
            </div>
            <div className={"card-body p-1"}>
                <p className={"m-0"}><strong>Owner: </strong>{listing.owner_name}</p>
                <p className={"m-0"}><strong>Quality: </strong>{listing.quality}</p>
                <p className={"m-0"}><strong>Quality: </strong>{listing.listing_price}</p>
                <p className={"m-0"}><strong>Date Created: </strong>{new Date(listing.date_created).toLocaleDateString()}</p>



            </div>

        </div>
    )
}

export default ListingsListItem;
