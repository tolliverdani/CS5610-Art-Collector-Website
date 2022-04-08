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

const reducers = combineReducers({paintings: paintingsReducer})
const store = createStore(reducers);

const ArtPieceScreen = () => {
        /* TODO: we should use the painting_id pulled in from the url
             for all of the sub-components */
        const painting_id = useParams();

    /* TODO: Per this console.log it looks like the url is picking up the params */
    console.log(painting_id);

        return (
            <Provider store={store}>
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