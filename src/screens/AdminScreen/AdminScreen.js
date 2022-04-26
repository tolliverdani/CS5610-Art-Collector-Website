import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

import {useProfile} from "../../_context/profile-context";
import {randomPaintings} from "../../_actions/artpieces-actions";
import {findActiveOffersBySellerId} from "../../_actions/offers-actions";
import SecureContent from "../../_security/secure-content";

import Offers from "../../components/Offers";
import NavigationTopMenu from "../../components/NavigationTopMenu";
import NavigationSidebar from "../../components/NavigationSidebar";
import PaintingGrid from "../../components/PaintingGrid";
import ComponentHeader from "../../components/ComponentHeader";
import UserGrid from "../../components/UserGrid";
import {findAllUsers} from "../../_actions/users-actions";
import {findAllActiveListings} from "../../_actions/listings-actions";
import ListingsGrid from "../../components/ListingsGrid";
import AdminLists from "../../components/AdminLists";

const AdminScreen = () => {

    const {profile} = useProfile()
    let user_id = null
    if (profile) {
        user_id = profile._id
    }

    const dispatch = useDispatch();

    const paintings_data = useSelector(state => state.paintings);
    const offers = useSelector(state => state.offers);
    const users = useSelector(state => state.users)
    const listings = useSelector(sate => sate.listings);

    useEffect(() => randomPaintings(dispatch), [dispatch]);
    useEffect(() => findActiveOffersBySellerId(dispatch, user_id), [dispatch, user_id])
    useEffect(() => findAllUsers(dispatch), [dispatch]);
    useEffect(() => findAllActiveListings(dispatch), [dispatch])

    const paintings = paintings_data.data

    return (
        <div className={"container"}>
            <NavigationTopMenu/>
            <div className={"row m-3 p-2"}>
                <div className={'col-2'}>
                    <NavigationSidebar
                        active={useLocation().pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
                </div>
                <div className={'col-3'}>
                    <AdminLists data={users} header={"Users"} type={"users"}/>
                </div>
                <div className={'col-3'}>
                    <Offers data={offers}/>
                </div>
                <div className={'col-3'}>
                    <ListingsGrid type={"painting"} data={listings}/>
                </div>
            </div>
        </div>
    );
};
export default AdminScreen;