import React from "react";

import SearchBar from "./SearchBar";

const NavigationTopMenu = () => {
    return (
        <>
            <div className={'navbar position-sticky navbar-dark bg-primary m-0 p-0'}>
                <div className={'container'}>
                    <div className={'col-2 m-0 ms-1 p-0 justify-content-center'}>
                        <a className={'navbar-brand'}>LOGO</a>
                    </div>

                    <div className={'col-6 m-0 p-0'}>
                        <SearchBar/>
                    </div>

                    <div className={'col-2 m-0 p-0 d-none d-xxl-inline'}>
                        <button className={`btn btn-primary bg-highlight rounded-pill me-2`} href="#">Sign In</button>
                        <button className={`btn btn-primary bg-highlight rounded-pill`} href="#">Sign Up</button>
                    </div>

                    <div className={'col-1 m-0 me-1 p-0'}>
                        <nav className={`navbar navbar-dark bg-primary`}>
                            <button className={`navbar-toggler`} type={`button`} data-bs-toggle={`collapse`}
                                    data-bs-target={`#navbarColor01`} aria-controls={`navbarColor01`}
                                    aria-expanded={true} aria-label={`Toggle navigation`}>
                                <span className={`navbar-toggler-icon`}/>
                            </button>

                            <div className={`navbar-collapse collapse`} id={`navbarColor01`}>
                                <ul className={`navbar-nav me-auto`}>
                                    <li className={`nav-item`}>
                                        <a className={`nav-link`} href="#">Profile</a>
                                    </li>
                                    <li className={`nav-item d-none d-lg-block`}>
                                        <a className={`nav-link`} href="#">Sign Up</a>
                                    </li>
                                    <li className={`nav-item`}>
                                        <a className={`nav-link`} href="#">Settings</a>
                                    </li>
                                    <li className={`nav-item`}>
                                        <a className={`nav-link`} href="#">Privacy</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavigationTopMenu;
