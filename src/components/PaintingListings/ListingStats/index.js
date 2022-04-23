import React from "react";

const ListingStats = ({grid_item}) => {

    return (
        <div className={"p-2"}>
            <div className={"d-flex justify-content-between"}>
                {/* Cost */}
                <span className={"m-0 p-0"}>
                    <i className="fa fa-dollar-sign small pe-2" aria-hidden="true"/>
                    {grid_item.hasOwnProperty("listing_price") === false ? "--" : grid_item.listing_price}
                </span>

                {/* Quality */}
                <span className={"m-0 p-0"}>
                    <i className="fa fa-star small pe-2" aria-hidden="true"/>
                    {grid_item.hasOwnProperty("quality") === false ? "N/A" : grid_item.quality}
                </span>
            </div>
        </div>
    );
}
export default ListingStats;