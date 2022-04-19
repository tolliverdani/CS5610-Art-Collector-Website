import {useProfile} from "../../_context/profile-context";
import {useEffect, useState} from "react";

const SecureContent = ({children}) => {
    const {checkLoggedIn} = useProfile()
    const [currentUser, setCurrentUser] = useState()

    const check = async () => {
        try {
            const user = await checkLoggedIn()
            setCurrentUser(user)
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

export default SecureContent