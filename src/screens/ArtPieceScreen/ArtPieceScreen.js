import React, {useEffect} from "react";

import NavigationTopMenu from "../../components/NavigationTopMenu";
import PaintingListings from "../../components/PaintingListings";
import PriceHistory from "../../components/ArtDetails/PriceHistory";
import CurrentOwners from "../../components/CurrentOwners";
import NavigationSidebar from "../../components/NavigationSidebar";
import UpdatePosts from "../../components/UpdatePosts";
import paintingsReducer from "../../_reducers/paintings-reducer"
import {useLocation, useParams} from "react-router-dom";
import {Provider, useDispatch, useSelector} from "react-redux";
import {combineReducers, createStore} from "redux";
import ArtDetails from "../../components/ArtDetails";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import {paintingDetails} from "../../_actions/artpieces-actions";
import ArtStats from "../../components/ArtDetails/ArtStats";
import {findPaintingComments} from "../../_actions/comments-actions";
import {findActiveListingsByPaintingId} from "../../_actions/listings-actions";


const reducers = combineReducers({paintings: paintingsReducer})
const store = createStore(reducers);

const ArtPieceScreen = () => {

        const {painting_id} = useParams();
        const dispatch = useDispatch();

        const data = useSelector(state => state.paintings)
        useEffect(() => paintingDetails(dispatch, painting_id), [dispatch, painting_id])

        const posts = useSelector(state => state.comments)
        useEffect(() => findPaintingComments(dispatch, painting_id), [dispatch, painting_id])

        const listings = useSelector(state => state.listings);
        console.log(painting_id)
        useEffect(() => findActiveListingsByPaintingId(dispatch, painting_id), [dispatch, painting_id])

        return (
            <Provider store={store}>
                <div>
                    <ScrollToTop/>
                    <NavigationTopMenu/>
                    <div className={"container"}>
                        <div className={'row pt-2'}>
                            <div className={'col-2'}>
                                <NavigationSidebar
                                    active={useLocation().pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
                            </div>
                            <div className={'col-10 col-lg-7'}>
                                <PriceHistory data={data}/>
                                <PaintingListings data={listings}/>
                                <UpdatePosts posts={posts}/>
                            </div>
                            <div className={'col-3 d-none d-lg-block'}>
                                <ArtDetails data={data}/>
                                <ArtStats data={data}/>
                                <CurrentOwners/>
                            </div>
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
;
export default ArtPieceScreen;