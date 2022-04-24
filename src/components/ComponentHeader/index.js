import React from "react";

const ComponentHeader = (header) =>  {
    return (
        <div className={"border-bottom"}>
            <h5><strong>{header}</strong></h5>
        </div>
    )
}

export default ComponentHeader;