import React from "react";

import NavigationTopMenu from "../../components/NavigationTopMenu";
import PaintingListings from "../../components/PaintingListings";
import ArtistProfileSidebar from "../../components/ArtistProfileSidebar";
import PriceHistory from "../../components/PriceHistory";
import CurrentOwners from "../../components/CurrentOwners";
import ArtPieceSidebar from "../../components/ArtPieceSidebar";
import NavigationSidebar from "../../components/NavigationSidebar";
import PaintingGrid from "../../components/PaintingGrid";

const ArtPieceScreen = () => {
    return (
        <div>
            <NavigationTopMenu/>
            <div className={"container"}>
                <div className={'row pt-2'}>
                    <div className={'col-2 p-2'}>
                        <ArtPieceSidebar/>
                    </div>
                    <div className={'col-10 col-lg-7 p-2'}>
                        <PriceHistory/>
                    </div>
                    <div className={'col-3 d-none d-lg-block p-2'}>
                        <PaintingListings/>
                        <CurrentOwners/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ArtPieceScreen;