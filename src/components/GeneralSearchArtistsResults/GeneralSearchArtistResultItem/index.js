import React from "react";
import {Link} from "react-router-dom";

const GeneralSearchArtistResultItem = ({artist_info = {"artistId": "1234", "artistName": "Nathanial Ziegler"}}) => {
    const artist_link_url = `/artist/${((artist_info.artistName).toLowerCase()).split(" ").join("-")}/${artist_info.artistId}`

    return (
        <div>
            {/*Container to hold listing item*/}
            <li className={"list-group-item d-flex justify-content-between align-items-center"}>
                <strong>{artist_info.artistName}</strong>
                <Link to={artist_link_url}>
                    <div className={"badge bg-primary rounded-pill"}><i className="fas fa-arrow-right p-0"/></div>
                </Link>
            </li>
        </div>
    )

}

export default GeneralSearchArtistResultItem;