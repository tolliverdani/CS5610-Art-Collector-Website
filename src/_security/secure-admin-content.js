import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {checkLoggedIn} from "../_actions/profile-actions";

const SecureAdminContent = ({children}) => {

    const dispatch = useDispatch()
    const [currentUser, setCurrentUser] = useState()

    const check = async () => {
        try {
            const user = await checkLoggedIn(dispatch)
            if (user.hasOwnProperty("is_admin")
                && (user.is_admin === true)) {
                setCurrentUser(user)
            }
        } catch (e) {
        }
    }

    // check when it loads
    useEffect(() => {
        // eslint-disable-line react-hooks/exhaustive-deps
        check()
    }, [])

    if (currentUser) {
        return children
    }
    return null
}

export default SecureAdminContent