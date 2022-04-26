import React from "react";
import {Link} from "react-router-dom";

const ListingStats = ({grid_item}) => {

    return (
        <div className={"pb-2"}>
            <span className={"d-flex ps-2 pe-2 justify-content-between"}>
                {/* Cost */}
                <span className={"m-0 p-0"}>
                        <p className={"m-0 p-0"}><i className="fa fa-dollar-sign small pe-2" aria-hidden="true"/>
                            {grid_item.hasOwnProperty("listing_price") === false ? "--" : grid_item.listing_price}</p>
                    </span>

                {/* Quality */}
                <span className={"m-0 p-0"}>
                        <p className={"m-0 p-0"}><i className="fa fa-star small pe-2" aria-hidden="true"/>
                            {grid_item.hasOwnProperty("quality") === false ? "N/A" : grid_item.quality}</p>
                    </span>
                </span>
        </div>
    );
}
export default ListingStats;