import React from "react";

const CurrentOwnersItem = ({
                               owner = {
                                   username: "dtolliver",
                                   userId: "dtolliver7654",
                                   forSale: true                               }
                           }) => {
    return (
        <div>
            <li className={"list-group-item mb-2 border-0 d-flex justify-content-between align-items-center"}>
                <a href={"/#"}><img className={'img-thumbnail'} src={'#'}/></a>
            </li>
        </div>
    )

}

export default CurrentOwnersItem;