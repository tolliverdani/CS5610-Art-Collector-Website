import React from "react";

import PostList from "../PostList/index";

const Index = () => {
    return (
        <>
            <div className={`row align-items-center ms-2 m-2`}>
                <div className={`d-flex col-11 align-items-center bg-white rounded-pill`}>
                    <i className={`fas fa-search text-muted`}/>
                    <input type="text" className={`form-control bg-transparent border-0`}
                           placeholder="Search Tuiter"/>
                </div>

                <div className={`col-1`} href="#">
                    <i className={`fas fa-cog fa-2x text-primary`}/>
                </div>
            </div>

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

            {PostList()}
        </>
    );
}
export default Index;
