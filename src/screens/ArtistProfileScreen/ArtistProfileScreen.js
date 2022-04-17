import React from "react";
import NavigationTopMenu from "../../components/NavigationTopMenu";
import PaintingListings from "../../components/PaintingListings";
import PaintingGrid from "../../components/PaintingGrid";
import UpdatePosts from "../../components/UpdatePosts";
import NavigationSidebar from "../../components/NavigationSidebar";
import ArtistProfile from "../../components/ArtistProfile";
import CreatePost from "../../components/UpdatePosts/CreatePost";

import paintingsReducer from "../../_reducers/paintings-reducer"
import artistReducer from "../../_reducers/artist-reducer";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {useLocation, useParams} from "react-router-dom";

const reducers = combineReducers({paintings: paintingsReducer, artists: artistReducer})
const store = createStore(reducers);

const ArtistProfileScreen = () => {
    const {artist_name, artist_id} = useParams();
    console.log(artist_name)
    console.log(artist_id)
    return (
        <Provider store={store}>
            <NavigationTopMenu/>
            <div className={"container"}>
                <div className={'row pt-2'}>
                    <div className={'col-2'}>
                        <NavigationSidebar active={useLocation().pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
                    </div>
                    <div className={'col-10 col-lg-7'}>
                        <ArtistProfile artist_name={artist_name}/>
                        <hr/>
                        <CreatePost/>
                        <UpdatePosts/>
                        <hr/>
                        { artist_id === undefined ? "" :
                        <PaintingGrid type={"artist"} id={artist_id}/>}
                    </div>
                    <div className={'col-3 d-none d-lg-block'}>
                        <PaintingListings/>
                    </div>
                </div>
            </div>
        </Provider>
    );
};
export default ArtistProfileScreen;