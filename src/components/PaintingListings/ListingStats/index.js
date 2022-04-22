import React from "react";

const ListingStats = ({grid_item}) => {

    return (
        <div className={"border-bottom p-2"}>
            <span className={"d-flex justify-content-between"}>
                {/* Cost */}
                <span className={"p-0"}>
                    <i className="fa fa-dollar-sign pe-2" aria-hidden="true"/>
                    {grid_item.hasOwnProperty("cost") === false ? "--" : grid_item.cost}
                </span>

                {/* Quality */}
                <span className={"p-0"}>
                    <i className="fa fa-star pe-2" aria-hidden="true"/>
                    {grid_item.hasOwnProperty("quality") === false ? "--" : grid_item.quality}
                </span>
            </span>
        </div>
    );
}
export default ListingStats;