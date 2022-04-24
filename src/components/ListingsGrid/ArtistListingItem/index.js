import React from "react";
import ConfirmationModal from "../ConfirmationModal"
import {Link} from "react-router-dom";
import ListingStats from "../ListingStats";
import UnsecuredContent from "../../../_security/unsecured-content";
import SecureContent from "../../../_security/secure-content";

const ArtistListingItem = ({profile, grid_item}) => {

    return (

        <div className={"col card border-0 m-0 p-0"}>
            <ListingStats grid_item={grid_item}/>
            <div className={"border-0 m-0 p-0"}>
                <Link to={`/art/${grid_item.painting_id}`}>
                    <img className={'m-0 p-0 img-thumbnail thumb-post img-responsive border-0 align-self-center'}
                         src={grid_item.painting_image}
                         alt={grid_item.painting_title}/>
                </Link>
            </div>

            <div className={'card-title p-0 m-0 bg-light align-items-center'}>
                <Link className={`text-decoration-none text-black m-0 p-0`}
                      to={`/art/${grid_item.painting_id}`}>
                    <p className={"m-0"}><strong>{grid_item.painting_title}</strong></p>
                </Link>
                <SecureContent>
                    <div className={"d-grid p-0 m-0"}>
                        <ConfirmationModal listing_item={grid_item}
                                           profile={profile}
                                           id={grid_item._id}/>
                    </div>
                </SecureContent>
            </div>
        </div>
    )

}

export default ArtistListingItem;