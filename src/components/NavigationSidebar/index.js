import React from "react";
import {Link, useNavigate} from "react-router-dom";
import SecureContent from "../Security/secure-content";
import {logout} from "../../_services/auth-service";

const NavigationSidebar =
    ({
         active = 'home'
     }) => {

        const navigate = useNavigate()

        const handleLogout = async () => {
            try {
                await logout()
                navigate('/home')
            } catch (e) {
                throw(e);
            }
        }

        return (
            <>
                <ul className={`list-group`}>
                    <Link to="/home"
                          className={`list-group-item list-group-item-action text-center text-lg-start border-0 p-1 ${active === 'home' ? 'active' : ''}`}>
                        <i className="fa fa-light fa-fire"/>
                        <span className={`d-none d-lg-inline ps-2`}>Popular</span>
                    </Link>
                    <Link to="/new-releases"
                          className={`list-group-item list-group-item-action text-center text-lg-start border-0 p-1 ${active === 'new-releases' ? 'active' : ''}`}>
                        <i className={`fa fa-regular fa-flag`}/>
                        <span className={`d-none d-lg-inline ps-2`}>New Releases</span>
                    </Link>
                    <Link to="/new-artists"
                          className={`list-group-item list-group-item-action text-center text-lg-start border-0 p-1 ${active === 'new-artists' ? 'active' : ''}`}>
                        <i className={`fa fa-solid fa-user-plus`}/>
                        <span className={`d-none d-lg-inline ps-2`}>New Artists</span>
                    </Link>
                    <Link to="/new-auctions"
                          className={`list-group-item list-group-item-action text-center text-lg-start border-0 p-1 ${active === 'new-auctions' ? 'active' : ''}`}>
                        <i className={`fa fa-solid fa-chart-bar`}/>
                        <span className={`d-none d-lg-inline ps-2`}>New Auctions</span>
                    </Link>

                    <SecureContent>
                        <Link to="/profile"
                              className={`list-group-item list-group-item-action text-center text-lg-start border-0 p-1`}>
                            <i className="fa fa-grip-horizontal"/>
                            <span className={`d-none d-lg-inline ps-2`}>My Collection</span>
                        </Link>
                        <Link to={"/"}
                              className={`list-group-item list-group-item-action text-center text-lg-start border-0 p-1`}>
                            <i className="fa fa-arrow-alt-circle-right text-danger"/>
                            <span className={`d-none d-lg-inline ps-2`}>Logout</span>
                        </Link>
                    </SecureContent>
                </ul>
            </>
        );
    };

export default NavigationSidebar;
