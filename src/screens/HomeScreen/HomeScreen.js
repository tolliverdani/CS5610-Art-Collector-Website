import React from "react";
import NavigationTopMenu from "../../components/NavigationTopMenu";
import NavigationSidebar from "../../components/NavigationSidebar";
import PaintingListings from "../../components/PaintingListings";
import paintingsReducer from "../../_reducers/paintings-reducer"
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import PaintingGrid from "../../components/PaintingGrid";
import ScrollToTop from "../../components/ScrollToTop";

const reducers = combineReducers({paintings: paintingsReducer})
const store = createStore(reducers);

const Index = () => {
    return (
        <Provider store={store}>
            <div>
                <NavigationTopMenu/>
                <div className={"container"}>
                    <div className={'row pt-2'}>
                        <div className={'col-2'}>
                            <NavigationSidebar/>
                            <ScrollToTop/>
                        </div>
                        <div className={'col-10 col-lg-7'}>
                            <PaintingGrid type={"random"}/>
                        </div>
                        <div className={'col-3 d-none d-lg-block'}>
                            <PaintingListings/>
                        </div>
                    </div>
                </div>
            </div>
        </Provider>
    );
};
export default Index;