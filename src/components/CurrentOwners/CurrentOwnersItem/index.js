import React from "react";

const CurrentOwnersItem = ({
                               owner = {
                                   username: "dtolliver",
                                   userId: "dtolliver7654",
                                   profile_image: "https://pbs.twimg.com/media/CiMTeSSWwAAQ_iI?format=jpg&name=small",
                                   forSale: true                               }
                           }) => {
    return (
        <div>
            <li className={"list-group-item mb-2 border-0 d-flex justify-content-between align-items-center"}>
                <a href={"/#"}><img className={'img-thumbnail'} src={owner.profile_image}/></a>
            </li>
        </div>
    )

}

export default CurrentOwnersItem;