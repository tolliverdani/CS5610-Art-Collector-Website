import {useProfile} from "../_context/profile-context";
import {useEffect, useState} from "react";

const ThisUserContent = ({children, id}) => {
    const {profile} = useProfile()
    const [thisUser, setThisUser] = useState(false);


    const check = async () => {
        if ( profile._id === id) {
            setThisUser(true);
        }
    }

    // check when it loads
    useEffect(() => {
        check()
    }, [])

    if (thisUser) {
        return children
    }
    return null
}

export default ThisUserContent