import {Link} from "react-router-dom";
import React from "react";


const ListingSeller = ({grid_item}) => {
    return (
        <div className={"m-0 p-0 border-top"}>
            <Link className={`text-decoration-none text-dark m-0 p-0`}
                  to={`/profile/${grid_item.owner_id}`}>
                <span className={"small p-0 m-0"}>Sold by: {grid_item.owner_name}</span>
            </Link>
        </div>
    )
}

export default ListingSeller