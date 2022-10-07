import {useEffect, useState} from "react";
import {profile} from "../_services/auth-service";
import {useParams} from "react-router-dom";

const SecureProfileContent = ({children, profile_id}) => {

    const [currentUser, setCurrentUser] = useState(false)

    let {profileId} = useParams()

    if (profileId === undefined || profileId === null || profileId === "") {
        profileId = profile_id
    }

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
        // eslint-disable-line react-hooks/exhaustive-deps
        check()
    })

    if (currentUser) {
        return children
    }
    return null
}

export default SecureProfileContent