import React from "react";
import NavigationTopMenu from "../../components/NavigationTopMenu";
import NavigationSidebar from "../../components/NavigationSidebar";
import PaintingListings from "../../components/PaintingListings";
import PaintingGrid from "../../components/PaintingGrid";

const HomeScreen = () => {
    return (
        <div>
            <NavigationTopMenu/>
            <div className={"container"}>
                <div className={'row pt-2'}>
                    <div className={'col-2 p-2'}>
                        <NavigationSidebar/>
                    </div>
                    <div className={'col-10 col-lg-8 p-2'}>
                        <PaintingGrid/>
                    </div>
                    <div className={'col-2 d-none d-lg-block p-2'}>
                        <PaintingListings/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomeScreen;