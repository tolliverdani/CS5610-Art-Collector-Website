import React from "react";
import ComponentHeader from "../../ComponentHeader";
import {Link} from "react-router-dom";
import ArtistNotFound from "../../Errors/ArtistNotFound";
import EmptyPosts from "../../Errors/EmptyPosts";
import PostFeed from "../../UpdatePosts/PostFeed";

const ArtistStats = (params) => {

    const artist = params.artist

    console.log(JSON.stringify(artist, undefined, 4))

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
                        <p className={"m-0"}><strong>Date of Birth</strong></p>
                        <p className={"m-0"}>{artist.birthDayAsString}</p>
                    </div>
                    <div className={`p-0`}>
                        <p className={"m-0"}><strong>Date of Death</strong></p>
                        <p className={"m-0"}>
                            {artist.deathDayAsString === null ? "--" : artist.deathDayAsString}
                            </p>
                        </div>
                    <div className={"p-0"}>
                        <p className={"m-0"}><strong>Gender</strong></p>
                        <p className={"m-0"}>{artist.gender}</p>
                    </div>
                    <div className={"p-0"}>
                        <p className={"m-0"}><strong>Biography</strong></p>
                        <p className={"m-0"}>{artist.biography}</p>
                    </div>
                    <div className={`p-0`}>
                        <p className={"m-0"}><strong>Series</strong></p>
                        <p className={"m-0"}>
                            {artist.series === "" ? "--" : artist.series}
                        </p>
                    </div>
                </div>
            </div>
            }
        </div>
    );
}
export default ArtistStats;