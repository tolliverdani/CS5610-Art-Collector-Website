import React from "react";
import {Dropdown} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {logout} from "../../../_actions/profile-actions";
import {useDispatch} from "react-redux";

const HamburgerMenu = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logout(dispatch)
            navigate('/home')
            window.location.reload(false);
        } catch (e) {
            alert("Ut oh! We were unable to log out of this account")
        }
    }

    return (
        <>
            <Dropdown>
                <Dropdown.Toggle className={"btn border-0 text-primary"}
                                 variant={"transparent"}
                                 id={"dropdown"}>
                    {/* TODO: replace with profile picture icon */}
                    <i className={'fa text-light fa-2x fa-user-circle'}/>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                    <Dropdown.Item href="/privacy">Privacy</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
};

export default HamburgerMenu;

