import React, {useState} from "react";
import {Modal, Button} from 'react-bootstrap';
import {approveOffer, createOffer, rejectOffer} from "../../../_actions/offers-actions";
import {useDispatch} from "react-redux";

// Borrowed HEAVILY from here: https://react-bootstrap.github.io/components/modal/

const OfferModal = ({offer}) => {
    const [set, setShow] = useState(false);
    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAcceptOffer = () => {
        approveOffer(dispatch, offer).then(setShow(false));
    }

    const handleRejectOffer = () => {
        rejectOffer(dispatch, offer).then(setShow(false));
    }

    return (
        <>
            <div className="btn btn-danger rounded-pill m-0 p-2"
                 onClick={handleShow}>
                <div><h4 className={`m-0`}><strong>${offer.offer_price}</strong></h4>
                    <p className={"m-0"}>{offer.painting_name}</p>
                </div>
            </div>

            <Modal show={set} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Review Offer</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className={"mb-2 text-danger"}>
                        <strong>Please review the offer below.</strong>
                    </div>
                    <div className={"mb-2"}>
                        <strong>{offer.buyer_name}</strong> has offered to buy this piece for
                        <strong> ${offer.offer_price}</strong>.
                        If you approve the offer, the buyer will be notified.
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="warning"
                            onClick={handleAcceptOffer}
                    >
                        Approve
                    </Button>
                    <Button variant="primary" onClick={handleRejectOffer}>
                        Reject
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default OfferModal;