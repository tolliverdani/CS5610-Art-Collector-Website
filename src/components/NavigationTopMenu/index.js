import React from "react";

import SearchBar from "./SearchBar";
import HamburgerMenu from "./HamburgerMenu";
import SignUpModal from "../Auth/SignUpModal";
import LogInModal from "../Auth/LoginModal";
import SecureContent from "../Security/secure-content";
import UnsecuredContent from "../Security/unsecured-content";
import FULL_LOGO from "../../_images/artbubblelogo2.png"


const NavigationTopMenu = () => {
    return (
        <div className={'navbar sticky-top navbar-dark bg-primary row p-2'}>
            {/* TODO: need to pick logo based on screen size */}
            <div className={'col-2 text-center'}>
                <a className={'navbar-brand'} href={"/home"}>
                    <img className={``}
                         src={FULL_LOGO} alt={"artbubble logo"}
                         height={"50px"}/>
                </a>
            </div>

            <div className={'col-10 col-lg-8'}>
                <SearchBar/>
            </div>

            <UnsecuredContent>
                <div className={'col-2 text-center'}>
                    <SignUpModal text={"Sign Up"}/>
                    <LogInModal text={"Log In"}/>
                </div>
            </UnsecuredContent>

            <SecureContent>
                <div className={'col-2 text-end'}>
                    <HamburgerMenu/>
                </div>
            </SecureContent>
        </div>
    );
};

export default NavigationTopMenu;
