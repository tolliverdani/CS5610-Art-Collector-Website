import React from "react";
import {useProfile} from "../../_context/profile-context";
import ProfileBio from "./ProfileBio";
import ProfileStats from "./ProfileStats";

const UserProfile = (params) => {

    const profile = useProfile()

    return (
        <>
            <div className={"p-2 border-bottom"}>
                <div className={"border-0 m-0"}>

                    {profile.hasOwnProperty("image") === false ?
                        <span>
                        <i className={"m-0 p-0 fa fa-2x fa-user-circle"} aria-hidden="true"/>
                        <span className={"ps-2"}>This user has no image yet</span>
                        </span>
                        :
                        <img className={'thumb-post img-responsive border-0'}
                             src={profile.image}
                             alt={profile.title}
                        />
                    }
                </div>
            </div>
            <ProfileStats/>
            <ProfileBio/>
        </>
    );
}
export default UserProfile;