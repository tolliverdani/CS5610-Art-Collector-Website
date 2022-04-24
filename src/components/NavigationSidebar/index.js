import React from "react";
import {Link, useNavigate} from "react-router-dom";
import SecureContent from "../../_security/secure-content";
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
                        <i className="fa fa-light fa-fire ps-lg-2"/>
                        <span className={`d-none d-lg-inline ps-2`}>Popular</span>
                    </Link>
                    <Link to="/new-releases"
                          className={`list-group-item list-group-item-action text-center text-lg-start border-0 p-1 ${active === 'new-releases' ? 'active' : ''}`}>
                        <i className={`fa fa-regular fa-flag ps-lg-2`}/>
                        <span className={`d-none d-lg-inline ps-2`}>New Releases</span>
                    </Link>
                    <Link to="/new-artists"
                          className={`list-group-item list-group-item-action text-center text-lg-start border-0 p-1 ${active === 'new-artists' ? 'active' : ''}`}>
                        <i className={`fa fa-solid fa-user-plus ps-lg-2`}/>
                        <span className={`d-none d-lg-inline ps-2`}>New Artists</span>
                    </Link>
                    <Link to="/new-listings"
                          className={`list-group-item list-group-item-action text-center text-lg-start border-0 p-1 ${active === 'new-listings' ? 'active' : ''}`}>
                        <i className={`fa fa-solid fa-chart-bar ps-lg-2`}/>
                        <span className={`d-none d-lg-inline ps-2`}>New Listings</span>
                    </Link>

                    <SecureContent>
                        <Link to="/profile"
                              className={`list-group-item list-group-item-action text-center text-lg-start border-0 p-1`}>
                            <i className="fa fa-grip-horizontal ps-lg-2"/>
                            <span className={`d-none d-lg-inline ps-2`}>My Collection</span>
                        </Link>
                        {/* TODO: need to fix this link */}
                        <Link to={"/home"}
                              onClick={handleLogout}
                              className={`list-group-item list-group-item-action text-center text-lg-start border-0 p-1`}>
                            <i className="fa fa-arrow-alt-circle-right text-danger ps-lg-2"/>
                            <span className={`d-none d-lg-inline ps-2`}>Logout</span>
                        </Link>
                    </SecureContent>
                </ul>
            </>
        );
    };

export default NavigationSidebar;
