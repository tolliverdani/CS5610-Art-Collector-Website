import React from "react";

import SearchBar from "./SearchBar";
import HamburgerMenu from "./HamburgerMenu";
import SignUpModal from "./SignUpModal";
import LogInModal from "./LoginModal";

const NavigationTopMenu = () => {
    return (
        <div className={'navbar container-fluid sticky-top navbar-dark bg-primary p-0'}>
            <div className={'col-2 justify-content-center text-center'}>
                <a className={'navbar-brand'} href={"/home"}>LOGO</a>
            </div>

            <div className={'col-7 col-xl-6'}>
                <SearchBar/>
            </div>

            <div className={'col-2 d-none d-xl-inline'}>
                <SignUpModal/>
                <LogInModal/>
            </div>

            <div className={'col-2 col-xl-1'}>
                <HamburgerMenu/>
            </div>
        </div>
    );
};

export default NavigationTopMenu;
