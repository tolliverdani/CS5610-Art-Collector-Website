import React from "react";

import NavigationTopMenu from "../../components/NavigationTopMenu";
import PaintingListings from "../../components/PaintingListings";
import UserProfile from "../../components/UserProfile";
import NavigationSidebar from "../../components/NavigationSidebar";
import PaintingGrid from "../../components/PaintingGrid";
import profile from "../../data/profile.json";
import {useLocation} from "react-router-dom";
import collectionsReducer from "../../_reducers/collections-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
const reducers = combineReducers({collection:collectionsReducer})
const store = createStore(reducers);

const UserProfileScreen = (

) => {
    return (
        <>
            <Provider store={store}>
            <NavigationTopMenu/>
            <div className={'container'}>
                <div className={'row pt-2'}>
                    <div className={'col-2'}>
                        <NavigationSidebar active={useLocation().pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
                    </div>
                    <div className={'col-10 col-lg-7'}>
                        <UserProfile profile={profile}/>
                        <hr/>
                        <PaintingGrid/>
                    </div>
                    <div className={'col-3 d-none d-lg-block'}>
                        <PaintingListings/>
                    </div>
                </div>
            </div>
            </Provider>
        </>
    );
};
export default UserProfileScreen;