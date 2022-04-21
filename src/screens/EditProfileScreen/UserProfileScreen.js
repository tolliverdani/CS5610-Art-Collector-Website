import React from "react";
import {useLocation} from "react-router-dom";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";

import NavigationTopMenu from "../../components/NavigationTopMenu";
import PaintingListings from "../../components/PaintingListings";
import NavigationSidebar from "../../components/NavigationSidebar";
import EditProfile from "../../components/UserProfile/EditProfile";
import paintingsReducer from "../../_reducers/paintings-reducer"

const reducers = combineReducers({paintings: paintingsReducer})
const store = createStore(reducers);

const UserProfileScreen = (

) => {
    return (
        <Provider store={store}>
        <NavigationTopMenu/>
            <div className={'container'}>
                <div className={'row pt-2'}>
                    <div className={'col-2'}>
                        <NavigationSidebar active={useLocation().pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
                    </div>
                    <div className={'col-10 col-lg-7'}>
                        <EditProfile/>
                        <hr/>
                    </div>
                    <div className={'col-3 d-none d-lg-block'}>
                        <PaintingListings/>
                    </div>
                </div>
            </div>
        </Provider>
    );
};
export default UserProfileScreen;