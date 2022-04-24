import React from "react";
import {useProfile} from "../../../_context/profile-context";

// TODO: very much so a work in progress

const ProfileBio = () => {

    const {profile} = useProfile();

    return (
            <div className={"p-2 border-bottom"}>
                {profile.hasOwnProperty(profile.bio) === false ? "This user has no bio yet" : profile.bio}
            </div>
    );
}
export default ProfileBio;