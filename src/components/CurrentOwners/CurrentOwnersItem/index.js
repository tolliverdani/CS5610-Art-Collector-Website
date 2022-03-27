import React from "react";

const CurrentOwnersItem = ({
                               owner = {
                                   username: "dtolliver",
                                   userId: "dtolliver7654",
                                   profile_image: "https://pbs.twimg.com/media/CiMTeSSWwAAQ_iI?format=jpg&name=small",
                                   forSale: true                               }
                           }) => {
    return (
        <div className={"col card border-0 gy-1"}>
                <a href={"/#"}>
                    <img className={'card-img-top rounded-circle'} src={owner.profile_image} alt={owner.username}/>
                    <div className={"card-body p-1"}>
                        <p className={"card-text text-center text-black text-decoration-none"}>
                            {owner.username}
                        </p>
                    </div>
                </a>
        </div>
    )

}

export default CurrentOwnersItem;