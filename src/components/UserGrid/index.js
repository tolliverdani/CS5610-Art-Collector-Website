import React from "react";

import UserGridItem from "./UserGridItem";
import ComponentHeader from "../ComponentHeader";

const UserGrid = ({users, header}) => {
    return (
        <>
            {ComponentHeader(header)}
            <div className={"p-2"}>
                <div className={"row row-cols-3 p-1"}>
                    {users.map(user =>
                        <UserGridItem key={user._id} user={user}/>)}
                </div>
            </div>
        </>
    )
}

export default UserGrid;