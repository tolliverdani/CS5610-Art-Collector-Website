import React from "react";
import {useProfile} from "../../../_context/profile-context";
import SecureContent from "../../../_security/secure-content";
import EditProfileModal from "../EditProfile";

const ProfileHeader = ({profile}) => {

    return (
        <>
            <div className={"d-flex align-items-center p-2"}>
                {profile.hasOwnProperty("image") === false ?
                    <span>
                        <i className={"m-0 p-0 fa fa-2x fa-user-circle"} aria-hidden="true"/>
                        </span>
                    :
                    <img className={'thumb-post img-responsive rounded-circle border-0'}
                         src={profile.image}
                         alt={profile.title}
                    />
                }
                <h5 className={"m-0 ps-3 p-0"}><strong>{profile.username}</strong></h5>
            </div>
        </>
    );
}
export default ProfileHeader;