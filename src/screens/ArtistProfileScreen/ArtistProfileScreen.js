import React from "react";

import NavigationTopMenu from "../../components/NavigationTopMenu";
import PaintingListings from "../../components/PaintingListings";
import ArtistProfileSidebar from "../../components/ArtistProfileSidebar";
import PaintingGrid from "../../components/PaintingGrid";
import UpdatePosts from "../../components/UpdatePosts";
import ComponentHeader from "../../components/ComponentHeader";

const ArtistProfileScreen = () => {
    return (
        <>
            <NavigationTopMenu/>

            <div className={"container"}>
                <div className={'row pt-2'}>
                    <div className={'col-2'}>
                        {ComponentHeader("STILL OKAY WITH ARTIST PHOTO?")}
                        <ArtistProfileSidebar/>
                    </div>
                    <div className={'col-10 col-lg-7'}>
                        <PaintingGrid/>
                    </div>
                    <div className={'col-3 d-none d-lg-block '}>
                        <UpdatePosts/>
                        <PaintingListings/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ArtistProfileScreen;