import React, {useState} from "react";
import {Modal, Button, Form} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import * as security from "../../../_services/auth-service";

// Borrowed HEAVILY from here: https://react-bootstrap.github.io/components/modal/

const SignUpModal = () => {
    const [set, setShow] = useState(false);

    const [newUser, setNewUser] = useState({email: "", username: "", password: ""});
    const navigate = useNavigate();

    // TODO does this go in an actions file?
    const signup = async () => {
        try {
            const response = await security.signup(newUser)
            if (response.status === 200) {
                navigate('/profile')
            }
        } catch (e) {
            alert(e);
        }
    }

    return (
        <>
            <Button className="btn btn-secondary rounded-pill border-0 m-1" onClick={() => setShow(true)}>
                Sign up
            </Button>

            <Modal show={set} onHide={() => setShow(false)}>
                <Modal.Header closeButton className={`border-0`}>
                    <div className={'container text-center'}>
                        <Modal.Title>Register</Modal.Title>
                    </div>
                </Modal.Header>

                <Modal.Body>
                    <Form className={`container`}>
                        <div className="form-group row mb-4">
                            <label htmlFor="InputEmail" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control rounded-pill bg-light border-0 shadow-none"
                                       id="InputEmail"
                                       placeholder="email@domain.com"
                                       value={newUser.email}
                                       onChange={(e) =>
                                           setNewUser({...newUser, email: e.target.value})}/>
                                <small id="emailHelp" className="form-text text-muted ps-2">
                                    We'll never share your email with anyone else
                                </small>
                            </div>
                        </div>
                        <div className="form-group row mb-4">
                            <label htmlFor="InputUsername" className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control rounded-pill bg-light border-0 shadow-none"
                                       id="InputUsername"
                                       placeholder="JohnDoe123"
                                       value={newUser.username}
                                       onChange={(e) =>
                                           setNewUser({...newUser, username: e.target.value})}/>
                            </div>
                        </div>

                        <div className="form-group row mb-3">
                            <label htmlFor="InputPassword"
                                   className="col-sm-2 col-form-label">
                                Password
                            </label>
                            <div className="col-sm-10">
                                <input type="password"
                                       className="form-control rounded-pill bg-light border-0 shadow-none"
                                       id="InputPassword"
                                       placeholder="Password"
                                       value={newUser.password}
                                       onChange={(e) =>
                                           setNewUser({...newUser, password: e.target.value})}/>
                            </div>
                        </div>
                    </Form>
                </Modal.Body>

                <Modal.Footer className={`border-0`}>
                    <div className={'container text-center'}>
                        <button className={'btn btn-primary bg-primary rounded-pill border-0 m-2'}
                                onClick={() => console.log("sign up button pressed")}>
                            Register
                        </button>
                        <button className={'btn btn-primary bg-danger rounded-pill border-0 m-2'}
                                onClick={() => console.log(newUser)}>
                            Cancel
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default SignUpModal;