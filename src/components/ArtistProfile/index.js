import React, {useEffect} from "react";

import SecureArtistContent from "../../_security/secure-artist-content";
import {findAllUsers, updateProfile} from "../../_actions/users-actions";
import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../../_actions/profile-actions";
import SecureClaimedArtistButton from "../../_security/secure-claimed-artist-button";

const ArtistProfile = ({artist_id}) => {
    const dispatch = useDispatch()

    const profile = useSelector(state => state.profile)
    useEffect(() => getProfile(dispatch), [dispatch])

    const users = useSelector(state => state.users)
    useEffect( () => findAllUsers(dispatch), [dispatch])

    let profile_artist_id = null;
    if ( profile ){
        profile_artist_id = profile.artist_id;
    }


    const handleClaimArtist = async () => {
        try {
            const updated_profile = {...profile, "artist_id": artist_id}

            delete updated_profile["password"];

            console.log("Here is the updated profile: " + JSON.stringify(updated_profile, undefined, 4))
            updateProfile(dispatch, updated_profile).then( () => alert("You have added artist"))

        } catch (e) {
            alert("Ut oh! We were unable to claim this page")
        }
    }
    return (
        <>
            <SecureArtistContent>
                {artist_id === profile_artist_id ?
                    <div>You claimed this artist</div>
                    :
                    <SecureClaimedArtistButton artist_id={artist_id} users={users}>
                        <button className={"btn btn-primary rounded-pill"}
                                onClick={handleClaimArtist}>
                            Claim Page
                        </button>
                    </SecureClaimedArtistButton>
                }
            </SecureArtistContent>
        </>
    )
}

export default ArtistProfile