import {useProfile} from "../../_context/profile-context";
import {useEffect, useState} from "react";

const UnsecuredContent = ({children}) => {
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
        return null
    }
    return children
}

export default UnsecuredContent