import {useProfile} from "../_context/profile-context";
import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";

const SecureAdminRoute = ({children}) => {
    const {checkLoggedIn} = useProfile()
    const [currentUser, setCurrentUser] = useState()
    const [waiting, setWaiting] = useState(true)

    const check = async () => {
        try {
            const user = await checkLoggedIn()
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
    }, [])

    if (currentUser) {
        return children
    } else if (waiting) {
        return null
    } else {
        return <Navigate to={"/home"}/>
    }

}


export default SecureAdminRoute