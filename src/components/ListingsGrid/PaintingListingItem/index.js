import React from "react";
import ConfirmationModal from "../ConfirmationModal"
import {Link} from "react-router-dom";
import ListingStats from "../ListingStats";
import UnsecuredContent from "../../../_security/unsecured-content";
import SecureContent from "../../../_security/secure-content";

const PaintingListingItem = ({profile, grid_item}) => {

    return (

        <div className={"col card bg-light border-0 p-1"}>
            <div className={'card-title align-items-center'}>
                <Link className={`text-decoration-none text-black m-0 p-0`}
                      to={`/art/${grid_item.painting_id}`}>
                    <p className={"m-0"}><strong>{grid_item.painting_title}</strong></p>
                    <p className={"m-0"}><strong>{grid_item.artist_name}</strong></p>
                    <p className={"m-0"}><strong>Sold by: {grid_item.owner_name}</strong></p>
                    <p className={"m-0"}><strong>Price: ${grid_item.listing_price}</strong></p>
                </Link>
                <SecureContent>
                    <ListingStats grid_item={grid_item}/>
                    <div className={"d-grid m-0"}>
                        <ConfirmationModal listing_item={grid_item}
                                           profile={profile}
                                           id={grid_item._id}/>
                    </div>
                </SecureContent>
            </div>
        </div>
    )

}

export default PaintingListingItem;