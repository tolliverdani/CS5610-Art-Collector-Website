import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {checkLoggedIn} from "../_actions/profile-actions";

const SecureAdminRoute = ({children}) => {
    const [currentUser, setCurrentUser] = useState()
    const [waiting, setWaiting] = useState(true)

    const dispatch = useDispatch()

    const check = async () => {
        try {
            const user = await checkLoggedIn(dispatch)
            if (user.hasOwnProperty("is_admin") && (user.is_admin === true)) {
                setCurrentUser(user)
                setWaiting(false)}
        } catch (e) {
            setWaiting(false)
        }
    }

    // check when it loads
    useEffect(() => {
        check()
        // eslint-disable-line react-hooks/exhaustive-deps
    }, [])

    if (currentUser) {
        return children
    } else if (waiting) {
        return null
    } else {
        return null
    }

}


export default SecureAdminRoute