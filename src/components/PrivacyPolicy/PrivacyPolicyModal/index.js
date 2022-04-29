import React, {useState} from "react";
import {Modal, Button} from 'react-bootstrap';
import PrivacyPolicy from "../index";

// Borrowed HEAVILY from here: https://react-bootstrap.github.io/components/modal/

const PrivacyPolicyModal = () => {
    const [set, setShow] = useState(false);

    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={set} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Review Privacy Policy</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className={"mb-2 text-danger"}>
                        <strong>Please review the privacy policy.</strong>
                    </div>
                    <div className={"mb-2"}>
                        <PrivacyPolicy/>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="warning">
                        I Accept
                    </Button>
                    <Button variant="primary">
                        I Don't Accept
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default PrivacyPolicyModal;