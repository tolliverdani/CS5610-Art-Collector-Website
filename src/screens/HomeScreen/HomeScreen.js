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

const HomeScreen = () => {

    const {profile} = useProfile()
    let user_id = null
    if (profile) {
        user_id = profile._id
    }

    const dispatch = useDispatch();

    const paintings_data = useSelector(state => state.paintings);
    const offers = useSelector(state => state.offers);
    const users = useSelector(state => state.users)

    useEffect(() => randomPaintings(dispatch), [dispatch]);
    useEffect(() => findActiveOffersBySellerId(dispatch, user_id), [dispatch, user_id])
    useEffect(() => findAllUsers(dispatch), [dispatch]);

    const paintings = paintings_data.data

    return (
        <div className={"container"}>
            <NavigationTopMenu/>
            <div className={"row m-3 p-2"}>
                <div className={'col-2'}>
                    <NavigationSidebar
                        active={useLocation().pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
                </div>
                <div className={'col-10 col-lg-8'}>
                    {ComponentHeader("Popular Paintings")}
                    <PaintingGrid type={"random"} data={paintings}/>
                </div>
                <div className={'d-none d-lg-block col-2'}>
                    <SecureContent>
                        <Offers data={offers}/>
                    </SecureContent>
                    <UserGrid users={users} header={"Discover"}/>
                </div>
            </div>
        </div>
    );
};
export default HomeScreen;