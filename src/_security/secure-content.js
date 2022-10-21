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
        } catch (e) {
        }
    }

    // check when it loads
    useEffect(() => {
        // eslint-disable-line react-hooks/exhaustive-deps
        check()
    },[])

    if (currentUser) {
        return children
    }
    return null
}

export default SecureContent