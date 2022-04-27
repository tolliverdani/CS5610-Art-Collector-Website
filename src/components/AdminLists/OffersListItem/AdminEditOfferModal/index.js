import React, {useRef, useState} from "react";
import {Modal, Button, Form} from 'react-bootstrap';
import {useProfile} from "../../../../_context/profile-context";
import {useNavigate} from "react-router-dom";

import {adminUpdateProfile, updateProfile} from "../../../../_actions/users-actions";
import {useDispatch} from "react-redux";
import {deleteOffer, updateOffer} from "../../../../_actions/offers-actions";

// Borrowed HEAVILY from here: https://react-bootstrap.github.io/components/modal/

const AdminEditOfferModal = ({offer}) => {
    const [set, setShow] = useState(false);

    const dispatch = useDispatch();

    const [offer_price, changeOfferPrice] = useState(offer.offer_price)
    const [active_offer, changeActiveOffer] = useState(offer.active_offer)
    const [accepted, changeAccepted] = useState(offer.accepted)
    const [date_removed, changeDateRemoved] = useState(offer.date_removed)

    const handleDelete = async () => {
        try {
            deleteOffer(dispatch, offer._id).then(() => {
                alert("You have deleted this offer")
                setShow(false)
            })
        } catch (e) {
            setShow(false)
        }
    }

    const handleUpdate = async () => {
        try {
            const updated_offer = {...offer, "offer_price": offer_price, "active_offer": active_offer,
                "accepted": accepted, "date_removed": date_removed}

            // TODO THIS
            updateOffer(dispatch,updated_offer).then(() =>
            {
                alert("You have updated this offer")
                setShow(false)
            })
        } catch (e) {
            setShow(false)
        }
    }

    return (
        <div className={"mb-2 text-end"}>
            <div onClick={() => setShow(true)} className={"badge bg-warning"}>Edit</div>

            <Modal show={set} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Offer</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form className={`container`}>

                        <div className={"mb-3 text-danger text-center"}>
                            <strong>As admin, you can edit certain parts of an offer using the form below.</strong>
                        </div>
                        <div className={"card mb-2 p-2 text-center"}>
                            <div className={"text-center"}>
                                <h6><strong>Uneditable Fields</strong></h6>
                            </div>
                            <p className={"m-0"}><strong>Offer Id: </strong>{offer._id}</p>
                            <p className={"m-0"}><strong>Listing Id: </strong>{offer.listing_id}</p>
                            <p className={"m-0"}><strong>Painting Id: </strong>{offer.painting_id}</p>
                            <p className={"m-0"}><strong>Painting Name: </strong>{offer.painting_name}</p>
                            <p className={"m-0"}><strong>Artist Id: </strong>{offer.artist_id}</p>
                            <p className={"m-0"}><strong>Artist Name: </strong>{offer.artist_name}</p>
                            <p className={"m-0"}><strong>Seller Id: </strong>{offer.seller_id}</p>
                            <p className={"m-0"}><strong>Buyer Id: </strong>{offer.buyer_id}</p>
                            <p className={"m-0"}><strong>Buyer Name: </strong>{offer.buyer_name}</p>
                            <p className={"m-0"}><strong>Date Created: </strong>{new Date(offer.date_created).toLocaleDateString()}</p>
                        </div>
                        <div className="form-group row mb-4">
                            <label htmlFor="PriceInput"
                                   className="col-sm-4 col-form-label">
                                Offer Price
                            </label>
                            <div className="col-sm-8">
                                <input className="form-control rounded-pill bg-light border-0 shadow-none"
                                       type="number" id="PiceInput"
                                       value={offer_price}
                                       onChange={(e) => changeOfferPrice(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="form-group row mb-4">
                            <label htmlFor="ActiveOffer"
                                   className="col-sm-4 col-form-label">
                                Active Offer?
                            </label>
                            <div className="col-sm-8">
                                <select className="form-control rounded-pill bg-light border-0 shadow-none"
                                        id="ActiveOffer"
                                        value={active_offer}
                                        onChange={(e) => changeActiveOffer(e.target.value)}
                                >
                                    <option value={true}>True</option>
                                    <option value={false}>False</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group row mb-4">
                            <label htmlFor="AcceptedOffer"
                                   className="col-sm-4 col-form-label">
                                Accepted Offer?
                            </label>
                            <div className="col-sm-8">
                                <select className="form-control rounded-pill bg-light border-0 shadow-none"
                                        id="AcceptedOffer"
                                        value={accepted}
                                        onChange={(e) => changeAccepted(e.target.value)}
                                >
                                    <option value={true}>True</option>
                                    <option value={false}>False</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group row mb-4">
                            <label htmlFor="DateRemovedInput"
                                   className="col-sm-4 col-form-label">
                                Date Removed
                            </label>
                            <div className="col-sm-8">
                                <input className="form-control rounded-pill bg-light border-0 shadow-none"
                                       type="date" id="DateRemovedInput"
                                       value={new Date(date_removed).toLocaleDateString('en-CA')}
                                       onChange={(e) => changeDateRemoved(e.target.value)}
                                />
                            </div>
                        </div>




                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    {/* TODO: need to fix this */}
                    <Button variant="danger" onClick={handleDelete}>
                        Delete Offer
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
export default AdminEditOfferModal;