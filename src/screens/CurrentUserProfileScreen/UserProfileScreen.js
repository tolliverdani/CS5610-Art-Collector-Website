import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

import {findUserCollection} from "../../_actions/collections-actions";
import {findActiveListingsByOwnerId} from "../../_actions/listings-actions";
import {findActiveOffersBySellerId} from "../../_actions/offers-actions";
import SecureContent from "../../_security/secure-content";

import Offers from "../../components/Offers";
import NavigationTopMenu from "../../components/NavigationTopMenu";
import UserProfile from "../../components/UserProfile";
import NavigationSidebar from "../../components/NavigationSidebar";
import ListingsGrid from "../../components/ListingsGrid";
import Collection from "../../components/UserProfile/Collection";
import {getProfile} from "../../_actions/profile-actions";
import {findUserById} from "../../_actions/users-actions";

const CurrentUserProfileScreen = () => {

    const dispatch = useDispatch();

    const profile = useSelector(state => state.profile)
    const paintings = useSelector(state => state.collection);
    const listings = useSelector(state => state.listings);
    const offers = useSelector(state => state.offers);

    let profile_id = null;
    if ( profile ){
        profile_id = profile._id
    }

    useEffect(() => findUserById(dispatch, profile_id), [dispatch, profile_id])
    useEffect(() => findUserCollection(dispatch, profile_id), [dispatch, profile_id]);
    useEffect(() => findActiveListingsByOwnerId(dispatch, profile_id), [dispatch, profile_id])
    useEffect(() => findActiveOffersBySellerId(dispatch, profile_id), [dispatch, profile_id])
    useEffect(() => getProfile(dispatch), [dispatch])

    return (
        <div className={"container"}>
            <NavigationTopMenu/>
            <div className={"row m-3 p-2"}>
                <div className={'col-2'}>
                    <NavigationSidebar
                        active={useLocation().pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
                </div>
                <div className={'col-10 col-lg-8'}>
                    <ListingsGrid type={"user"} data={listings}/>
                    <Collection paintings={paintings}/>
                </div>
                <div className={'d-none d-lg-block col-2'}>
                    <UserProfile profile={profile}/>
                    <SecureContent>
                        <Offers data={offers}/>
                    </SecureContent>
                </div>
            </div>
        </div>
    )
        ;
};
export default CurrentUserProfileScreen;