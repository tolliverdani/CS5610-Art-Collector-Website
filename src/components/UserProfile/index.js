import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {useProfile} from "../../_context/profile-context";

// TODO: very much so a work in progress

const UserProfile = () => {

    const {profile} = useProfile();

    return (
        <>
            <div className={"d-flex align-items-center justify-content-between mt-2 border-bottom p-2"}>
                <div className={'d-flex align-items-center'}>
                    <i className={"m-0 p-0 fa fa-2x fa-user-circle"} aria-hidden="true"/>
                    <h5 className={"m-0 p-0 ps-3"}><strong>{profile.username}</strong></h5>
                </div>
                <Link to={"./edit-profile"} className={"btn btn-sm btn-primary rounded-pill float-end mb-2"}>Edit
                    Profile
                </Link>
            </div>

            <div className={"small mb-1 border-bottom p-2"}>
                <p className={"p-0 small"}>
                    Account ID: @{profile._id}
                </p>
                <p className={"pe-4"}>
                    <i className="fa fa-map-marker pe-2" aria-hidden="true"/>
                    Location: {profile.hasOwnProperty(profile.location) === false ? "Earth" : profile.location}
                </p>
                <p className={"p-0"}>
                    Member joined {profile.joined}
                </p>
                <p className={"p-0"}>
                    Bio: {profile.hasOwnProperty(profile.bio) === false ? "This user has no bio yet." : profile.bio}
                </p>
            </div>

            <div className={"border-bottom p-2"}>
                <pre>{JSON.stringify(profile, null, 2)}</pre>
            </div>
        </>

    );
}
export default UserProfile;