import React from "react";

import {updateProfile} from "../../_actions/users-actions";
import {useDispatch} from "react-redux";

const ArtistProfile = ({artist_id, profile}) => {
    const dispatch = useDispatch()

    const handleClaimArtist = async () => {
        try {
            const updated_user = {
                ...profile,
                "artist_id": artist_id
            }
            // delete blank password field to that it isn't updated
            delete updated_user["password"];

            updateProfile(dispatch, updated_user).then(() => {
                alert("You have updated your profile")
            })

        } catch (e) {
            alert("Ut oh! We were unable to claim this page")
        }
    }

    return (
        <>
            {artist_id === profile.artist_id ?
                <div>Artist claimed</div>
                :
                <button className={"btn btn-primary rounded-pill"}
                        onClick={handleClaimArtist}>
                    Claim Page
                </button>
            }
        </>
    )
}

export default ArtistProfile