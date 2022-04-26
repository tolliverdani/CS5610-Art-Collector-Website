import React from "react";
import {Link} from "react-router-dom";

const ListingStats = ({grid_item}) => {

    return (
        <div className={"ps-2 bg-light"}>
            {/* Seller */}
            <Link className={`text-decoration-none text-primary`}
                  to={`/profile/${grid_item.owner_id}`}>
                <span>{grid_item.owner_name}</span>
            </Link>
            <div className={"justify-content-between"}>
                {/* Cost */}
                <p className={"m-0 p-0 pe-2 float-end"}>
                    <i className="fa fa-dollar-sign small pe-2" aria-hidden="true"/>
                    {grid_item.hasOwnProperty("listing_price") === false ? "--" : grid_item.listing_price}
                </p>

                {/* Quality */}
                <p className={"m-0 p-0"}>
                    <i className="fa fa-star small pe-2" aria-hidden="true"/>
                    {grid_item.hasOwnProperty("quality") === false ? "N/A" : grid_item.quality}
                </p>
            </div>
        </div>
    );
}
export default ListingStats;