import React from "react";

import SearchBar from "./SearchBar";
import HamburgerMenu from "./HamburgerMenu";
import Login from "./Login";

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
                <button className={`btn btn-primary bg-highlight rounded-pill be-1`} href="/#">Log in</button>
                <button className={`btn btn-primary bg-highlight rounded-pill`} href="/#">Sign Up</button>
            </div>

            <div className={'col-2 col-xl-1'}>
                <HamburgerMenu/>
            </div>
        </div>
    );
};

export default NavigationTopMenu;
