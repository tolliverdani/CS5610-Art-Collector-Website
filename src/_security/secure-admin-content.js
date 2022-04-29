import {useEffect, useState} from "react";
import {profile} from "../_services/auth-service";

const SecureAdminContent = ({children}) => {
    const [currentUser, setCurrentUser] = useState()

    const check = async () => {
        try {
            const user = await profile()
            if (user.hasOwnProperty("is_admin")
                && (user.is_admin === true)) {
                setCurrentUser(user)
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

export default SecureAdminContent