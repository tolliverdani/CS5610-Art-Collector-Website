import React from "react";
import NavigationTopMenu from "../../components/NavigationTopMenu";
import NavigationSidebar from "../../components/NavigationSidebar";
import HomeFeed from "../../components/HomeFeed";
import SuggestedArtists from "../../components/SuggestedArtists";
import PaintingListings from "../../components/PaintingListings";
import PaintingGridItem from "../../components/PaintingGridItem";
import PaintingGrid from "../../components/PaintingGrid";

const HomeScreen = () => {
    return (
        <>
            <NavigationTopMenu/>

            <div className={'row mt-2 p-0'}>
                <div className={'col-2 ms-6 m-0 p-0'}>
                    <NavigationSidebar/>
                </div>
                <div className={'col-10 col-lg-8 m-0 p-0'}>
                    <PaintingGrid/>
                </div>
                <div className={'col-2 d-none d-lg-block m-0 p-0'}>
                    <PaintingListings/>
                </div>
            </div>
        </>
    );
};
export default HomeScreen;