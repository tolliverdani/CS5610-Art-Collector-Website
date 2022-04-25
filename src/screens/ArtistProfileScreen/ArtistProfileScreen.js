import React, {useEffect} from "react";
import NavigationTopMenu from "../../components/NavigationTopMenu";
import PaintingListings from "../../components/ListingsGrid";
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
import {artistDetails, findPaintingsByArtist} from "../../_actions/artpieces-actions";
import {findPaintingComments} from "../../_actions/comments-actions";
import ArtistStats from "../../components/ArtistProfile/ArtistStats";
import PaintingsByArtist from "../../components/ArtistProfile/PaintingsByArtist";
import {findListingsByArtistId, findListingsByOwnerId} from "../../_services/listings-service";
import {findActiveListingsByArtistId} from "../../_actions/listings-actions";
import ListingsGrid from "../../components/ListingsGrid";

const reducers = combineReducers({paintings: paintingsReducer, artists: artistReducer, collection: collectionsReducer})
const store = createStore(reducers);

const ArtistProfileScreen = () => {
    const {artist_name, artist_id} = useParams();
    const dispatch = useDispatch();

    const artist = useSelector(state => state.artists);
    useEffect(() => artistDetails(dispatch, artist_name), [dispatch, artist_name]);

    const paintings_data = useSelector(state => state.paintings);
    useEffect(() => findPaintingsByArtist(dispatch, artist_id), [dispatch, artist_id]);
    const paintings = paintings_data.data;

    const posts = useSelector(state => state.comments)
    useEffect(() => findPaintingComments(dispatch, artist_id), [dispatch, artist_id])

    const listings = useSelector(state => state.listings)
    useEffect(() => findActiveListingsByArtistId(dispatch, artist_id), [dispatch, artist_id])

    return (
        <Provider store={store}>
            <div className={"container"}>
                <NavigationTopMenu/>
                <div className={"row m-3 p-2"}>
                    <div className={'col-2'}>
                        <NavigationSidebar
                            active={useLocation().pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
                        <ScrollToTop/>
                    </div>
                    <div className={'col-10 col-lg-8'}>
                        <ListingsGrid type={"artist"} data={listings}/>
                        <PaintingsByArtist data={paintings} id={artist_id}/>
                        <UpdatePosts posts={posts}/>
                    </div>
                    <div className={'col-2 d-none d-lg-block'}>
                        <ArtistProfile artist={artist}/>
                        <ArtistStats artist={artist}/>
                    </div>
                </div>
            </div>
        </Provider>
    );
};
export default ArtistProfileScreen;