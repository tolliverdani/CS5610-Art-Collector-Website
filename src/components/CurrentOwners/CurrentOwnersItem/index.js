import React from "react";

const CurrentOwnersItem = ({
                               owner = {
                                   username: "dtolliver",
                                   userId: "dtolliver7654",
                                   forSale: true                               }
                           }) => {
    return (
        <div>
            {/*Container to hold listing item*/}
            <li className={"list-group-item border-0 d-flex justify-content-between align-items-center"} key={owner.key}>
                {/*Container to hold text of listing, so that bid icon can be right justified*/}
                <h6 className={"mb-0"}><strong>@{owner.username}</strong></h6>
                {/*Bid button*/}
                <button className={`btn btn-primary rounded-pill ${owner.forSale ? '' : 'd-none'}`}>Bid</button>
            </li>
        </div>
    )

}

export default CurrentOwnersItem;