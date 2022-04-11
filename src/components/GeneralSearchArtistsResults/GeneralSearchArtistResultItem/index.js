import React from "react";
import {Link} from "react-router-dom";

const GeneralSearchArtistResultItem = ({artist_info = {"artistId": "1234", "artistName": "Nathanial Ziegler"}}) => {
    return (
        <div>
            {/*Container to hold listing item*/}
            <li className={"list-group-item mb-2 bg-light border-0 d-flex justify-content-center align-items-center"}>
                <strong>{artist_info.artistName}</strong>
                <Link to={`/artist/${((artist_info.artistName).toLowerCase()).split(" ").join("-")}/${artist_info.artistId}`}>
                    <div className={"btn btn-success btn-sm ms-2"}><i className="fas fa-arrow-right p-0"/></div>
                </Link>
            </li>
        </div>
    )

}

export default GeneralSearchArtistResultItem;