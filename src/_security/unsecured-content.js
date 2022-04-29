import {useEffect, useState} from "react";
import {profile} from "../_services/auth-service";

const UnsecuredContent = ({children}) => {
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
        return null
    }
    return children
}

export default UnsecuredContent