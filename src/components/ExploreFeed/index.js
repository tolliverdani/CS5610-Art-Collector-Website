import React from "react";

import SearchBar from "../NavigationTopMenu/SearchBar";

const Index = () => {
    return (
        <>
            {SearchBar()}

            <ul className={`nav mb-2 nav-tabs`}>
                <li className={`nav-item`}>
                    <a className={`nav-link active`} href="#"><strong>For you</strong></a>
                </li>
                <li className={`nav-item`}>
                    <a className={`nav-link`} href="#"><strong>Trending</strong></a>
                </li>
                <li className={`nav-item`}>
                    <a className={`nav-link`} href="#"><strong>News</strong></a>
                </li>
                <li className={`nav-item`}>
                    <a className={`nav-link`} href="#"><strong>Sports</strong></a>
                </li>
                <li className={`nav-item`}>
                    <a className={`nav-link d-none d-md-block`} href="#"><strong>Entertainment</strong></a>
                </li>
            </ul>
        </>
    );
}
export default Index;
