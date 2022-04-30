import {useEffect, useState} from "react";
import {profile} from "../_services/auth-service";
import {useParams} from "react-router-dom";

const SecureProfileContent = ({children}) => {

    const [currentUser, setCurrentUser] = useState(false)

    const {profileId} = useParams()

    const check = async () => {
        try {
            const user = await profile()
            if (profileId && user && user._id === profileId) {
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