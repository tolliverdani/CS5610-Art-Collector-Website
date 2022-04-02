import React from "react";

const UpdatePostItem = ({update = {
    title:"Title",
    date: "1990-07-04",
    content: "Filler text goes here."
}}) =>{
    return (
        <div className={"list-group-item"}>
            <div className={"d-flex justify-content-between"}>
                <h5>{update.title}</h5>
                <small>{update.date}</small>
            </div>
            <div className={"mb-1"}>
                {update.content}
            </div>
        </div>
    )
}

export default UpdatePostItem;