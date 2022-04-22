import React from "react";
import {Link} from "react-router-dom";
import {useProfile} from "../../../_context/profile-context";
import SecureContent from "../../Security/secure-content";

const ProfileHeader = () => {

    const {profile} = useProfile()

    return (
        <>
            <div className={"d-flex align-items-center justify-content-between border-bottom p-2"}>
                <div className={"d-flex align-items-center"}>
                    <div className={"pe-3"}>
                        {profile.hasOwnProperty("image") === false ?
                            <i className={"m-0 p-0 fa fa-2x fa-user-circle"} aria-hidden="true"/>
                            :
                            <img className={"img-thumbnail rounded-circle"} src={profile.image} alt={profile.username}/>
                        }
                    </div>
                    <div>
                        <h5 className={"m-0 p-0"}><strong>{profile.username}</strong></h5>
                        <SecureContent>
                            <p className={"p-0 m-0 small"}>{profile._id}</p>
                        </SecureContent>
                    </div>
                </div>
                <SecureContent>
                    <Link to={"./edit-profile"} className={"btn btn-sm btn-primary rounded-pill float-end mb-2"}>Edit
                        Profile
                    </Link>
                </SecureContent>
            </div>
        </>
    );
}
export default ProfileHeader;