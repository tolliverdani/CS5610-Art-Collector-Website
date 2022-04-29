import {useEffect, useState} from "react";
import {profile} from "../_services/auth-service";

const SecureContent = ({children}) => {
    const [currentUser, setCurrentUser] = useState()

    const check = async () => {
        try {
            const user = await profile()
            setCurrentUser(user)
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

export default SecureContent