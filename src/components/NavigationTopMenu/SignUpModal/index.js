import React, {useState} from "react";
import {Modal, Button, InputGroup, Form} from 'react-bootstrap';

// Borrowed HEAVILY from here: https://react-bootstrap.github.io/components/modal/

const SignUpModal = () => {
    const [set, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button className="btn btn-secondary rounded-pill border-0 m-1" onClick={handleShow}>
                Sign up
            </Button>

            <Modal show={set} onHide={handleClose}>
                <Modal.Header closeButton>
                    <div className={'container text-center'}>
                        <Modal.Title>Register</Modal.Title>
                    </div>
                </Modal.Header>

                <Modal.Body>
                    <form>
                        <div className="form-group row mb-4">
                            <label htmlFor="InputEmail" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control rounded-pill" id="InputEmail"
                                       placeholder="email@domain.com"/>
                                <small id="emailHelp" className="form-text text-muted">
                                    We'll never share your email with anyone else.
                                </small>
                            </div>
                        </div>
                        <div className="form-group row mb-4">
                            <label htmlFor="InputUsername" className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control rounded-pill" id="InputUsername"
                                       placeholder="JohnDoe123"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="InputPassword" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control rounded-pill" id="InputPassword"
                                       placeholder="Password"/>
                            </div>
                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <div className={'container text-center'}>
                        <button className={'btn btn-primary bg-primary rounded-pill border-0 m-2'}>
                            Register
                        </button>
                        <button className={'btn btn-primary bg-danger rounded-pill border-0 m-2'}
                                onClick={handleClose}>
                            Cancel
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default SignUpModal;