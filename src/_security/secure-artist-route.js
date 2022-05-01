import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import {profile} from "../_services/auth-service";

const SecureArtistRoute = ({children}) => {
    const [currentUser, setCurrentUser] = useState()
    const [waiting, setWaiting] = useState(true)

    const check = async () => {
        console.log("In secure-artist-route")

        try {
            const user = await profile()
            if (user.hasOwnProperty("is_artist") && (user.is_artist === true)) {
                setCurrentUser(user)
            setWaiting(false)}
        } catch (e) {
            setWaiting(false)
        }
    }

    // check when it loads
    useEffect(() => {
        check()
    }, [])

    if (currentUser) {
        return children
    } else if (waiting) {
        return null
    } else {
        return <Navigate to={"/home"}/>
    }

}


export default SecureArtistRoute