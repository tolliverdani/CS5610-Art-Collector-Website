import React, {useState} from "react";
import {Modal, Button, Form} from 'react-bootstrap';
import {printUser} from "../../../_services/user-service";

// Borrowed HEAVILY from here: https://react-bootstrap.github.io/components/modal/

const LogInModal = () => {
    const [set, setShow] = useState(false);
    const [user, newUser] = useState({email: "", password: ""});

    return (
        <>
            <Button className="btn btn-secondary rounded-pill border-0 m-1"
                    onClick={() => setShow(true)}>
                Log in
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
                                    type="email" id="InputEmail" placeholder="email@domain.com"
                                    value={user.email}
                                    onChange={(e) =>
                                        newUser({...user, email: e.target.value})}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="InputPassword"
                                   className="col-sm-2 col-form-label">Password
                            </label>
                            <div className="col-sm-10">
                                <input className="form-control rounded-pill bg-light border-0 shadow-none"
                                       type="password" id="InputPassword" placeholder="Password"
                                       value={user.password}
                                       onChange={(e) =>
                                           newUser({...user, password: e.target.value})}/>
                            </div>
                        </div>
                    </Form>
                </Modal.Body>

                <Modal.Footer className={`border-0`}>
                    <div className={'container text-center'}>
                        <button className={'btn btn-primary bg-primary rounded-pill border-0 mb-2'}
                                onClick={() => console.log(user)}>Login
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