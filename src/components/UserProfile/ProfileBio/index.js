import React from "react";
import {useProfile} from "../../../_context/profile-context";
import ComponentHeader from "../../ComponentHeader";

// TODO: very much so a work in progress

const ProfileBio = ({profile}) => {

    return (
        <>
            {ComponentHeader("User Profile")}
            <div className={"p-2 mb-2"}>
                {profile.hasOwnProperty("bio") === false ? "This user has not completed their bio. " +
                    "However, you can still learn more about them based on what they have in their collection!" : profile.bio}
            </div>
        </>
    );
}
export default ProfileBio;