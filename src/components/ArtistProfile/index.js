import React, {useEffect} from "react";

import SecureArtistContent from "../../_security/secure-artist-content";
import {updateProfile} from "../../_actions/users-actions";
import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../../_actions/profile-actions";

const ArtistProfile = ({artist_id}) => {
    const dispatch = useDispatch()

    const profile = useSelector(state => state.profile)
    useEffect(() => getProfile(dispatch), [dispatch])

    let profile_artist_id = null;
    if ( profile ){
        profile_artist_id = profile.artist_id;
    }


    const handleClaimArtist = async () => {
        try {
            const updated_profile = {...profile, artist_id: artist_id}
            const response = await updateProfile(dispatch, updated_profile)
        } catch (e) {
            alert("Ut oh! We were unable to claim this page")
        }
    }
    return (
        <>
            {console.log(JSON.stringify(profile,undefined,4))}
            <SecureArtistContent>
                {artist_id === profile_artist_id ?
                    <div>You claimed this artist</div>
                    :
                    <button className={"btn btn-primary rounded-pill"}
                            onClick={handleClaimArtist}>
                        Claim Page
                    </button>
                }
            </SecureArtistContent>
        </>
    )
}

export default ArtistProfile