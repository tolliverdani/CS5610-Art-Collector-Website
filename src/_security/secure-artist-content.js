import {useEffect, useState} from "react";
import {profile} from "../_services/auth-service";

const SecureArtistContent = ({children}) => {
    const [currentUser, setCurrentUser] = useState(false)

    const check = async () => {
        console.log("In secure-artist-content")
        try {
            console.log("In secure-artist-content. About to try for profile. ")
            const user = await profile()
            if (user.hasOwnProperty("is_artist") && (user.is_artist === true)) {
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