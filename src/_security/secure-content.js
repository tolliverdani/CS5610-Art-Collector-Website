import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {checkLoggedIn} from "../_actions/profile-actions"

const SecureContent = ({children}) => {

    const dispatch = useDispatch()
    const [currentUser, setCurrentUser] = useState()

    const check = async () => {
        try {
            const user = await checkLoggedIn(dispatch)
            setCurrentUser(user)
            console.log("We tried to see if the user is logged in: " + JSON.stringify(user, undefined, 4))
        } catch (e) {
            console.log("user is NOT logged in")
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