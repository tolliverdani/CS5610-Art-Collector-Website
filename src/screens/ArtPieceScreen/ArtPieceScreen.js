import React, {useEffect} from "react";

import NavigationTopMenu from "../../components/NavigationTopMenu";
import PaintingListings from "../../components/Listings";
import PriceHistory from "../../components/ArtDetails/PriceHistory";
import UserGrid from "../../components/UserGrid";
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
import {findActiveListingsByPaintingId, findSalesPriceHistoryByPaintingId} from "../../_actions/listings-actions";
import {findPriceHistoryAllOffersByPaintingId} from "../../_actions/offers-actions";
import ComponentHeader from "../../components/ComponentHeader";
import users from "../../components/UserGrid/currentowners.json"; // TODO: set up with database

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

        const offersHistory = useSelector(state => state.offersHistory);
        useEffect(() => findPriceHistoryAllOffersByPaintingId(dispatch, painting_id), [dispatch, painting_id])

        const salesHistory = useSelector(state => state.salesHistory);
        useEffect(() => findSalesPriceHistoryByPaintingId(dispatch, painting_id), [dispatch, painting_id])


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
                            <PriceHistory sales_history={salesHistory} offers_history={offersHistory}/>
                            <PaintingListings data={listings}/>
                            <UpdatePosts posts={posts}/>
                        </div>
                        <div className={'d-none d-lg-block col-2'}>
                            <ArtDetails data={data}/>
                            <ArtStats data={data}/>
                            <UserGrid users={users} header={"Owners"}/>
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
;
export default ArtPieceScreen;