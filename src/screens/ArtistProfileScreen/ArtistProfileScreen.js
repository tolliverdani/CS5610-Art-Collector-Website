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
import {findArtistComments} from "../../_actions/comments-actions";
import UpdatePosts from "../../components/UpdatePosts";
import {getProfile} from "../../_actions/profile-actions";
import CreatePostLogic from "../../components/UpdatePosts/CreatePostLogic";
import CreatePostArtist from "../../components/UpdatePosts/CreatePostArtist";
import SecureClaimedArtistContent from "../../_security/secure-claimed-artist-content";
import SecureContent from "../../_security/secure-content";
import SecureArtistContent from "../../_security/secure-artist-content";

const ArtistProfileScreen = () => {
    const {artist_name, artist_id} = useParams();
    const dispatch = useDispatch();

    const artist = useSelector(state => state.artists);
    const paintings_data = useSelector(state => state.paintings);
    const posts = useSelector(state => state.comments)
    const listings = useSelector(state => state.listings)
    const profile = useSelector(state => state.profile)

    useEffect(() => findArtistComments(dispatch, artist_id), [dispatch, artist_id])
    useEffect(() => findPaintingsByArtist(dispatch, artist_id), [dispatch, artist_id]);
    useEffect(() => artistDetails(dispatch, artist_name), [dispatch, artist_name]);
    useEffect(() => findActiveListingsByArtistId(dispatch, artist_id), [dispatch, artist_id])
    useEffect(() => getProfile(dispatch), [dispatch])

    const paintings = paintings_data.data;

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
                        <UpdatePosts posts={posts}/>
                        <CreatePostArtist artist_id={artist_id}/>
                    </div>
                    <div className={'col-2 d-none d-lg-block'}>
                        <ArtistStats artist={artist}/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ArtistProfileScreen;