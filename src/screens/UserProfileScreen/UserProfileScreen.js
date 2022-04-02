import React from "react";

import NavigationTopMenu from "../../components/NavigationTopMenu";
import PaintingListings from "../../components/PaintingListings";
import UserProfile from "../../components/UserProfile";
import NavigationSidebar from "../../components/NavigationSidebar";
import PaintingGrid from "../../components/PaintingGrid";

const UserProfileScreen = () => {
    return (
        <>
            <NavigationTopMenu/>

            <div className={'container'}>
                <div className={'row pt-2'}>
                    <div className={'col-2 m-0 p-2'}>
                        <NavigationSidebar/>
                    </div>
                    <div className={'col-10 col-lg-8 m-0 p-2'}>
                        <UserProfile/>
                        <hr/>
                        <PaintingGrid/>
                    </div>
                    <div className={'col-2 d-none d-lg-block m-0 p-2'}>
                        <PaintingListings/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default UserProfileScreen;