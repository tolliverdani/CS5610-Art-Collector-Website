import React from "react";
import UpdatePostItem from "./UpdatePostItem";
import updates from "./UpdatePostItem/updates.json"
import ComponentHeader from "../ComponentHeader";

const UpdatePosts = () => {
    return (
            <div className={"list-group"}>
                {updates.map(update_post => <UpdatePostItem key={update_post._id} update={update_post}/>)}
            </div>
    )
}

export default UpdatePosts;
