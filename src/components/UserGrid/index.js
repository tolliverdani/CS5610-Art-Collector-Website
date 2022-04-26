import React from "react";

import UserGridItem from "./UserGridItem";
import ComponentHeader from "../ComponentHeader";

const UserGrid = (params) => {
    return (
        <>
            {ComponentHeader(params.header)}
            <div className={"p-2"}>
                <div className={"col p-1"}>
                    {params.users.map(user =>
                        <UserGridItem key={user._id} user={user}/>)}
                </div>
            </div>
        </>
    )
}

export default UserGrid;