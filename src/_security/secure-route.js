import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import {profile} from "../_services/auth-service";

const SecureRoute = ({children}) => {
    const [currentUser, setCurrentUser] = useState()
    const [waiting, setWaiting] = useState(true)

    const check = async () => {
        try {
            const user = await profile()
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
        return <Navigate to={"/home"}/>
    }

}


export default SecureRoute