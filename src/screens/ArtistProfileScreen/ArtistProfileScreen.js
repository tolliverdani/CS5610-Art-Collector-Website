import React from "react";

import NavigationTopMenu from "../../components/NavigationTopMenu";
import PaintingListings from "../../components/PaintingListings";
import PaintingGrid from "../../components/PaintingGrid";
import UpdatePosts from "../../components/UpdatePosts";
import NavigationSidebar from "../../components/NavigationSidebar";
import ArtistProfile from "../../components/ArtistProfile";
import CreatePost from "../../components/UpdatePosts/CreatePost";

const ArtistProfileScreen = (

) => {
    return (
        <>
            <NavigationTopMenu/>
            <div className={"container"}>
                <div className={'row pt-2'}>
                    <div className={'col-2'}>
                        <NavigationSidebar/>
                    </div>
                    <div className={'col-10 col-lg-7'}>
                        <ArtistProfile/>
                        <hr/>
                        <CreatePost/>
                        <UpdatePosts/>
                        <hr/>
                        <PaintingGrid/>
                    </div>
                    <div className={'col-3 d-none d-lg-block'}>
                        <PaintingListings/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ArtistProfileScreen;