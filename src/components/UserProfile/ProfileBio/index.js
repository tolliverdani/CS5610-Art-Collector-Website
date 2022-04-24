import React from "react";
import {useProfile} from "../../../_context/profile-context";
import ComponentHeader from "../../ComponentHeader";

// TODO: very much so a work in progress

const ProfileBio = () => {

    const {profile} = useProfile();

    return (
        <>
            <div className={"p-2 mb-2"}>
                {profile.hasOwnProperty(profile.bio) === false ? "This user has no bio yet" : profile.bio}
            </div>
        </>
    );
}
export default ProfileBio;