import React, {useState} from "react";
import {Modal, Button} from 'react-bootstrap';

// Borrowed HEAVILY from here: https://react-bootstrap.github.io/components/modal/

const ConfirmationModal = ({price, id}) => {
    const [offer_price, setPrice] = useState(price);
    const [set, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="btn btn-primary rounded-pill" onClick={handleShow}>
                Make Offer
            </Button>

            <Modal show={set} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Make Offer</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className={"mb-2 text-danger"}>
                        <strong>You have not yet made the purchase.</strong>
                    </div>
                    <div className={"mb-2"}>
                        The seller has listed this piece for
                        <strong> ${price}</strong>.
                        You can offer any amount to counter.
                        Once you confirm, the seller will be notified.
                    </div>
                    <div className={"mt-2 mb-2"}>
                        How much do you want to offer?
                    </div>
                    <input className={"mt-2 mb-2"}
                           value={offer_price}
                           type="number"
                           onChange={(e) => setPrice(e.value)}/>
                    <p>By clicking confirm, you commit to buy this item from the seller
                        at the offer price should it be accepted.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="warning" onClick={handleClose}>
                        Make Offer
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ConfirmationModal;