import React, {useEffect} from "react";

import NavigationSidebar from "../../components/NavigationSidebar";
import NavigationTopMenu from "../../components/NavigationTopMenu";
import PaintingListings from "../../components/ListingsGrid";
import paintingsReducer from "../../_reducers/paintings-reducer"
import {Provider, useDispatch, useSelector} from "react-redux";
import {combineReducers, createStore} from "redux";
import PaintingGrid from "../../components/PaintingGrid";
import {useLocation} from "react-router-dom";
import {updatedArtists} from "../../_actions/artpieces-actions";

const reducers = combineReducers({paintings: paintingsReducer})
const store = createStore(reducers);

const Index = () => {
    const paintings_data = useSelector(state => state.paintings);
    const paintings = paintings_data.data;
    const dispatch = useDispatch();
    useEffect(() => updatedArtists(dispatch), [dispatch]);

    return (
        <Provider store={store}>
            <div>
                <NavigationTopMenu/>
                <div className={"row m-3 p-2"}>
                    <div className={'col-2'}>
                        <NavigationSidebar
                            active={useLocation().pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
                    </div>
                    <div className={'col-10 col-lg-8'}>
                        <PaintingGrid type={"updated-artists"} data={paintings}/>
                    </div>
                    <div className={'d-none d-lg-block col-2'}>
                        {/*<PaintingListings/>*/}
                    </div>
                </div>
            </div>
        </Provider>
    );
};
export default Index;