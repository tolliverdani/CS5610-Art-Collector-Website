import {useEffect, useState} from "react";
import {profile} from "../_services/auth-service";

const SecureArtistContent = ({children}) => {
    const [currentUser, setCurrentUser] = useState(false)

    const check = async () => {
        try {
            const user = await profile()
            if (user.hasOwnProperty("is_artist")
                && (user.is_artist === true)) {
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