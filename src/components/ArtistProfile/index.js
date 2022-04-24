import React from "react";

const ArtistProfile = (params) => {

    const artist = params.artist

    return (
        <div className={"p-2 mb-2"}>
            <div className={"border-0 m-0"}>
                <img className={'thumb-post img-responsive border-0'}
                     src={artist.image}
                     alt={artist.OriginalArtistName}/>
            </div>
        </div>
    )
}

export default ArtistProfile