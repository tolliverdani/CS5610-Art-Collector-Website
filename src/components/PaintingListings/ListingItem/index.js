import React from "react";
import ConfirmationModal from "../ConfirmationModal"
import {Link, useParams} from "react-router-dom";
import GridMenuItem from "../../PaintingGrid/GridMenuItem";
import ListingStats from "../ListingStats";

const ListingItem = ({grid_item}) => {

    return (

        <div className={"col card border-0 p-1"}>
            <div className={"border-0 p-1"}>
                <Link to={`/art/${grid_item.painting_id}`}>
                    <img className={'img-thumbnail thumb-post img-responsive border-0 align-self-center p-0 mb-1'}
                         //TODO Change this
                         src={grid_item.painting_image}
                         alt={grid_item.painting_title}/>
                </Link>
            </div>

            <div className={'card-title align-items-center'}>

                <Link className={`text-decoration-none text-black m-0 p-0`}
                      to={`/art/${grid_item.paitning_id}`}>
                    <span className={"m-0"}><strong>{grid_item.painting_title}</strong> by {grid_item.artist_name}</span>
                </Link>
                <ListingStats grid_item={grid_item}/>
                <div className={"d-grid m-0"}>
                    <ConfirmationModal price={grid_item.listing_price}
                                       id={grid_item._id}/>
                </div>
            </div>
        </div>
    )

}

export default ListingItem;