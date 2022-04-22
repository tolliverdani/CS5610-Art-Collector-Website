import React from "react";

import CurrentOwnersItem from "./CurrentOwnersItem";
import owners from "./currentowners.json";
import ComponentHeader from "../../../components/ComponentHeader";

const Friends = () =>  {
    return (
        <div className={"p-2"}>
            {ComponentHeader("This User Knows")}
            <div className={"row row-cols-3"}>
                    {owners.map(owner_list =>
                        <CurrentOwnersItem key={owner_list.id} owner={owner_list}/>)}
            </div>
        </div>
    )
}

export default Friends;