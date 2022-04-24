import React from "react";

import CurrentOwnersItem from "./CurrentOwnersItem";
import owners from "./currentowners.json";
import ComponentHeader from "../../../components/ComponentHeader";

const Connections = () =>  {
    return (
        <div className={"p-2"}>
            {ComponentHeader("Connections")}
            <div className={"row row-cols-3"}>
                    {owners.map(owner_list =>
                        <CurrentOwnersItem key={owner_list.id} owner={owner_list}/>)}
            </div>
        </div>
    )
}

export default Connections;