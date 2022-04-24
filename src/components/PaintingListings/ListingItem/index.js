import React from "react";
import ConfirmationModal from "../ConfirmationModal"
import {Link, useParams} from "react-router-dom";
import GridMenuItem from "../../PaintingGrid/GridMenuItem";
import ListingStats from "../ListingStats";
import UnsecuredContent from "../../Security/unsecured-content";

const ListingItem = ({profile, grid_item}) => {

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
                    <p className={"m-0"}><strong>{grid_item.painting_title}</strong></p>
                    <p className={"m-0"}>{grid_item.artist_name}</p>
                </Link>
                <UnsecuredContent>
                    <ListingStats grid_item={grid_item}/>
                    <div className={"d-grid m-0"}>
                        <ConfirmationModal listing_item={grid_item}
                                           profile={profile}
                                           id={grid_item._id}/>
                    </div>
                </UnsecuredContent>
            </div>
        </div>
    )

}

export default ListingItem;