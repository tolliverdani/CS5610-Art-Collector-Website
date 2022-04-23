import React, {useEffect} from "react";
import NavigationTopMenu from "../../components/NavigationTopMenu";
import NavigationSidebar from "../../components/NavigationSidebar";
import PaintingListings from "../../components/PaintingListings";
import {useDispatch, useSelector} from "react-redux";

import {useLocation} from "react-router-dom";
import {findAllActiveListings} from "../../_actions/listings-actions";


const Index = () => {
    const listings = useSelector(state => state.listings);
    const dispatch = useDispatch();
    useEffect(() => findAllActiveListings(dispatch),[dispatch])

    return (
        <div>
            <NavigationTopMenu/>
            <div className={"row m-3 p-2"}>
                <div className={'col-2 position-sticky'}>
                    <NavigationSidebar active={useLocation().pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
                </div>
                <div className={'d-none d-lg-block col-10'}>
                    <PaintingListings data={listings}/>
                </div>
            </div>
        </div>
    );
};
export default Index;