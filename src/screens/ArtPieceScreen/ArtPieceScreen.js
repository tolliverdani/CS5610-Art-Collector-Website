import React, {useEffect} from "react";

import NavigationTopMenu from "../../components/NavigationTopMenu";
import PaintingListings from "../../components/ListingsGrid";
import PriceHistory from "../../components/ArtDetails/PriceHistory";
import NavigationSidebar from "../../components/NavigationSidebar";
import UpdatePosts from "../../components/UpdatePosts";
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import ArtDetails from "../../components/ArtDetails";
import {paintingDetails} from "../../_actions/artpieces-actions";
import ArtStats from "../../components/ArtDetails/ArtStats";
import {findPaintingComments} from "../../_actions/comments-actions";
import {findActiveListingsByPaintingId, findSalesPriceHistoryByPaintingId} from "../../_actions/listings-actions";
import {findPriceHistoryAllOffersByPaintingId} from "../../_actions/offers-actions";
import CreatePost from "../../components/UpdatePosts/CreatePost";
import SecureContent from "../../_security/secure-content";

const ArtPieceScreen = () => {

        const {painting_id} = useParams();
        const dispatch = useDispatch();

        const data = useSelector(state => state.paintings)
        const posts = useSelector(state => state.comments)
        const listings = useSelector(state => state.listings);
        const offersHistory = useSelector(state => state.offersHistory);
        const salesHistory = useSelector(state => state.salesHistory);

        useEffect(() => paintingDetails(dispatch, painting_id), [dispatch, painting_id])
        useEffect(() => findPaintingComments(dispatch, painting_id), [dispatch, painting_id])
        useEffect(() => findActiveListingsByPaintingId(dispatch, painting_id), [dispatch, painting_id])
        useEffect(() => findPriceHistoryAllOffersByPaintingId(dispatch, painting_id), [dispatch, painting_id])
        useEffect(() => findSalesPriceHistoryByPaintingId(dispatch, painting_id), [dispatch, painting_id])

        return (

            <div className={"container"}>
                <NavigationTopMenu/>
                <div className={"row m-3 p-2"}>
                    <div className={'col-2'}>
                        <NavigationSidebar
                            active={useLocation().pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
                    </div>
                    <div className={'col-10 col-lg-8'}>
                        <PriceHistory sales_history={salesHistory} offers_history={offersHistory}/>
                        <PaintingListings type={"painting"} data={listings}/>
                        <UpdatePosts posts={posts}/>
                        <SecureContent>
                            <CreatePost painting_id={painting_id}/>
                        </SecureContent>
                    </div>
                    <div className={'d-none d-lg-block col-2'}>
                        <ArtDetails data={data}/>
                        <ArtStats data={data}/>
                    </div>
                </div>
            </div>

        );
    }
;
export default ArtPieceScreen;