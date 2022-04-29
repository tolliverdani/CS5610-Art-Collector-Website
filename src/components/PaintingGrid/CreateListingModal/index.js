import React, {useRef, useState} from "react";
import {Modal, Form} from 'react-bootstrap';
import {createListing} from "../../../_actions/listings-actions";
import {useDispatch, useSelector} from "react-redux";

// Borrowed HEAVILY from here: https://react-bootstrap.github.io/components/modal/

const CreateListingModal = ({art_info}) => {
    const [set, setShow] = useState(false);

    const qualityRef = useRef()
    const priceRef = useRef()
    const profile = useSelector(state => state.profile)
    const dispatch = useDispatch()


    const handleCreateListing = () => {
        console.log(profile)

        const listing = {
            "painting_id": art_info.id,
            "painting_title": art_info.title,
            "painting_image": art_info.image,
            "artist_id": art_info.artistId,
            "artist_name": art_info.artistName,
            "owner_id": profile._id,
            "owner_name": profile.username,
            "quality": qualityRef.current.value,
            "listing_price": priceRef.current.value,
            "active_listing": true,
        }

        console.log(listing)

        createListing(dispatch, listing)
        setShow(false);

    }

    return (
        <>
            <div onClick={() => setShow(true)}>
                List for Sale
            </div>

            <Modal show={set} onHide={() => setShow(false)}>
                <Modal.Header closeButton className={`border-0`}>
                    <div className={'container text-center'}>
                        <Modal.Title>List Paint for Sale</Modal.Title>
                    </div>
                </Modal.Header>

                <Modal.Body>
                    <Form className={`container`}>
                        <div className={"mb-4"}>To list an item for sale, select the quality of the artwork and your ideal sale price.</div>
                        <div className="form-group row mb-4">
                            <label htmlFor="quality" className="col-sm-2 col-form-label">Quality</label>
                            <div className="col-sm-10">
                                <select className="form-select rounded-pill bg-light border-0 shadow-none"
                                       ref={qualityRef}
                                       type="text" id="quality">
                                    <option value={"excellent"}>Excellent</option>
                                    <option value={"good"}>Good</option>
                                    <option value={"fair"}>Fair</option>
                                    <option value={"poor"}>Poor</option>

                                </select>
                            </div>
                        </div>

                        <div className="form-group row mb-3">
                            <label htmlFor="price"
                                   className="col-sm-2 col-form-label">
                                Price
                            </label>
                            <div className="col-sm-10">
                                <input className="form-control rounded-pill bg-light border-0 shadow-none"
                                       ref={priceRef}
                                       type="number" id="price"/>
                            </div>
                        </div>
                    </Form>
                </Modal.Body>

                <Modal.Footer className={`border-0`}>
                    <div className={'container text-center'}>
                        <button className={'btn btn-primary bg-primary rounded-pill border-0 m-2'}
                                onClick={handleCreateListing}>
                            List for Sale
                        </button>
                        <button className={'btn btn-primary bg-danger rounded-pill border-0 m-2'}
                                onClick={() => setShow(false)}>
                            Cancel
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default CreateListingModal;