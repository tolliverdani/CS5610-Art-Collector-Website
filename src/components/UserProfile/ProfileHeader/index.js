import React from "react";
import {useProfile} from "../../../_context/profile-context";
import SecureContent from "../../Security/secure-content";
import EditProfileModal from "../EditProfile";

const ProfileHeader = () => {

    const {profile} = useProfile()

    return (
        <>
            <div className={"d-flex align-items-center justify-content-between border-bottom p-2"}>
                <div className={"d-flex align-items-center"}>
                    <div>
                        <h5 className={"m-0 p-0"}><strong>{profile.username}</strong></h5>
                        <SecureContent>
                            <p className={"p-0 m-0 small"}>{profile._id}</p>
                        </SecureContent>
                    </div>
                </div>
                <SecureContent>
                    <EditProfileModal/>
                </SecureContent>
            </div>
        </>
    );
}
export default ProfileHeader;