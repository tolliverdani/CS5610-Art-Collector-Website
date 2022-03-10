import React from "react";

import SearchBar from "./SearchBar";
import HamburgerMenu from "./HamburgerMenu";

const NavigationTopMenu = () => {
    return (
        <>
            <div className={'navbar container-fluid position-sticky navbar-dark bg-primary m-0 p-0'}>
                <div className={'col-2 m-0 p-0 justify-content-center text-center'}>
                    <a className={'navbar-brand'}>LOGO</a>
                </div>

                <div className={'col-7 col-xl-6 m-0 p-0'}>
                    <SearchBar/>
                </div>

                <div className={'col-2 m-0 p-0 d-none d-xl-inline'}>
                    <button className={`btn btn-primary bg-highlight rounded-pill me-2`} href="#">Sign In</button>
                    <button className={`btn btn-primary bg-highlight rounded-pill`} href="#">Sign Up</button>
                </div>

                <div className={'col-2 col-xl-1 m-0 p-0'}>
                    <HamburgerMenu/>
                </div>
            </div>
        </>
    );
};

export default NavigationTopMenu;
