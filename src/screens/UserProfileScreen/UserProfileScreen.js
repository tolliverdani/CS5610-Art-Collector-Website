import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

import NavigationTopMenu from "../../components/NavigationTopMenu";
import PaintingListings from "../../components/PaintingListings";
import UserProfile from "../../components/UserProfile";
import NavigationSidebar from "../../components/NavigationSidebar";

import {findUserCollection} from "../../_actions/collections-actions";
import {useProfile} from "../../_context/profile-context";
import Favorites from "../../components/UserProfile/Favorites";
import Collection from "../../components/UserProfile/Collection";
import ProfileHeader from "../../components/UserProfile/ProfileHeader";
import Friends from "./Friends";
import ComponentHeader from "../../components/ComponentHeader";
import ProfileStats from "../../components/UserProfile/ProfileStats";
import ProfileBio from "../../components/UserProfile/ProfileBio";
import {findAllComments} from "../../_actions/comments-actions";
import {findActiveListingsByOwnerId} from "../../_actions/listings-actions";


const UserProfileScreen = () => {

    const {profile} = useProfile()
    const dispatch = useDispatch();
    const paintings = useSelector(state => state.collection);
    const listings = useSelector(state => state.listings );


    const user_id = profile._id
    useEffect(() => findUserCollection(dispatch, user_id), [user_id]);
    useEffect(() => findActiveListingsByOwnerId(dispatch, user_id),[dispatch, user_id])
    return (
        <>
            <NavigationTopMenu/>
            <div className={'container'}>
                <div className={'row pt-2'}>
                    <div className={'col-2'}>
                        <NavigationSidebar
                            active={useLocation().pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
                    </div>
                    <div className={'col-10 col-lg-7'}>
                        <ProfileHeader profile={profile}/>
                        <PaintingListings data={listings}/>
                        <Favorites paintings={paintings}/>
                        <Collection paintings={paintings}/>
                    </div>
                    <div className={'col-3 d-none d-lg-block'}>
                        <UserProfile/>
                        <ProfileStats/>
                        <ProfileBio/>
                        <Friends/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default UserProfileScreen;