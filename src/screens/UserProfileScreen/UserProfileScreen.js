import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";

import {findUserCollection} from "../../_actions/collections-actions";
import {findActiveListingsByOwnerId} from "../../_actions/listings-actions";
import {findActiveOffersBySellerId} from "../../_actions/offers-actions";
import SecureContent from "../../_security/secure-content";

import Offers from "../../components/Offers";
import NavigationTopMenu from "../../components/NavigationTopMenu";
import UserProfile from "../../components/UserProfile";
import NavigationSidebar from "../../components/NavigationSidebar";
import ListingsGrid from "../../components/ListingsGrid";
import UserGrid from "../../components/UserGrid";
import Collection from "../../components/UserProfile/Collection";
import {findAllUsers, findUserById} from "../../_actions/users-actions";
import ProfileBio from "../../components/UserProfile/ProfileBio";
import SecureProfileContent from "../../_security/secure-profile-content";

const UserProfileScreen = () => {

    const {profileId} = useParams()
    const dispatch = useDispatch();

    const user = useSelector(state => state.singleUser);
    const paintings = useSelector(state => state.collection);
    const listings = useSelector(state => state.listings);
    const offers = useSelector(state => state.offers);

    let local_user_id = null;
    if ( user ) {
        local_user_id = profileId;
    }

    useEffect(() => findUserCollection(dispatch, local_user_id), [dispatch, local_user_id]);
    useEffect(() => findUserById(dispatch, profileId), [dispatch, profileId])
    useEffect(() => findActiveListingsByOwnerId(dispatch, local_user_id), [dispatch, local_user_id])
    useEffect(() => findActiveOffersBySellerId(dispatch, local_user_id), [dispatch, local_user_id])

    return (
        <div className={"container"}>
            <NavigationTopMenu/>
            <div className={"row m-3 p-2"}>
                <div className={'col-2'}>
                    <NavigationSidebar
                        active={useLocation().pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
                </div>
                <div className={'col-10 col-lg-8'}>
                    <ProfileBio profile={user}/>
                    <ListingsGrid type={"user"} data={listings}/>
                    <Collection paintings={paintings}/>
                </div>
                <div className={'d-none d-lg-block col-2'}>
                    <UserProfile profile={user}/>
                    <SecureProfileContent profileId={profileId}>
                        <Offers data={offers}/>
                    </SecureProfileContent>
                </div>
            </div>
        </div>
    )
        ;
};
export default UserProfileScreen;