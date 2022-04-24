import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

import {randomPaintings} from "../../_actions/artpieces-actions";

import NavigationTopMenu from "../../components/NavigationTopMenu";
import NavigationSidebar from "../../components/NavigationSidebar";
import PaintingGrid from "../../components/PaintingGrid";
import ComponentHeader from "../../components/ComponentHeader";
import UserGrid from "../../components/UserGrid";
import users from "../../components/UserGrid/currentowners.json"; // TODO: set up with database

const Index = () => {
    const paintings_data = useSelector(state => state.paintings);
    const listings = useSelector(state => state.listings);
    const paintings = paintings_data.data
    const dispatch = useDispatch();
    useEffect(() => randomPaintings(dispatch), [dispatch]);

    return (
        <div>
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
                    <UserGrid users={users} header={"Discover"}/>
                </div>
            </div>
        </div>
    );
};
export default Index;