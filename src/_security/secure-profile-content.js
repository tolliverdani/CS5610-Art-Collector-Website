import {useEffect, useState} from "react";
import {profile} from "../_services/auth-service";
import {useParams} from "react-router-dom";

const SecureProfileContent = ({children, profileId}) => {
    const [currentUser, setCurrentUser] = useState(false)

    const check = async () => {
        try {
            const user = await profile()
            if (user._id === profileId) {
                setCurrentUser(true)
            }
        } catch (e) {
        }
    }

    // check when it loads
    useEffect(() => {
        check()
    }, [profileId])

    if (currentUser) {
        return children
    }
    return null
}

export default SecureProfileContent