import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import {profile} from "../_services/auth-service";
import {useDispatch} from "react-redux";
import {checkLoggedIn, getProfile} from "../_actions/profile-actions";

const SecureRoute = ({children}) => {
    const [currentUser, setCurrentUser] = useState()
    const [waiting, setWaiting] = useState(true)

    const dispatch = useDispatch()

    const check = async () => {
        try {
            const user = await checkLoggedIn(dispatch)
            setCurrentUser(user)
            setWaiting(false)

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
        return null
    }

}


export default SecureRoute