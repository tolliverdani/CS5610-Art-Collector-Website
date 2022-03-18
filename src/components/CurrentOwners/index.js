import react from "react";

import CurrentOwnersItem from "./CurrentOwnersItem";
import owners from "./currentowners.json";

const CurrentOwners = () =>  {
    return (
        <>
            <h5><strong>Current Owners</strong></h5>
            <ul className={"list-group mb-2"}>
                {owners.map(owner_list => <CurrentOwnersItem owners={owner_list}/>)}
            </ul>
        </>
    )
}

export default CurrentOwners;