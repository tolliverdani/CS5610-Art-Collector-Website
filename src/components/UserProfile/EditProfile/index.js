import React, {useRef, useState} from "react";
import {Modal, Button, Form} from 'react-bootstrap';
import {createOffer} from "../../../_actions/offers-actions";
import {useDispatch} from "react-redux";
import {useProfile} from "../../../_context/profile-context";
import {useNavigate} from "react-router-dom";
import {update} from "../../../_services/auth-service";

// Borrowed HEAVILY from here: https://react-bootstrap.github.io/components/modal/

const EditProfileModal = () => {
    const [set, setShow] = useState(false);

    const emailRef = useRef()
    const usernameRef = useRef()
    const pronounRef = useRef()
    const locationRef = useRef()
    const bioRef = useRef()

    const navigate = useNavigate();

    const user = useProfile()
    const profile = user.profile

    const handleUpdate = async () => {
        try {
            await update(
                emailRef.current.value,
                usernameRef.current.value,
                pronounRef.current.value,
                locationRef.current.value,
                bioRef.current.value
            )
            navigate('/profile')
        } catch (e) {
            throw(e);
        }
    }

    return (
        <>
            <div className="btn btn-primary rounded-pill m-0 p-2"
                 onClick={() => setShow(true)}>
                Edit Profile
            </div>

            <Modal show={set} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className={"mb-3 text-danger"}>
                        <strong>Please make any changes to your profile in the form below.</strong>
                    </div>
                    <Form className={`container`}>
                        <div className="form-group row mb-4">
                            <label htmlFor="InputEmail"
                                   className="col-sm-2 col-form-label">
                                Email
                            </label>
                            <div className="col-sm-10">
                                <input className="form-control rounded-pill bg-light border-0 shadow-none"
                                       ref={emailRef}
                                       type="email" id="InputEmail"
                                       value={profile.email}/>
                            </div>
                        </div>
                        <div className="form-group row mb-4">
                            <label htmlFor="InputUsername"
                                   className="col-sm-2 col-form-label">
                                Username
                            </label>
                            <div className="col-sm-10">
                                <input className="form-control rounded-pill bg-light border-0 shadow-none"
                                       ref={usernameRef}
                                       type="text" id="InputUsername"
                                       value={profile.username}/>
                            </div>
                        </div>

                        <div className="form-group row mb-3">
                            <label htmlFor="InputPronouns"
                                   className="col-sm-2 col-form-label">
                                Pronouns
                            </label>
                            <div className="col-sm-10">
                                <select className="form-control rounded-pill bg-light border-0 shadow-none"
                                        ref={pronounRef}
                                        id="InputPronouns"
                                value={profile.pronoun}>
                                    <option>He/Him</option>
                                    <option>She/Her</option>
                                    <option>They/Them</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group row mb-4">
                            <label htmlFor="InputLocation"
                                   className="col-sm-2 col-form-label">
                                Location
                            </label>
                            <div className="col-sm-10">
                                <input className="form-control rounded-pill bg-light border-0 shadow-none"
                                       ref={locationRef}
                                       type="text" id="InputLocation"
                                       value={profile.location}/>
                            </div>
                        </div>

                        <div className="form-group row mb-4">
                            <label htmlFor="InputBio"
                                   className="col-sm-2 col-form-label">
                                Bio
                            </label>
                            <div className="col-sm-10">
                                <textarea className="form-control bg-light border-0 shadow-none"
                                          ref={bioRef}
                                          id="InputBio"
                                          value={profile.bio}/>
                            </div>
                        </div>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    {/* TODO: need to fix this */}
                    <Button variant="warning" onClick={handleUpdate}>
                        Update
                    </Button>
                    <Button variant="primary" onClick={() => setShow(false)}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default EditProfileModal;