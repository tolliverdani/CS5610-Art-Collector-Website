import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

import NavigationTopMenu from "../../components/NavigationTopMenu";
import NavigationSidebar from "../../components/NavigationSidebar";
import PaintingListings from "../../components/Listings";
import {useProfile} from "../../_context/profile-context";
import {findAllActiveListings} from "../../_actions/listings-actions";

const Index = () => {
    const {profile} = useProfile();
    const dispatch = useDispatch();

    const listings = useSelector(state => state.listings);
    useEffect(() => findAllActiveListings(dispatch),[dispatch])

    return (
        <div>
            <NavigationTopMenu/>
            <div className={"row m-3 p-2"}>
                <div className={'col-2'}>
                    <NavigationSidebar active={useLocation().pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
                </div>
                <div className={'col-10 col-lg-8'}>
                    <PaintingListings data={listings}
                                      profile={profile}/>
                </div>
                <div className={'d-none d-lg-block col-2'}>
                </div>
            </div>
        </div>
    );
};
export default Index;