import React from "react";

import NavigationTopMenu from "../../components/NavigationTopMenu";
import PaintingListings from "../../components/PaintingListings";
import PriceHistory from "../../components/PriceHistory";
import CurrentOwners from "../../components/CurrentOwners";
import NavigationSidebar from "../../components/NavigationSidebar";
import UpdatePosts from "../../components/UpdatePosts";
import CreatePost from "../../components/UpdatePosts/CreatePost";
import paintingsReducer from "../../_reducers/paintings-reducer"
import {useParams} from "react-router-dom";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import ArtDetails from "../../components/ArtDetails";
import ScrollToTop from "../../components/ScrollToTop";

const reducers = combineReducers({paintings: paintingsReducer})
const store = createStore(reducers);

const ArtPieceScreen = () => {

    const {painting_id} = useParams();

        return (
            <Provider store={store}>
                <ScrollToTop/>
                <div>
                    <NavigationTopMenu/>
                    <div className={"container"}>
                        <div className={'row pt-2'}>
                            <div className={'col-2'}>
                                <NavigationSidebar/>
                            </div>
                            <div className={'col-10 col-lg-7'}>
                                <ArtDetails id={painting_id}/>
                                <hr/>
                                <PriceHistory/>
                                <hr/>
                                <CreatePost/>
                                <UpdatePosts/>
                            </div>
                            <div className={'col-3 d-none d-lg-block'}>
                                <CurrentOwners/>
                                <PaintingListings/>
                            </div>
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
;
export default ArtPieceScreen;