import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar =
    ({
         active = 'popular'
     }) => {
        return (
            <>
                <ul className={`list-group`}>
                    <Link to="/home"
                          className={`list-group-item list-group-item-action align-items-center ${active === 'popular' ? 'active' : ''}`}>
                        <i className="fa fa-light fa-fire"/>
                        <span className={`d-none d-lg-inline`}> Popular</span>
                    </Link>
                    <Link to="/new-releases"
                          className={`list-group-item list-group-item-action align-items-center ${active === 'explore' ? 'active' : ''}`}>
                        <i className={`fa fa-regular fa-flag`}/>
                        <span className={`d-none d-lg-inline`}> New Releases</span>
                    </Link>
                    <Link to="/new-artists"
                          className={`list-group-item list-group-item-action align-items-center ${active === 'lists' ? 'active' : ''}`}>
                        <i className={`fa fa-solid fa-user-plus`}/>
                        <span className={`d-none d-lg-inline`}> New Artists</span>
                    </Link>
                    <Link to="/new-auctions"
                          className={`list-group-item list-group-item-action align-items-center ${active === 'lists' ? 'active' : ''}`}>
                        <i className={`fa fa-solid fa-chart-bar`}/>
                        <span className={`d-none d-lg-inline`}> New Auctions</span>
                    </Link>
                </ul>
            </>
        );
    };

export default NavigationSidebar;
