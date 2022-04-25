import React from "react";
import {Link} from "react-router-dom";
import GridMenuItem from "../GridMenuItem";

// Reference for content: https://react-bootstrap.github.io/components/dropdowns/

const ArtistGridItem = ({grid_item}) => {

    return (
        <div className={"col card border-0 p-1"}>
            <div className={"d-flex"}>
                <Link to={`/artist/${grid_item.url}/${grid_item.id}`}>
                    <img className={'img-thumbnail thumb-post img-responsive border-0 align-self-center p-0 mb-1'}
                         src={grid_item.image}
                         alt={grid_item.title}/>
                </Link>
            </div>

            <div className={'card-title align-items-center'}>

                <GridMenuItem type={"artist"} grid_item={grid_item}/>

                    <Link className={`text-decoration-none text-dark`}
                          to={`/artist/${grid_item.url}/${grid_item.id}`}>
                        <span><strong>{grid_item.originalArtistName},</strong></span>
                        <p>{grid_item.artistName}</p>
                    </Link>
            </div>
        </div>
    )
}

export default ArtistGridItem;