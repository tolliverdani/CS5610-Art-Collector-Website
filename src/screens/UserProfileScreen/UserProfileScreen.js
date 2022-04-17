import React from "react";

import NavigationTopMenu from "../../components/NavigationTopMenu";
import PaintingListings from "../../components/PaintingListings";
import UserProfile from "../../components/UserProfile";
import NavigationSidebar from "../../components/NavigationSidebar";
import PaintingGrid from "../../components/PaintingGrid";
import profile from "../../data/profile.json";
import {useLocation} from "react-router-dom";

const UserProfileScreen = (

) => {
    return (
        <>

            <NavigationTopMenu/>
            <div className={'container'}>
                <div className={'row pt-2'}>
                    <div className={'col-2'}>
                        <NavigationSidebar active={useLocation().pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
                    </div>
                    <div className={'col-10 col-lg-7'}>
                        <UserProfile profile={profile}/>
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
export default UserProfileScreen;