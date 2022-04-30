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
            //console.log("user is logged in")
        } catch (e) {
            //console.log("user is NOT logged in")
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

export default SecureContent