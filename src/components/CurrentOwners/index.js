import React from "react";

import CurrentOwnersItem from "./CurrentOwnersItem";
import owners from "./currentowners.json";
import ComponentHeader from "../ComponentHeader";

const CurrentOwners = () =>  {
    return (
        <div className={"p-2 border-bottom"}>
            {ComponentHeader("Current Owners")}
            <div className={"row row-cols-3 p-1"}>
                    {owners.map(owner_list =>
                        <CurrentOwnersItem key={owner_list.id} owner={owner_list}/>)}
            </div>
        </div>
    )
}

export default CurrentOwners;