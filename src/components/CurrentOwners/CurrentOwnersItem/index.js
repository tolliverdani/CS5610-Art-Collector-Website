import React from "react";

const CurrentOwnersItem = ({
                               owner = {
                                   username: "dtolliver",
                                   userId: "dtolliver7654",
                                   profile_image: "https://pbs.twimg.com/media/CiMTeSSWwAAQ_iI?format=jpg&name=small",
                                   forSale: true
                               }
                           }) => {
    return (
        <div className={"border-0 gy-1"}>
            <a href={"/#"}>
                <img className={'card-img-top rounded-circle'} src={owner.profile_image} alt={owner.username}/>
            </a>
        </div>
    )

}

export default CurrentOwnersItem;