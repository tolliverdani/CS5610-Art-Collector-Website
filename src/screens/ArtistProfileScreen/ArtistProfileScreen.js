import React, {useEffect} from "react";
import NavigationTopMenu from "../../components/NavigationTopMenu";
import NavigationSidebar from "../../components/NavigationSidebar";
import ArtistProfile from "../../components/ArtistProfile";

import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import {artistDetails, findPaintingsByArtist} from "../../_actions/artpieces-actions";
import ArtistStats from "../../components/ArtistProfile/ArtistStats";
import PaintingsByArtist from "../../components/ArtistProfile/PaintingsByArtist";
import {findActiveListingsByArtistId} from "../../_actions/listings-actions";
import ListingsGrid from "../../components/ListingsGrid";

const ArtistProfileScreen = () => {
    const {artist_name, artist_id} = useParams();
    const dispatch = useDispatch();

    const artist = useSelector(state => state.artists);
    useEffect(() => artistDetails(dispatch, artist_name), [dispatch, artist_name]);

    const paintings_data = useSelector(state => state.paintings);
    useEffect(() => findPaintingsByArtist(dispatch, artist_id), [dispatch, artist_id]);
    const paintings = paintings_data.data;

    /*const posts = useSelector(state => state.comments)
    useEffect(() => findPaintingComments(dispatch, artist_id), [dispatch, artist_id])*/

    const listings = useSelector(state => state.listings)
    useEffect(() => findActiveListingsByArtistId(dispatch, artist_id), [dispatch, artist_id])

    return (
        <>
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
                        {/*<UpdatePosts posts={posts}/>*/}
                    </div>
                    <div className={'col-2 d-none d-lg-block'}>
                        <ArtistProfile artist={artist}/>
                        <ArtistStats artist={artist}/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ArtistProfileScreen;