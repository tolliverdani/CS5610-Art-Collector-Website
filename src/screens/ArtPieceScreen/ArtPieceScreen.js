import React from "react";

import NavigationTopMenu from "../../components/NavigationTopMenu";
import PaintingListings from "../../components/PaintingListings";
import PriceHistory from "../../components/PriceHistory";
import CurrentOwners from "../../components/CurrentOwners";
import NavigationSidebar from "../../components/NavigationSidebar";
import UpdatePosts from "../../components/UpdatePosts";
import CreatePost from "../../components/UpdatePosts/CreatePost";
import ArtDetails from "../../components/ArtDetails";

const ArtPieceScreen = (
    {/* TODO: I think we should have the art data here as well - maybe map that to the components for their relevant data */}
) => {
    return (
        <div>
            <NavigationTopMenu/>
            <div className={"container"}>
                <div className={'row pt-2'}>
                    <div className={'col-2'}>
                        <NavigationSidebar/>
                    </div>
                    <div className={'col-10 col-lg-7'}>
                        <ArtDetails/>
                        <hr/>
                        <PriceHistory/>
                        <hr/>
                        <CreatePost/>
                        <UpdatePosts/>
                    </div>
                    <div className={'col-3 d-none d-lg-block'}>
                        <CurrentOwners/>
                        <PaintingListings/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ArtPieceScreen;