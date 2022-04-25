import React, {useRef, useState} from "react";
import {Modal, Button, Form} from 'react-bootstrap';
import {createOffer} from "../../../_actions/offers-actions";
import {useDispatch} from "react-redux";
import {useProfile} from "../../../_context/profile-context";
import {useNavigate} from "react-router-dom";
import {update} from "../../../_services/auth-service";
import {updateUser} from "../../../_services/user-service";
import {updateProfile} from "../../../_actions/users-actions";

// Borrowed HEAVILY from here: https://react-bootstrap.github.io/components/modal/

const EditProfileModal = () => {
    const [set, setShow] = useState(false);



    const navigate = useNavigate();

    const user = useProfile()
    const profile = user.profile
    const [email, changeEmail] = useState(profile.email)
    const [username, changeUsername] = useState(profile.username)
    const [pronoun, changePronoun] = useState(profile.pronoun)
    const [location, changeLocation] = useState(profile.location)
    const [bio, changeBio] = useState(profile.bio)

    const handleUpdate = async () => {
        try {
            const updated_user = {...profile, "email": email, "username": username, "pronoun": pronoun, "location": location, "bio": bio}
            // delete blank password field to that it isn't updated
            delete updated_user["password"];
            updateProfile(updated_user);
            navigate('/profile')
        } catch (e) {
            throw(e);
        }
    }

    return (
        <div className={"mb-2 text-end"}>
            <div className="btn btn-transparent m-0 p-2"
                 onClick={() => setShow(true)}>
                <em>Edit Profile</em>
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
                                       onChange={(e) => changeEmail(e.target.value)}
                                       type="email" id="InputEmail"
                                       value={email}/>
                            </div>
                        </div>
                        <div className="form-group row mb-4">
                            <label htmlFor="InputUsername"
                                   className="col-sm-2 col-form-label">
                                Username
                            </label>
                            <div className="col-sm-10">
                                <input className="form-control rounded-pill bg-light border-0 shadow-none"
                                       type="text" id="InputUsername"
                                       value={username}
                                       onChange={(e) => changeUsername(e.target.value)}
                                />

                            </div>
                        </div>

                        <div className="form-group row mb-3">
                            <label htmlFor="InputPronouns"
                                   className="col-sm-2 col-form-label">
                                Pronouns
                            </label>
                            <div className="col-sm-10">
                                <select className="form-control rounded-pill bg-light border-0 shadow-none"
                                        id="InputPronouns"
                                        value={pronoun}
                                        onChange={(e) => changePronoun(e.target.value)}
                                >
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
                                       type="text" id="InputLocation"
                                       value={location}
                                       onChange={(e) => changeLocation(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="form-group row mb-4">
                            <label htmlFor="InputBio"
                                   className="col-sm-2 col-form-label">
                                Bio
                            </label>
                            <div className="col-sm-10">
                                <textarea className="form-control bg-light border-0 shadow-none"
                                          id="InputBio"
                                          value={bio}
                                          onChange={(e) => changeBio(e.target.value)}
                                />
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
        </div>
    );
}
export default EditProfileModal;