import React from "react";

import CurrentOwnersItem from "./CurrentOwnersItem";
import owners from "./currentowners.json";
import ComponentHeader from "../ComponentHeader";

const CurrentOwners = () =>  {
    return (
        <>
            {ComponentHeader("Current Owners")}
            <div className={'justify-content-center row row-cols-auto row-cols-sm-2 row-cols-md-3 row-cols-xl-4 m-0 p-0'}>
                {owners.map(owner_list => <CurrentOwnersItem owners={owner_list}/>)}
            </div>
        </>
    )
}

export default CurrentOwners;