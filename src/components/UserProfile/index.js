import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useProfile} from "../../_context/profile-context";
import {logout} from "../../_services/auth-service";
import {useDispatch, useSelector} from "react-redux";
import {findUserCollection} from "../../_actions/collections-actions";
import ComponentHeader from "../ComponentHeader";
import EmptyCollection from "../Errors/EmptyCollection";

// TODO: very much so a work in progress

const UserProfile = () => {
    const collection = useSelector(state => state.collection)
    const dispatch = useDispatch();
    const {profile} = useProfile();

    const user_id = profile._id;

    useEffect(() => findUserCollection(dispatch, user_id), [user_id]);

    return (
        <>
            <div className={"d-flex align-items-center justify-content-between mt-2 border-bottom p-2"}>
                <div className={'d-flex align-items-center'}>
                    <i className={"m-0 p-0 fa fa-2x fa-user-circle"} aria-hidden="true"/>
                    <p className={"m-0 p-0 ps-3"}>{ComponentHeader(profile.username)}</p>
                </div>
                <btn>
                    <Link to={"./edit-profile"} className={"btn btn-sm btn-primary rounded-pill float-end mb-2"}>Edit
                        Profile</Link>
                </btn>
            </div>

            <div className={"text-muted small mb-1 border-bottom p-2"}>
                <p className={"p-0 small"}>
                    Account ID: @{profile._id}
                </p>
                <p className={"pe-4"}>
                    <i className="fa fa-map-marker pe-2" aria-hidden="true"/>
                    Location: {profile.hasOwnProperty(profile.location) === false ? "Earth" : profile.location}
                </p>
                <p className={"p-0"}> Member joined {profile.joined}</p>
            </div>

            <div className={"border-bottom p-2"}>
                {ComponentHeader("Bio")}
                <p className={"p-0"}>
                    {profile.hasOwnProperty(profile.bio) === false ? "This user has no bio yet." : profile.bio}
                </p>
            </div>

            <div className={"border-bottom p-2"}>
                {ComponentHeader(profile.username + "'s Collection")}
                {collection.contents.length === 0 ?
                    (EmptyCollection())
                    :
                    (<pre>{JSON.stringify(collection, null, 2)}</pre>)}
            </div>

            <div className={"border-bottom p-2"}>
                (
                <pre>{JSON.stringify(profile, null, 2)}</pre>
                )
            </div>
        </>

    );
}
export default UserProfile;