import React, {useState} from "react";
import {Modal, Button} from 'react-bootstrap';
import {createOffer} from "../../../_actions/offers-actions";
import {useDispatch} from "react-redux";
import {useProfile} from "../../../_context/profile-context";

// Borrowed HEAVILY from here: https://react-bootstrap.github.io/components/modal/



const ConfirmationModal = ({listing_item}) => {
    const [offer_price, setPrice] = useState(listing_item.listing_price);
    const [set, setShow] = useState(false);
    const dispatch = useDispatch();
    const {profile} = useProfile();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCreateOffer = () => {
        const offer = {
            "listing_id": listing_item._id,
            "painting_id": listing_item.painting_id,
            "painting_name": listing_item.painting_title,
            "artist_id": listing_item.artist_id,
            "artist_name": listing_item.artist_name,
            "seller_id": listing_item.owner_id,
            "buyer_id": profile._id,
            "buyer_name": profile.username,
            "offer_price": offer_price,
            "active_offer": true
        }
        createOffer(dispatch, offer).then(setShow(false));
    }

    return (
        <>
            <div onClick={handleShow}>
                Make Offer
            </div>

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
                        <strong> ${listing_item.listing_price}</strong>.
                        You can offer any amount to counter.
                        Once you confirm, the seller will be notified.
                    </div>
                    <div className={"mt-2 mb-2"}>
                        How much do you want to offer?
                    </div>
                    <input className={"mt-2 mb-2"}
                           value={offer_price}
                           type="number"
                           onChange={(e) => setPrice(e.target.value)}/>
                    <p>By clicking confirm, you commit to buy this item from the seller
                        at the offer price should it be accepted.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="warning" onClick={handleCreateOffer}>
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