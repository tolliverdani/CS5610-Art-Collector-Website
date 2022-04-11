import React from "react";
import ConfirmationModal from "../../ConfirmationModal";

const Login = () => {
    return (
        <>
            {/* TODO: I want to put the login screen in a popup window! */}
            <div className={"container"}>
                <button type={"button"} data-toggle={"modal"} data-target={"#loginModal"}
                        className={`btn btn-primary bg-highlight rounded-pill me-2`}>Login
                </button>

            <ConfirmationModal accept_button={"Accept"}
                               close_button={"Cancel"}
            />
        </div>
        </>
    );
};

export default Login;
