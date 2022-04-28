import {useProfile} from "../_context/profile-context";
import {useEffect, useState} from "react";

const SecureArtistContent = ({children}) => {
    const {checkLoggedIn} = useProfile()
    const [currentUser, setCurrentUser] = useState(false)

    const check = async () => {
        try {
            const user = await checkLoggedIn()
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