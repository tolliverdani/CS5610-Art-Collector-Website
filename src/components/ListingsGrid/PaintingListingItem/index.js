import React from "react";
import {Link} from "react-router-dom";
import ListingStats from "../ListingStats";
import ListingGridMenuItem from "../ListingGridMenuItem";
import ListingSeller from "../ListingSeller";
import ListingImage from "../ListingImage";

const PaintingListingItem = ({grid_item}) => {

    return (
        <div className={"col card border-0 p-1"}>
            <ListingStats grid_item={grid_item}/>
            <ListingImage grid_item={grid_item}/>

            <div className={'card-title p-0 m-0 align-items-center'}>
                <ListingGridMenuItem grid_item={grid_item}/>

                <div className={'card-title m-0 p-0'}>
                    <Link className={`text-decoration-none text-black m-0 p-0`}
                          to={`/art/${grid_item.painting_id}`}>
                        <span className={"m-0"}><strong>{grid_item.painting_title},</strong></span>
                    </Link>
                    <Link className={`text-decoration-none text-dark m-0 p-0`}
                          to={`/artist/${grid_item.artistUrl}/${grid_item.artistId}`}>
                        <span><p>{grid_item.artist_name}</p></span>
                    </Link>
                </div>

                <ListingSeller grid_item={grid_item}/>
            </div>
        </div>
    )

}

export default PaintingListingItem;