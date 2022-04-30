import React, {useEffect} from "react";

import SecureArtistContent from "../../_security/secure-artist-content";
import {updateProfile} from "../../_actions/users-actions";
import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../../_actions/profile-actions";

const ArtistProfile = ({artist_id}) => {
    const dispatch = useDispatch()

    const profile = useSelector(state => state.profile)
    useEffect(() => getProfile(dispatch), [dispatch])


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
            <div>{JSON.stringify(profile,undefined, 4)}</div>
            <div>{artist_id}, </div>
            <div>{profile.artist_id}</div>
            <SecureArtistContent>
                {artist_id === profile.artist_id ?
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