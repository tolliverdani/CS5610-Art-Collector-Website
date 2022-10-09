import {useEffect, useState} from "react";
import {profile} from "../_services/auth-service";

const SecureCommentContent = ({children, user_id}) => {

    const [currentUser, setCurrentUser] = useState(false)

    const check = async () => {
        try {
            const user = await profile()
            if (user && user._id === user_id) {
                setCurrentUser(true)
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

export default SecureCommentContent