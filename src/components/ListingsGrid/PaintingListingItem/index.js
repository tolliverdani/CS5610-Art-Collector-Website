import React from "react";
import ConfirmationModal from "../ConfirmationModal"
import {Link} from "react-router-dom";
import ListingStats from "../ListingStats";
import UnsecuredContent from "../../../_security/unsecured-content";
import SecureContent from "../../../_security/secure-content";

const PaintingListingItem = ({profile, grid_item}) => {

    return (

        <div className={"col card border-0 p-1"}>
            <SecureContent>
                <ListingStats grid_item={grid_item}/>
            </SecureContent>
            <div className={"border-0 me-1 ms-1 p-2"}>
                <Link to={`/art/${grid_item.painting_id}`}>
                    <img className={'img-thumbnail thumb-post img-responsive border-0 align-self-center p-0 mb-1'}
                        //TODO Change this
                         src={grid_item.painting_image}
                         alt={grid_item.painting_title}/>
                </Link>
            </div>
            <div className={'card-title me-1 ms-1 align-items-center'}>
                <Link className={`text-decoration-none text-black m-0 p-0`}
                      to={`/art/${grid_item.painting_id}`}>
                    <p className={"m-0"}><strong>{grid_item.painting_title},</strong></p>
                    <p className={"m-0 pb-2"}>{grid_item.artist_name}</p>
                    </Link>

            </div>
            <SecureContent>
            <div className={"d-grid mt-1 me-1 ms-1"}>
                <ConfirmationModal listing_item={grid_item}
                                   profile={profile}
                                   id={grid_item._id}/>
            </div>
        </SecureContent>
        </div>
    )

}

export default PaintingListingItem;