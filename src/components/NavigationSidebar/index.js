import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar =
    ({
         active = 'home'
     }) => {
        return (
            <>
                <ul className={`list-group`}>
                    <Link to="/home"
                          className={`list-group-item list-group-item-action text-center text-lg-start border-0 p-1 ${active === 'home' ? 'active' : ''}`}>
                        <i className="fa fa-light fa-fire"/>
                        <span className={`d-none d-lg-inline`}> Popular</span>
                    </Link>
                    <Link to="/new-releases"
                          className={`list-group-item list-group-item-action text-center text-lg-start border-0 p-1 ${active === 'new-releases' ? 'active' : ''}`}>
                        <i className={`fa fa-regular fa-flag`}/>
                        <span className={`d-none d-lg-inline`}> New Releases</span>
                    </Link>
                    <Link to="/new-artists"
                          className={`list-group-item list-group-item-action text-center text-lg-start border-0 p-1 ${active === 'new-artists' ? 'active' : ''}`}>
                        <i className={`fa fa-solid fa-user-plus`}/>
                        <span className={`d-none d-lg-inline`}> New Artists</span>
                    </Link>
                    <Link to="/new-auctions"
                          className={`list-group-item list-group-item-action text-center text-lg-start border-0 p-1 ${active === 'new-auctions' ? 'active' : ''}`}>
                        <i className={`fa fa-solid fa-chart-bar`}/>
                        <span className={`d-none d-lg-inline`}> New Auctions</span>
                    </Link>
                </ul>
            </>
        );
    };

export default NavigationSidebar;
