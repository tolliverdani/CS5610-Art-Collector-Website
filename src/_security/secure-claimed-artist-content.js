import {useEffect, useState} from "react";

const SecureClaimedArtistContent = ({children, profile, artist_id}) => {
    const [currentUser, setCurrentUser] = useState(false)

    const check = async () => {
        try {
            if (profile.hasOwnProperty("is_artist") && (profile.is_artist === true)) {
                setCurrentUser(true)
            }
        } catch (e) {
        }
    }

    // check when it loads
    useEffect(() => {
        check()
    }, [])

    if (currentUser) {
        return children
    }
    return null
}

export default SecureClaimedArtistContent