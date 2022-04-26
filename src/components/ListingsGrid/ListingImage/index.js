import {Link} from "react-router-dom";
import React from "react";


const ListingImage = ({grid_item}) => {
    return (
        <div className={"d-flex"}>
            <Link to={`/art/${grid_item.painting_id}`}>
                <img className={'m-0 p-0 img-thumbnail thumb-post img-responsive border-0 align-self-center'}
                     src={grid_item.painting_image}
                     alt={grid_item.painting_title}/>
            </Link>
        </div>
    )
}

export default ListingImage