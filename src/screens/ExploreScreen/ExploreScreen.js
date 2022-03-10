import React from "react";

import NavigationSidebar from "../../components/NavigationSidebar";
import ExploreFeed from "../../components/ExploreFeed";
import NavigationTopMenu from "../../components/NavigationTopMenu";

const ExploreScreen = () => {
    return (
        <>
            /* Top Menu */
            <div className={`row`}><div className={`col-12`}><NavigationTopMenu/></div></div>
            <div className={`row mt-2`}>
                <div className={`col-2 col-md-2 col-lg-1 col-xl-2`}><NavigationSidebar active="explore"/></div>
                <div className={`col-10 col-md-10 col-lg-7 col-xl-6`}><ExploreFeed/></div>
                <div className={`d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4`}></div>
            </div>
        </>
    );
};
export default ExploreScreen;