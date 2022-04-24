import React, {useEffect} from "react";
import NavigationTopMenu from "../../components/NavigationTopMenu";
import NavigationSidebar from "../../components/NavigationSidebar";
import PaintingListings from "../../components/PaintingListings";
import {useDispatch, useSelector} from "react-redux";

import {useLocation} from "react-router-dom";
import {findAllActiveListings} from "../../_actions/listings-actions";
import {useProfile} from "../../_context/profile-context";
import PriceHistory from "../../components/ArtDetails/PriceHistory";
import UpdatePosts from "../../components/UpdatePosts";


const Index = () => {
    const {profile} = useProfile();
    const listings = useSelector(state => state.listings);
    const dispatch = useDispatch();
    useEffect(() => findAllActiveListings(dispatch),[dispatch])

    return (
        <div>
            <NavigationTopMenu/>
            <div className={"row m-3 p-2"}>
                <div className={'col-2'}>
                    <NavigationSidebar active={useLocation().pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
                </div>
                <div className={'col-10 col-lg-8'}>

                </div>
                <div className={'d-none d-lg-block col-2'}>
                    <PaintingListings data={listings} profile={profile}/>
                </div>
            </div>
        </div>
    );
};
export default Index;