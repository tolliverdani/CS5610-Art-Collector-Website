import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar =
    ({
         active = 'explore'
     }) => {
        return (
            <>
                <ul className={`list-group`}>
                    <Link to="/"
                          className={`list-group-item text-white`}>
                        <i className={`fab fa-twitter`}/>
                    </Link>
                    <Link to="/home"
                          className={`list-group-item list-group-item-action align-items-center ${active === 'home' ? 'active' : ''}`}>
                        <i className={`fa fa-regular fa-house-user`}/>
                        <span className={`d-none d-xl-inline`}> Home</span>
                    </Link>
                    <Link to="/explore"
                          className={`list-group-item list-group-item-action align-items-center ${active === 'explore' ? 'active' : ''}`}>
                        <i className={`fa fa-regular fa-hashtag`}/>
                        <span className={`d-none d-xl-inline`}> Explore</span>
                    </Link>
                    <Link to="/notifications"
                          className={`list-group-item list-group-item-action align-items-center ${active === 'notifications' ? 'active' : ''}`}>
                        <i className={`fa fa-regular fa-bell fa-1x`}/>
                        <span className={`d-none d-xl-inline`}> Notifications</span>
                    </Link>
                    <Link to="../messages"
                          className={`list-group-item list-group-item-action align-items-center ${active === 'messages' ? 'active' : ''}`}>
                        <i className={`fa fa-regular fa-envelope`}/>
                        <span className={`d-none d-xl-inline`}> Messages</span>
                    </Link>
                    <Link to="../bookmarks"
                          className={`list-group-item list-group-item-action align-items-center ${active === 'bookmarks' ? 'active' : ''}`}>
                        <i className={`fa fa-regular fa-bookmark`}/>
                        <span className="d-none d-xl-inline"> Bookmarks</span>
                    </Link>
                    <Link to="../lists"
                          className={`list-group-item list-group-item-action align-items-center ${active === 'lists' ? 'active' : ''}`}>
                        <i className={`fa fa-solid fa-list`}/>
                        <span className={`d-none d-xl-inline`}> Lists</span>
                    </Link>
                    <Link to="../profile"
                          className={`list-group-item list-group-item-action align-items-center ${active === 'profile' ? 'active' : ''}`}>
                        <i className={`fa fa-regular fa-user`}/>
                        <span className={`d-none d-xl-inline`}> Profile</span>
                    </Link>
                    <Link to="../more"
                          className={`list-group-item list-group-item-action align-items-center ${active === 'more' ? 'active' : ''}`}>
                        <i className={`fa fa-solid fa-ellipsis-h`}/>
                        <span className={`d-none d-xl-inline`}> More</span>
                    </Link>
                </ul>
                <div className={`d-grid mt-2`}>
                    <a className={`btn btn-primary btn-block rounded-pill`}>Tweet</a>
                </div>
            </>
        );
    };

export default NavigationSidebar;
