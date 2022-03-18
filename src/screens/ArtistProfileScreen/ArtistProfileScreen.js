import React from "react";

import NavigationTopMenu from "../../components/NavigationTopMenu";
import PaintingListings from "../../components/PaintingListings";
import ArtistProfileSidebar from "../../components/ArtistProfileSidebar";
import PriceHistory from "../../components/PriceHistory";
import CurrentOwners from "../../components/CurrentOwners";

const ArtistProfileScreen = () => {
    return (
        <>
            <NavigationTopMenu/>

            <div className={'row pt-2'}>
                <div className={'col-2 m-0 p-2'}>
                    <ArtistProfileSidebar/>
                </div>
                <div className={'col-10 col-lg-8 m-0 p-2'}>
                    <PriceHistory/>
                </div>
                <div className={'col-2 d-none d-lg-block m-0 p-2'}>
                    <CurrentOwners/>
                    <PaintingListings/>
                </div>
            </div>
        </>
    );
};
export default ArtistProfileScreen;