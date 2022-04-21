import React, {useEffect} from "react";
import NavigationTopMenu from "../../components/NavigationTopMenu";
import PaintingListings from "../../components/PaintingListings";
import PaintingGrid from "../../components/PaintingGrid";
import UpdatePosts from "../../components/UpdatePosts";
import NavigationSidebar from "../../components/NavigationSidebar";
import ArtistProfile from "../../components/ArtistProfile";
import CreatePost from "../../components/UpdatePosts/CreatePost";

import paintingsReducer from "../../_reducers/paintings-reducer"
import artistReducer from "../../_reducers/artist-reducer";
import collectionsReducer from "../../_reducers/collections-reducer";
import {Provider, useDispatch, useSelector} from "react-redux";
import {combineReducers, createStore} from "redux";
import {useLocation, useParams} from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import ComponentHeader from "../../components/ComponentHeader";
import {findPaintingsByArtist} from "../../_actions/artpieces-actions";

const reducers = combineReducers({paintings: paintingsReducer, artists: artistReducer, collection: collectionsReducer})
const store = createStore(reducers);

const ArtistProfileScreen = () => {
    const {artist_name, artist_id} = useParams();
    const paintings_data = useSelector(state => state.paintings);
    const paintings = paintings_data.data;
    const dispatch = useDispatch();
    useEffect(() => findPaintingsByArtist(dispatch, artist_id), [dispatch, artist_id]);

    return (
        <Provider store={store}>
            <ScrollToTop/>
            <NavigationTopMenu/>
            <div className={"container"}>
                <div className={'row pt-2'}>
                    <div className={'col-2'}>
                        <NavigationSidebar active={useLocation().pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
                        <ScrollToTop/>
                    </div>
                    <div className={'col-10 col-lg-7'}>
                        <ArtistProfile artist_name={artist_name}/>
                        <hr/>
                        <CreatePost/>
                        <UpdatePosts/>
                        <hr/>
                        {ComponentHeader("Paintings by Artist")}
                        <PaintingGrid type={"artist"} data={paintings} id={artist_id}/>
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