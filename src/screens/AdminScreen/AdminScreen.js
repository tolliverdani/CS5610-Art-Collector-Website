import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

import {findAllOffers} from "../../_actions/offers-actions";

import Offers from "../../components/Offers";
import NavigationTopMenu from "../../components/NavigationTopMenu";
import NavigationSidebar from "../../components/NavigationSidebar";
import {findAllUsers, findUserById} from "../../_actions/users-actions";
import {findAllListings} from "../../_actions/listings-actions";
import AdminLists from "../../components/AdminLists";
import {getProfile} from "../../_actions/profile-actions";

const AdminScreen = () => {

    const dispatch = useDispatch();

    const offers = useSelector(state => state.offers);
    const users = useSelector(state => state.users)
    const listings = useSelector(state => state.listings);

    useEffect(() => findAllOffers(dispatch), [dispatch])
    useEffect(() => findAllUsers(dispatch), [dispatch]);
    useEffect(() => findAllListings(dispatch), [dispatch])

    return (
        <div className={"container"}>
            <NavigationTopMenu/>
            <div className={"row m-3 p-2"}>
                <div className={'col-2'}>
                    <NavigationSidebar
                        active={useLocation().pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
                </div>
                <div className={'col-10'}>
                    <div className={"row"}>
                        <div className={'col-lg-4'}>
                            <AdminLists data={users} header={"Users"} type={"users"}/>
                        </div>
                        <div className={'col-lg-4'}>
                            <AdminLists data={offers} header={"Offers"} type={"offers"}/>
                        </div>
                        <div className={'col-lg-4'}>
                            <AdminLists data={listings} header={"Listings "} type={"listings"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AdminScreen;