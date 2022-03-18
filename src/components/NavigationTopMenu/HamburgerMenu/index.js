import React from "react";

const HamburgerMenu = () => {
    return (
        <>
            <nav className={`navbar navbar-dark bg-primary`}>
                <button className={`navbar-toggler`} type={`button`} data-bs-toggle={`collapse`}
                        data-bs-target={`#navbarColor01`} aria-controls={`navbarColor01`}
                        aria-expanded={true} aria-label={`Toggle navigation`}>
                    <span className={`navbar-toggler-icon`}/>
                </button>

                <div className={`navbar-collapse collapse`} id={`navbarColor01`}>
                    <ul className={`navbar-nav me-auto`}>
                        <li className={`nav-item`}>
                            <a className={`nav-link`} href="/#">Profile</a>
                        </li>
                        <li className={`nav-item d-none d-lg-block`}>
                            <a className={`nav-link`} href="/#">Sign Up</a>
                        </li>
                        <li className={`nav-item`}>
                            <a className={`nav-link`} href="/#">Settings</a>
                        </li>
                        <li className={`nav-item`}>
                            <a className={`nav-link`} href="/#">Privacy</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default HamburgerMenu;

