import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

import NavigationTopMenu from "../../components/NavigationTopMenu";
import NavigationSidebar from "../../components/NavigationSidebar";
import {findAllActiveListings} from "../../_actions/listings-actions";
import ListingsGrid from "../../components/ListingsGrid";

const Index = () => {
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
                    <ListingsGrid type={"painting"} data={listings}/>
                </div>
                <div className={'d-none d-lg-block col-2'}>
                </div>
            </div>
        </div>
    );
};
export default Index;