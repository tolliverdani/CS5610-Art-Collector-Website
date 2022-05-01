import React, {useRef, useState} from "react";
import {Modal, Button, Form} from 'react-bootstrap';

import {adminDeleteUser, adminUpdateProfile} from "../../../../_actions/users-actions";
import {useDispatch, useSelector} from "react-redux";

// Borrowed HEAVILY from here: https://react-bootstrap.github.io/components/modal/

const AdminEditProfileModal = ({user}) => {
    const [set, setShow] = useState(false);
    const profile = useSelector(state => state.profile)


    const dispatch = useDispatch();

    const [email, changeEmail] = useState(user.email || "")
    const [username, changeUsername] = useState(user.username || "")
    const [pronoun, changePronoun] = useState(user.pronoun || "")
    const [location, changeLocation] = useState(user.location || "")
    const [password, changePassword] = useState("")
    const [bio, changeBio] = useState(user.bio || "")
    const [rating, changeRating] = useState(user.rating || 0)
    const [artist, changeArtist] = useState(user.is_artist || false)
    const [artist_id, changeArtistId] = useState(user.artist_id || "")
    const [admin, changeAdmin] = useState(user.is_admin || false)


    const handleDelete = async () => {
        if (user._id === profile._id) {
            alert("You cannot delete yourself. Have another admin user do that.")
            setShow(false)
        } else {
            try {
                adminDeleteUser(dispatch, user._id).then(() => {
                    alert("You have deleted this user")
                    setShow(false)
                })
            } catch (e) {
                alert("Ut oh! We were unable to delete this user")
                setShow(false)
            }
        }
    }


    const handleUpdate = async () => {
        try {
            const updated_user = {
                ...user,
                "email": email,
                "username": username,
                "pronoun": pronoun,
                "location": location,
                "is_artist": artist,
                "artist_id": artist_id,
                "bio": bio,
                "rating": rating,
                "password": password,
                "is_admin": admin
            }

            // if password field is blank we assume that did not change it and don't want to update it
            if (password === "") {
                delete updated_user["password"];
            }

            adminUpdateProfile(dispatch, updated_user).then(() => {
                alert("You have updated this user's profile")
                setShow(false)
            })
        } catch (e) {
            alert("Ut oh! We were unable to update this user's profile");
            setShow(false)
        }
    }

    return (
        <div className={"mb-2 text-end"}>
            <div onClick={() => setShow(true)} className={"badge bg-warning"}>Edit</div>


            <Modal show={set} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className={"mb-3 text-danger text-center"}>
                        <strong>As admin, you can edit a user's profile using the form below.</strong>
                    </div>

                    <div className={"card mb-2 p-2 text-center"}>
                        <div className={"text-center"}>
                            <h6><strong>Uneditable Fields</strong></h6>
                        </div>
                        <p className={"m-0"}><strong>User Id: </strong>{user._id}</p>
                        <p className={"m-0"}><strong>Date Joined: </strong>{new Date(user.joined).toLocaleDateString()}
                        </p>
                        <p className={"m-0"}><strong>Collection Id:</strong>{user.collection_id}</p>

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
                                       onChange={(e) => changeUsername(e.target.value)}/>
                            </div>
                        </div>

                        <div className="form-group row mb-4">
                            <label htmlFor="InputPassword"
                                   className="col-sm-2 col-form-label">
                                Password
                            </label>
                            <div className="col-sm-10">
                                <input className="form-control rounded-pill bg-light border-0 shadow-none"
                                       type="password" id="InputPassword"
                                       value={password}
                                       onChange={(e) => changePassword(e.target.value)}/>
                                <label htmlFor="InputPassword" className=" ms-2 mb-0 form-label text-secondary">
                                    Don't want to update the password? Leave this blank.
                                </label>
                            </div>
                        </div>

                        <div className="form-group row mb-3">
                            <label htmlFor="InputAdminStatus"
                                   className="col-sm-2 col-form-label">
                                Admin?
                            </label>
                            <div className="col-sm-10">
                                <select className="form-control rounded-pill bg-light border-0 shadow-none"
                                        id="InputAdminStatus"
                                        value={admin}
                                        onChange={(e) => changeAdmin(e.target.value)}>
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group row mb-3">
                            <label htmlFor="InputArtistStatus"
                                   className="col-sm-2 col-form-label">
                                Artist?
                            </label>
                            <div className="col-sm-10">
                                <select className="form-control rounded-pill bg-light border-0 shadow-none"
                                        id="InputArtistStatus"
                                        value={artist}
                                        onChange={(e) => changeArtist(e.target.value)}>
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group row mb-3">
                            <label htmlFor="InputArtistId"
                                   className="col-sm-2 col-form-label">
                                Artist ID
                            </label>
                            <div className="col-sm-10">
                                <input className="form-control rounded-pill bg-light border-0 shadow-none"
                                       type={"text"}
                                       id="InputArtistId"
                                       value={artist_id}
                                       onChange={(e) => changeArtistId(e.target.value)}/>
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
                                        onChange={(e) => changePronoun(e.target.value)}>
                                    <option> </option>
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
                                       onChange={(e) => changeLocation(e.target.value)}/>
                            </div>
                        </div>

                        <div className="form-group row mb-4">
                            <label htmlFor="ChangeRating"
                                   className="col-sm-2 col-form-label">
                                Rating
                            </label>
                            <div className="col-sm-10">
                                <input className="form-control rounded-pill bg-light border-0 shadow-none"
                                       type="number" id="ChangeRating"
                                       value={rating}
                                       onChange={(e) => changeRating(e.target.value)}
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
                                          onChange={(e) => changeBio(e.target.value)}/>
                            </div>
                        </div>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    {/* TODO: need to fix this */}
                    <Button variant="danger" onClick={handleDelete}>
                        Delete User
                    </Button>
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
export default AdminEditProfileModal;