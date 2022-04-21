import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useProfile} from "../../_context/profile-context";
import {logout} from "../../_services/auth-service";
import {useDispatch, useSelector} from "react-redux";
import {findUserCollection} from "../../_actions/collections-actions";


const UserProfile = () => {
    const collection = useSelector( state => state.collection)
    const dispatch = useDispatch();
    const {profile} = useProfile();
    const user_id = profile._id;
    useEffect( () => findUserCollection(dispatch, user_id),[user_id]);
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logout()
            navigate('/home')
        } catch (e) {
            throw(e);
        }
    }

    return (
        <>
            <button className={`btn btn-danger`}
                onClick={handleLogout}>Logout
            </button>

            <div className={""}>
                <Link to={"./edit-profile"}
                      className={"btn btn-sm btn-primary rounded-pill float-end mt-2 mb-4"}>Edit Profile</Link>
                <h5 className={"m-0 p-0"}><strong>{profile.email}</strong></h5>
                <p className={"text-muted m-0 p-0 mb-1"}>@{profile.username}</p>
                <p className={"text-muted m-0 p-0 mb-1"}>@{profile._id}</p>
            </div>

            <div className={"text-muted small mb-1"}>
                <p className={"m-0 p-0 mb-1"}>{profile.bio}</p>
                <span className={"pe-4"}><i className="fa fa-map-marker"
                                            aria-hidden="true"/> {profile.location}</span>
                <span className={"pe-4"}> Time on website {Date.now() - profile.joined}</span>
            </div>
            <br/>
            <h5>User Collection</h5>
            <pre>{JSON.stringify(collection, null, 2)}</pre>
        </>
    );
}
export default UserProfile;