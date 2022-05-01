import SecureClaimedArtistContent from "../../../_security/secure-claimed-artist-content";
import CreatePost from "../CreatePost";
import SecureContent from "../../../_security/secure-content";
import React from "react";
import CreatePostArtist from "../CreatePostArtist";

const CreatePostLogic = ({painting_data, is_artist, artist_id}) => {

    return (
        <>
            {is_artist ?
                <SecureClaimedArtistContent artist_id={artist_id}>
                    <CreatePostArtist is_artist={is_artist} painting_data={painting_data}/>
                </SecureClaimedArtistContent>
                :
                <SecureContent>
                    <CreatePost is_artist={is_artist} painting_data={painting_data}/>
                </SecureContent>
            }
        </>
    )
}

export default CreatePostLogic