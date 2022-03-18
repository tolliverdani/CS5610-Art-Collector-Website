import React from "react";

import NavigationTopMenu from "../../components/NavigationTopMenu";
import PaintingListings from "../../components/PaintingListings";
import PaintingGrid from "../../components/PaintingGrid";
import UserInfo from "../../components/UserProfileSidebar";

const UserProfileScreen = () => {
    return (
        <>
            <NavigationTopMenu/>

            <div className={'row pt-2'}>
                <div className={'col-2 m-0 p-2'}>
                    <UserInfo/>
                </div>
                <div className={'col-10 col-lg-8 m-0 p-2'}>
                    <PaintingGrid/>
                </div>
                <div className={'col-2 d-none d-lg-block m-0 p-2'}>
                    <PaintingListings/>
                </div>
            </div>
        </>
    );
};
export default UserProfileScreen;