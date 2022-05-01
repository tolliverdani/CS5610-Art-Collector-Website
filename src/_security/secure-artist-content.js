import {useEffect, useState} from "react";

const SecureArtistContent = ({children, profile}) => {
    const [currentUser, setCurrentUser] = useState(false)

    const check = async () => {
        try {
            if (profile && profile.hasOwnProperty("is_artist") && (profile.is_artist === true)) {
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

export default SecureArtistContent