import React, {useState} from "react";
import {Modal, Button} from 'react-bootstrap';

// Borrowed HEAVILY from here: https://react-bootstrap.github.io/components/modal/

const ConfirmationModal = ({price, id}) => {
    const [offer_price, setPrice] = useState(price);
    const [set, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
            <Button className="nextButton" onClick={handleShow}>
                Make Offer
            </Button>

            <Modal show={set} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Offer</Modal.Title>
                </Modal.Header>
                <Modal.Body><strong>You have not yet made the purchase.</strong> The seller has listed this piece for ${price},
                    and you can offer any amount. Once you confirm, the artwork holder will be notified.
                <label className={"mt-2"}>How much do you want to offer the seller? <input value={offer_price}
                                                                                           type="number"
                                                                                           onChange={(e) => setPrice(e.value)}
                /></label>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Make Offer
                    </Button>
                    <Button variant="warning" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ConfirmationModal;