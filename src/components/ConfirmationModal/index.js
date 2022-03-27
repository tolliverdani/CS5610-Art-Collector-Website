import React, {useState} from "react";
import {Modal, Button} from 'react-bootstrap';

// Borrowed HEAVILY from here: https://react-bootstrap.github.io/components/modal/

const ConfirmationModal = ({button_text, modal_heading, message, accept_button, close_button}) => {
    const [set, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
            <Button className="nextButton" onClick={handleShow}>
                {button_text}
            </Button>

            <Modal show={set} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modal_heading}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{message}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        {accept_button}
                    </Button>
                    <Button variant="warning" onClick={handleClose}>
                        {close_button}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ConfirmationModal;