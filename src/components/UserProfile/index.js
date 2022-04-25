import React from "react";
import ProfileStats from "./ProfileStats";
import ProfileHeader from "./ProfileHeader";

const UserProfile = ({profile}) => {

    console.log("inside the userProfile " + profile)
    return (
        <>
            <ProfileHeader profile={profile}/>
            <ProfileStats profile={profile}/>
        </>
    );
}
export default UserProfile;