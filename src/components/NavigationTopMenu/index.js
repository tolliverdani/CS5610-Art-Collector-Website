import React from "react";

import SearchBar from "./SearchBar";
import HamburgerMenu from "./HamburgerMenu";
import SignUpModal from "../Auth/SignUpModal";
import SecureContent from "../../_security/secure-content";
import UnsecuredContent from "../../_security/unsecured-content";
import FULL_LOGO from "../../_images/artbubblelogo2.png"
import SMALL_LOGO from "../../_images/artbubblelogo.png"
import LoginModalButton from "../Auth/LoginModalButton";
import SignUpModalButton from "../Auth/SignUpModalButton";

const NavigationTopMenu = () => {
    return (
        <div className={'navbar sticky-top navbar-dark bg-primary row p-2'}>
            <div className={'d-lg-none col-2 text-center'}>
                <a className={'navbar-brand'} href={"/home"}>
                    <img className={``}
                         src={SMALL_LOGO} alt={"artbubble logo"}
                         height={"50px"}/>
                </a>
            </div>
            <div className={'d-none d-lg-block col-2 text-center'}>
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
                <div className={'col-2'}>
                    <SignUpModalButton text={"Sign Up"}/>
                    <LoginModalButton text={"Log In"}/>
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
