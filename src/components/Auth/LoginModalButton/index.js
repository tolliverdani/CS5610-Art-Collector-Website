import React, {useRef, useState} from "react";
import {Modal, Button, Form} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import {login} from "../../../_services/auth-service";

// Borrowed HEAVILY from here: https://react-bootstrap.github.io/components/modal/

const LogInModal = ({text}) => {
    const [set, setShow] = useState(false);

    const emailRef = useRef()
    const passRef = useRef()

    const navigate = useNavigate();

    const handleLogin = async () => {
        console.log("in handleLogin")
        try {
            await login(
                emailRef.current.value,
                passRef.current.value
            )
            navigate('/profile')
        } catch (e) {
            throw(e)
        }
    }

    return (
        <>
        <Button className="btn btn-secondary rounded-pill border-0 m-1 d-none d-xxl-inline"
                    onClick={() => setShow(true)}>
                {text}
            </Button>

            <Modal show={set} onHide={() => setShow(false)}>
                <Modal.Header closeButton className={`border-0`}>
                    <div className={'container text-center'}>
                        <Modal.Title>Welcome back!</Modal.Title>
                    </div>
                </Modal.Header>

                <Modal.Body>
                    <Form className={`container`}>
                        <div className="form-group row mb-4">
                            <label htmlFor="InputEmail"
                                   className="col-sm-2 col-form-label">Email
                            </label>
                            <div className="col-sm-10">
                                <input
                                    className="form-control rounded-pill bg-light border-0 shadow-none"
                                    ref={emailRef}
                                    type="email" id="InputEmail"
                                    placeholder="email@domain.com"
                                    onKeyPress={(e) => {
                                        if ( e.key === 'Enter') handleLogin();
                                    }}
                                    />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="InputPassword"
                                   className="col-sm-2 col-form-label">Password
                            </label>
                            <div className="col-sm-10">
                                <input className="form-control rounded-pill bg-light border-0 shadow-none"
                                       ref={passRef}
                                       type="password" id="InputPassword"
                                       placeholder="Password"
                                       onKeyPress={(e) => {
                                           if ( e.key === 'Enter') handleLogin();
                                       }}
                                />
                            </div>
                        </div>
                    </Form>
                </Modal.Body>

                <Modal.Footer className={`border-0`}>
                    <div className={'container text-center'}>
                        <button className={'btn btn-primary bg-primary rounded-pill border-0 mb-2'}
                                onClick={() => handleLogin}>
                            {console.log("clicked the login button")}
                            Login
                        </button>
                        <div className={'row'}>
                            <a className={'text-center small text-muted'}
                               href={'/#'}>Forgot your password?</a>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default LogInModal;