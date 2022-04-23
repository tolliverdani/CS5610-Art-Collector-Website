import React from "react";
import ConfirmationModal from "../ConfirmationModal"
import {Link, useParams} from "react-router-dom";
import GridMenuItem from "../../PaintingGrid/GridMenuItem";
import ListingStats from "../ListingStats";

const ListingItem = ({grid_item}) => {

    return (

        <div className={"col card border-0 p-1"}>
            <div className={"border-0 p-1"}>
                <Link to={`/art/${grid_item.id}`}>
                    <img className={'img-thumbnail thumb-post img-responsive border-0 align-self-center p-0 mb-1'}
                         src={grid_item.image}
                         alt={grid_item.title}/>
                </Link>
            </div>

            <div className={'card-title align-items-center'}>

                <Link className={`text-decoration-none text-black m-0 p-0`}
                      to={`/art/${grid_item.id}`}>
                    <span className={"m-0"}><strong>{grid_item.title}</strong> by {grid_item.artistName}</span>
                </Link>
                <ListingStats grid_item={grid_item}/>
                <div className={"d-grid m-0"}>
                    <ConfirmationModal price={grid_item.cost}
                                       id={grid_item._id}/>
                </div>
            </div>
        </div>
    )

}

export default ListingItem;