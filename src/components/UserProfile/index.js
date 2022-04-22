import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {useProfile} from "../../_context/profile-context";
import SecureContent from "../Security/secure-content";
import ProfileStats from "./ProfileStats";
import ComponentHeader from "../ComponentHeader";
import ProfileBio from "./ProfileBio";
import EmptyCollection from "../Errors/EmptyCollection";
import PaintingGrid from "../PaintingGrid";
import Favorites from "./Favorites";
import {useDispatch, useSelector} from "react-redux";
import {findUserCollection} from "../../_actions/collections-actions";

// TODO: very much so a work in progress

const UserProfile = () => {

    const {profile} = useProfile()

    return (
        <>
            <div className={"d-flex align-items-center justify-content-between mt-2 border-bottom p-2"}>
                <div className={"d-flex align-items-center"}>
                    <div className={"pe-3"}>
                        <i className={"m-0 p-0 fa fa-2x fa-user-circle"} aria-hidden="true"/>
                    </div>
                    <div>
                        <h5 className={"m-0 p-0"}><strong>{profile.username}</strong></h5>
                        <SecureContent>
                            <p className={"p-0 m-0 small"}>{profile._id}</p>
                        </SecureContent>
                    </div>
                </div>
                <Link to={"./edit-profile"} className={"btn btn-sm btn-primary rounded-pill float-end mb-2"}>Edit
                    Profile
                </Link>
            </div>

            <ProfileStats/>

            <ProfileBio/>

        </>

    );
}
export default UserProfile;