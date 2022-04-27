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
import artistReducer from "../../_reducers/artist-reducer";



const Index = () => {
    const artist_data = useSelector(state => state.artists);
    console.log(artist_data)
    const artists = artist_data.data;

    const dispatch = useDispatch();
    useEffect(() => updatedArtists(dispatch), [dispatch]);

    return (

            <div className={"container"}>
                <NavigationTopMenu/>
                <div className={"row m-3 p-2"}>
                    <div className={'col-2'}>
                        <NavigationSidebar
                            active={useLocation().pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
                    </div>
                    <div className={'col-10 col-lg-8'}>
                        {console.log(artists)}
                        <PaintingGrid type={"artists"} data={artists}/>
                    </div>
                    <div className={'d-none d-lg-block col-2'}>
                        {/*<PaintingListings/>*/}
                    </div>
                </div>
            </div>

    );
};
export default Index;