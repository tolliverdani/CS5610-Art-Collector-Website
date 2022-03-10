import React from "react";

import SearchBar from "../SearchBar";

const NavigationTopMenu = () => {
    return (
        <>
            <div className={'row align-items-center bg-primary m-0 p-0'}>
                <div className={'col-2 text-white'}>
                    <h1>LOGO</h1>
                </div>
                <div className={'col-6'}>
                    <SearchBar/>
                </div>
                <div className={'col-4'}>
                    <button className={`btn btn-primary btn-block rounded-pill`}>Sign Up</button>
                    <button className={`btn btn-primary btn-block rounded-pill`}>Sign In</button>
                </div>
            </div>
        </>
    )
        ;
};

export default NavigationTopMenu;
