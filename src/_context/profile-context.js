import React, {useContext, useState} from "react";
import * as security from "../_services/auth-service";
import * as service from "../_services/user-service";

const ProfileContext = React.createContext()

export const ProfileProvider = ({children}) => {
    const [profile, setProfile] = useState()

    const checkLoggedIn = async () => {
        try {
            const profile = await security.profile()
            setProfile(profile)
            return profile
        } catch (e) {
            throw(e)
        }
    }

    const updateProfile = async () => {
        if (profile && profile.hasOwnProperty("_id")) {
            try {
                const user = await service.findUserById(profile._id)
                setProfile(user)
            } catch (e) {
                throw(e)
            }
        }
    }

    const signup = async (email, username, password) => {
        try {
            const profile = await security.signup(
                email,
                username,
                password,
            )
            setProfile(profile)
        } catch (e) {
            throw(e);
        }
    }

    const login = async (email, password) => {
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

    const value = {profile, signup, login, logout, checkLoggedIn, updateProfile}

    return (
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfile = () => {
    return useContext(ProfileContext)
}