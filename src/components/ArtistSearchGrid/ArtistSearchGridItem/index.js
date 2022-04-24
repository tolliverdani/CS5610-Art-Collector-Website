import React from "react";
import {Link} from "react-router-dom";

const Index = ({artist}) => {

    const artist_link_url = `/artist/${((artist.artistName).toLowerCase())
        .split(" ").join("-")}/${artist.artistId}`

    return (
        <div>
            <li className={"list-group-item d-flex justify-content-between align-items-center border-0 p-0 m-0"}>
                <Link to={artist_link_url}>
                    <div className={"badge bg-transparent text-primary rounded-pill"}>
                        {artist.artistName}
                    </div>
                </Link>
            </li>
        </div>
    )

}

export default Index;