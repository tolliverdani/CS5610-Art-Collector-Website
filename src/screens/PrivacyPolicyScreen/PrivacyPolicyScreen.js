import React from "react";
import {useLocation} from "react-router-dom";

import NavigationTopMenu from "../../components/NavigationTopMenu";
import NavigationSidebar from "../../components/NavigationSidebar";
import PaintingListings from "../../components/ListingsGrid";
import PrivacyPolicy from "../../components/PrivacyPolicy";

const PrivacyPolicyScreen = () => {
    return (
        <div className={"container"}>
            <NavigationTopMenu/>
            <div className={"row m-3 p-2"}>
                <div className={'col-2'}>
                    <NavigationSidebar
                        active={useLocation().pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
                </div>
                <div className={'col-10 col-lg-8'}>
                    <PrivacyPolicy/>
                </div>
                <div className={'d-none d-lg-block col-2'}>

                </div>
            </div>
        </div>
    );
};
export default PrivacyPolicyScreen;