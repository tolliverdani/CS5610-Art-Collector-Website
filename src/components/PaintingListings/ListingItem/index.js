import React from "react";
import ConfirmationModal from "../ConfirmationModal"
import {Link, useParams} from "react-router-dom";
import GridMenuItem from "../../PaintingGrid/GridMenuItem";
import ListingStats from "../ListingStats";

const ListingItem = ({grid_item}) => {

    return (

        <div>
            <div className={"col card border-0 p-1"}>
                <div className={"d-flex"}>
                    <Link to={`/art/${grid_item.id}`}>
                        <img className={'img-thumbnail thumb-post img-responsive border-0 align-self-center p-0 mb-1'}
                             src={grid_item.image}
                             alt={grid_item.title}/>
                    </Link>
                </div>
            </div>

            <div className={'card-title align-items-center'}>

                <GridMenuItem type={"listing"} grid_item={grid_item}/>

                <span className={'card-title'}>
                    <Link className={`small text-decoration-none text-black`}
                          to={`/art/${grid_item.id}`}>
                        <span className={"m-0"}><strong>{grid_item.title}</strong></span>
                    </Link>
                    <Link className={`text-decoration-none text-dark`}
                          to={`/artist/${grid_item.artistUrl}/${grid_item.artistId}`}>
                        <p>{grid_item.artistName}</p>
                    </Link>
                </span>

                <ListingStats grid_item={grid_item}/>

                <div className={"d-grid mt-1"}>
                    {/*Bid button*/}
                    <ConfirmationModal price={grid_item.cost}
                                       id={grid_item._id}
                    />
                    {/*<a className="btn btn-primary rounded-pill btn-sm" href="/#">{listing.type === 'For Barter' ? 'Trade' : 'Buy'}</a>*/}
                </div>
            </div>
        </div>
    )

}

export default ListingItem;