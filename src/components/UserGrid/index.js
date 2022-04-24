import React from "react";

import UserGridItem from "./UserGridItem";
import ComponentHeader from "../ComponentHeader";

const Index = ({users, header}) => {
    return (
        <>
            {ComponentHeader(header)}
            <div className={"p-2"}>
                <div className={"row row-cols-3 p-1"}>
                    {users.map(user_list =>
                        <UserGridItem key={user_list.id} user={user_list}/>)}
                </div>
            </div>
        </>
    )
}

export default Index;