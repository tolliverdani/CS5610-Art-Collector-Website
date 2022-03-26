import React from "react";

import CurrentOwnersItem from "./CurrentOwnersItem";
import owners from "./currentowners.json";
import ComponentHeader from "../ComponentHeader";

const CurrentOwners = () =>  {
    return (
        <>
            {ComponentHeader("Current Owners")}
            <div className={"row row-cols-2"}>
                    {owners.map(owner_list => <CurrentOwnersItem owner={owner_list}/>)}
            </div>
        </>
    )
}

export default CurrentOwners;