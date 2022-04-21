import React, {useEffect} from "react";
import NavigationTopMenu from "../../components/NavigationTopMenu";
import NavigationSidebar from "../../components/NavigationSidebar";
import PaintingListings from "../../components/PaintingListings";
import paintingsReducer from "../../_reducers/paintings-reducer"
import {Provider, useDispatch, useSelector} from "react-redux";
import {combineReducers, createStore} from "redux";
import PaintingGrid from "../../components/PaintingGrid";
import ScrollToTop from "../../components/NavigationSidebar/ScrollToTop";
import {useLocation} from "react-router-dom";
import {useProfile} from "../../_context/profile-context";
import {randomPaintings} from "../../_actions/artpieces-actions";
import ComponentHeader from "../../components/ComponentHeader";

const Index = () => {
    const paintings_data = useSelector(state => state.paintings);
    const paintings = paintings_data.data
    const dispatch = useDispatch();
    useEffect(() => randomPaintings(dispatch), [dispatch]);

    return (
            <div>
                <NavigationTopMenu/>
                <div className={"row m-3 p-2"}>
                        <div className={'col-2 position-sticky'}>
                            <NavigationSidebar active={useLocation().pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
                        </div>
                        <div className={'col-10 col-lg-8'}>
                            {ComponentHeader("Popular Paintings")}
                            <PaintingGrid type={"random"} data={paintings}/>
                        </div>
                        <div className={'d-none d-lg-block col-2'}>
                            <PaintingListings/>
                        </div>
                </div>
            </div>
    );
};
export default Index;