import React, {useContext, useState} from "react";
import * as security from "../_services/auth-service";
import * as service from "../_services/auth-service";

const ProfileContext = React.createContext()

export const ProfileProvider = ({children}) => {
    const [profile, setProfile] = useState()

    const setPaintings = async () => {
        try {
            const profile = await security.login(
                email,
                password
            )
            setProfile(profile)
        } catch (e) {
            throw(e)
        }
    }

    const logout = async () => {
        try {
            await security.logout()
        } catch (e) {
            throw(e)
        }
    }

    const value = {profile, signup, login, logout, checkLoggedIn}
    return (
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfile = () => {
    return useContext(ProfileContext)
}