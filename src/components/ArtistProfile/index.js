import React from "react";

import SecureArtistContent from "../../_security/secure-artist-content";
import {useProfile} from "../../_context/profile-context";
import {updateProfile} from "../../_actions/users-actions";
import {useDispatch} from "react-redux";

const ArtistProfile = (params) => {

    const {profile, update} = useProfile()
    const dispatch = useDispatch()

    const artist = params.artist

    return (
        <>
            <SecureArtistContent>
                <button className={"btn btn-primary rounded-pill"}
                onClick={updateProfile(dispatch, {...profile, artist_id: artist._id}).then(update())}>
                    Claim Page
                </button>
            </SecureArtistContent>
            <div className={"p-2 mb-2"}>
                <div className={"border-0 m-0"}>
                    <img className={'thumb-post img-responsive border-0'}
                         src={artist.image}
                         alt={artist.OriginalArtistName}/>
                </div>
            </div>
        </>
    )
}

export default ArtistProfile