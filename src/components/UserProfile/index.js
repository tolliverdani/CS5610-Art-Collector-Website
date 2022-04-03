import React from "react";
import {Link} from "react-router-dom";

const UserProfile = (profile) => {

    return (
        <>
            <div className={""}>
                <Link to={"./edit-profile"}
                      className={"btn btn-sm btn-primary rounded-pill float-end mt-2 mb-4"}>Edit Profile</Link>
                <h5 className={"m-0 p-0"}><strong>{profile.displayName}</strong></h5>
                <p className={"text-muted m-0 p-0 mb-1"}>@{profile.username}</p>
            </div>

            <div className={"text-muted small mb-1"}>
                <p className={"m-0 p-0 mb-1"}>{profile.bio}</p>
                <span className={"pe-4"}><i className="fa fa-map-marker"
                                            aria-hidden="true"/> {profile.location}</span>
                <span className={"pe-4"}> Last login {profile.lastLogIn}</span>
            </div>
        </>
    );
}
export default UserProfile;