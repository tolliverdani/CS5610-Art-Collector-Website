import React from "react";
import NavigationTopMenu from "../../components/NavigationTopMenu";
import NavigationSidebar from "../../components/NavigationSidebar";
import PaintingListings from "../../components/PaintingListings";
import PaintingGrid from "../../components/PaintingGrid";

import paintingsReducer from "../../reducers/paintings-reducer"
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {useParams} from "react-router-dom";

const reducers = combineReducers({paintings: paintingsReducer})
const store = createStore(reducers);

const SearchScreen = () => {
    const {artist_id} = useParams();
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
                            <PaintingGrid id={artist_id}/>
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
export default SearchScreen;