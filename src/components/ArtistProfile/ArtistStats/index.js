import React from "react";
import ComponentHeader from "../../ComponentHeader";
import {Link} from "react-router-dom";
import ArtistNotFound from "../../Errors/ArtistNotFound";

const ArtistStats = (params) => {

    const artist = params.artist

    return (
        <div className={"p-2 mb-2"}>
            {artist.OriginalArtistName === "artist_not_found" ?
                <ArtistNotFound params={artist}/>
                :
                <div className={"p-2 bg-light border-bottom"}>
                <div className={""}>
                    <div>
                        {ComponentHeader(artist.OriginalArtistName)}
                    </div>
                    <div className={"p-0"}>
                        <p className={"m-0"}><strong>Birthday</strong></p>
                        <p className={"m-0"}>{artist.birthDayAsString}</p>
                    </div>
                    <div className={"p-0"}>
                        <p className={"m-0"}><strong>Gender</strong></p>
                        <p className={"m-0"}>{artist.gender}</p>
                    </div>
                </div>
            </div>
            }
        </div>
    );
}
export default ArtistStats;