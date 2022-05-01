import React from "react";

const ArtistNotFound = (params) => {

    let artist = null
    if (params.artist) {
        artist = params.artist
    }

    return (
        <div className={"row"}>
            <div className={"col-6"}>
                <img className={'img-thumbnail thumb-post img-responsive border-0 align-self-center p-0 m-0'}
                     src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                     alt={artist.OriginalArtistName}/>
            </div>
            <div className={"col-6"}>
                <p className={"text-muted m-0 p-0 mb-1"}>Artist Data Not Found</p>
            </div>
        </div>
    )
}

export default ArtistNotFound