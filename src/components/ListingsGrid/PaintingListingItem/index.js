import React from "react";
import ConfirmationModal from "../ConfirmationModal"
import {Link} from "react-router-dom";
import ListingStats from "../ListingStats";
import SecureContent from "../../../_security/secure-content";
import ListingGridMenuItem from "../ListingGridMenuItem";

const PaintingListingItem = ({grid_item}) => {

    console.log(JSON.stringify(grid_item,undefined,4))
    return (

        <div className={"col card border-0 p-1"}>
            <ListingStats grid_item={grid_item}/>
            <div className={"d-flex"}>
                <Link to={`/art/${grid_item.painting_id}`}>
                    <img className={'m-0 p-0 img-thumbnail thumb-post img-responsive border-0 align-self-center'}
                         src={grid_item.painting_image}
                         alt={grid_item.painting_title}/>
                </Link>
            </div>
            <div className={'card-title align-items-center'}>
                <ListingGridMenuItem grid_item={grid_item}/>
                <div className={'card-title'}>
                    <Link className={`text-decoration-none text-black m-0 p-0`}
                      to={`/art/${grid_item.painting_id}`}>
                    <span className={"m-0"}><strong>{grid_item.painting_title},</strong></span>
                    </Link>
                    <Link className={`text-decoration-none text-dark`}
                              to={`/artist/${grid_item.artistUrl}/${grid_item.artistId}`}>
                        <p>{grid_item.artist_name}</p>
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default PaintingListingItem;