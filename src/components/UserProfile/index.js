import React from "react";
import {useProfile} from "../../_context/profile-context";
import ProfileStats from "./ProfileStats";
import ProfileHeader from "./ProfileHeader";
import EditProfileModal from "./EditProfile";
import SecureContent from "../../_security/secure-content";

const UserProfile = () => {

    const profile = useProfile()

    return (
        <>
            <ProfileHeader/>
            <ProfileStats/>
        </>
    );
}
export default UserProfile;