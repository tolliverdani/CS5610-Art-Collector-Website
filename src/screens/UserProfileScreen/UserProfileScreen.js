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
import Connections from "./Friends";
import ProfileStats from "../../components/UserProfile/ProfileStats";
import ProfileBio from "../../components/UserProfile/ProfileBio";
import {findActiveListingsByOwnerId} from "../../_actions/listings-actions";
import Offers from "../../components/Offers";
import {findActiveOffersBySellerId} from "../../_actions/offers-actions";
import SecureContent from "../../components/Security/secure-content";

const UserProfileScreen = () => {

    const {profile} = useProfile()
    const user_id = profile._id
    const dispatch = useDispatch();

    const paintings = useSelector(state => state.collection);
    useEffect(() => findUserCollection(dispatch, user_id), [dispatch, user_id]);

    const listings = useSelector(state => state.listings);
    useEffect(() => findActiveListingsByOwnerId(dispatch, user_id), [dispatch, user_id])

    const offers = useSelector(state => state.offers);
    useEffect( () => findActiveOffersBySellerId(dispatch, user_id), [dispatch, user_id])

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
                        <PaintingListings data={listings}
                                          profile={profile}
                        />

                        <Favorites paintings={paintings}/>
                        <Collection paintings={paintings}/>
                    </div>
                    <div className={'col-3 d-none d-lg-block'}>
                        <UserProfile/>
                        <SecureContent>
                            <Offers profile={profile} data={offers}/>
                        </SecureContent>
                        <Connections/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default UserProfileScreen;