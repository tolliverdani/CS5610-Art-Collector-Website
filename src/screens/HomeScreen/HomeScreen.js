import React from "react";
import NavigationTopMenu from "../../components/NavigationTopMenu";
import NavigationSidebar from "../../components/NavigationSidebar";
import PaintingListings from "../../components/PaintingListings";
import paintingsReducer from "../../_reducers/paintings-reducer"
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import PaintingGrid from "../../components/PaintingGrid";
import ScrollToTop from "../../components/NavigationSidebar/ScrollToTop";
import {useLocation} from "react-router-dom";
import {useProfile} from "../../_context/profile-context";

const reducers = combineReducers({paintings: paintingsReducer})
const store = createStore(reducers);

const Index = () => {
    return (
        <Provider store={store}>
            <div>
                <NavigationTopMenu/>
                <div className={"row m-3 p-2"}>
                        <div className={'col-2 position-sticky'}>
                            <NavigationSidebar active={useLocation().pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
                        </div>
                        <div className={'col-10 col-lg-8'}>
                            <PaintingGrid type={"random"}/>
                        </div>
                        <div className={'d-none d-lg-block col-2'}>
                            <PaintingListings/>
                        </div>
                </div>
            </div>
        </Provider>
    );
};
export default Index;