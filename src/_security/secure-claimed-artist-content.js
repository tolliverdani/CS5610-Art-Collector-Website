import {useEffect, useState} from "react";
import {profile} from "../_services/auth-service";

const SecureClaimedArtistContent = ({children, artist_id}) => {
    const [currentUser, setCurrentUser] = useState(false)

    const check = async () => {
        try {
            const user = await profile()
            console.log(user)
            if (user.hasOwnProperty("is_artist") && (user.is_artist === true) && user.artist_id === artist_id) {
                setCurrentUser(true)
            }
        } catch (e) {
        }
    }

    // check when it loads
    useEffect(() => {
        console.log("In secure-claimed-artist-content")

        check()
    }, [])

    if (currentUser) {
        return children
    }
    return null
}

export default SecureClaimedArtistContent