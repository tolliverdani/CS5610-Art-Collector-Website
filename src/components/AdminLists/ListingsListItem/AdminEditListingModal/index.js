import React, {useState} from "react";
import {Modal, Button, Form} from 'react-bootstrap';
import {useDispatch} from "react-redux";
import {deleteListing, updateListing} from "../../../../_actions/listings-actions";

// Borrowed HEAVILY from here: https://react-bootstrap.github.io/components/modal/

const AdminEditListingModal = ({listing}) => {
    const [set, setShow] = useState(false);

    const dispatch = useDispatch();

    const [listing_price, changeListingPrice] = useState(listing.listing_price)
    const [active_listing, changeActiveListing] = useState(listing.active_listing)
    const [accepted, changeAccepted] = useState(listing.sold)
    const [date_removed, changeDateRemoved] = useState(listing.date_removed || "")
    const [sale_price, changeSalePrice] = useState(listing.sale_price || 0)
    const [quality, changeQuality] = useState(listing.quality)
    const [buyer_id, changeBuyerId] = useState(listing.buyer_id || "")

    // TODO check what happens when you pick something without a field

    const handleUpdate = async () => {
        try {
            const updated_listing = {...listing,
                "listing_price": listing_price,
                "active_listing": active_listing,
                "sold": accepted,
                "date_removed": date_removed,
                "sale_price": sale_price,
                "quality": quality,
                "buyer_id": buyer_id
            }

            updateListing(dispatch,updated_listing).then(() =>
            {
                alert("You have updated this listing.")
                setShow(false)
            })
        } catch (e) {
            alert("Ut oh! We were unable to update this listing");
            setShow(false)
        }
    }

    const handleDelete = async () => {
        try {
            deleteListing(dispatch, listing._id).then(() =>{
                alert("You have deleted this listing.")
                setShow(false)
            })

        } catch (e){
            alert("Ut oh! We were unable to delete this listing");
            setShow(false)
        }
    }

    return (
        <div className={"mb-2 text-end"}>
            <div onClick={() => setShow(true)} className={"badge bg-warning"}>Edit</div>

            <Modal show={set} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Listing</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form className={`container`}>

                        <div className={"mb-3 text-danger text-center"}>
                            <strong>As admin, you can edit certain parts of an listing using the form below.</strong>
                        </div>
                        <div className={"card mb-2 p-2 text-center"}>
                            <div className={"text-center"}>
                                <h6><strong>Uneditable Fields</strong></h6>
                            </div>
                            <p className={"m-0"}><strong>Listing Id: </strong>{listing._id}</p>
                            <p className={"m-0"}><strong>Painting Id: </strong>{listing.painting_id}</p>
                            <p className={"m-0"}><strong>Painting Title: </strong>{listing.painting_title}</p>
                            <p className={"m-0"}><strong>Artist Id: </strong>{listing.artist_id}</p>
                            <p className={"m-0"}><strong>Artist Name: </strong>{listing.artist_name}</p>
                            <p className={"m-0"}><strong>Owner Id: </strong>{listing.owner_name}</p><p className={"m-0"}><strong>Owner Id: </strong>{listing.owner_id}</p>
                            <p className={"m-0"}><strong>Date Created: </strong>{new Date(listing.date_created).toLocaleDateString()}</p>
                        </div>
                        <div className="form-group row mb-4">
                            <label htmlFor="PriceInput"
                                   className="col-sm-4 col-form-label">
                                Listing Price
                            </label>
                            <div className="col-sm-8">
                                <input className="form-control rounded-pill bg-light border-0 shadow-none"
                                       type="number" id="PiceInput"
                                       value={listing_price}
                                       onChange={(e) => changeListingPrice(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="form-group row mb-4">
                            <label htmlFor="ActiveListing"
                                   className="col-sm-4 col-form-label">
                                Active Listing?
                            </label>
                            <div className="col-sm-8">
                                <select className="form-control rounded-pill bg-light border-0 shadow-none"
                                        id="ActiveListing"
                                        value={active_listing}
                                        onChange={(e) => changeActiveListing(e.target.value)}
                                >
                                    <option value={true}>True</option>
                                    <option value={false}>False</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group row mb-4">
                            <label htmlFor="Sold"
                                   className="col-sm-4 col-form-label">
                                Listing Accepted?
                            </label>
                            <div className="col-sm-8">
                                <select className="form-control rounded-pill bg-light border-0 shadow-none"
                                        id="Sold"
                                        value={accepted}
                                        onChange={(e) => changeAccepted(e.target.value)}
                                >
                                    <option value={true}>True</option>
                                    <option value={false}>False</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group row mb-4">
                            <label htmlFor="PaintingQuality"
                                   className="col-sm-4 col-form-label">
                                Painting Quality
                            </label>
                            <div className="col-sm-8">
                                <select className="form-control rounded-pill bg-light border-0 shadow-none"
                                        id="PaintingQuality"
                                        value={quality}
                                        onChange={(e) => changeQuality(e.target.value)}
                                >
                                    <option value={"excellent"}>Excellent</option>
                                    <option value={"good"}>Good</option>
                                    <option value={"fair"}>Fair</option>
                                    <option value={"poor"}>Poor</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group row mb-4">
                            <label htmlFor="SalePrice"
                                   className="col-sm-4 col-form-label">
                                Sale Price
                            </label>
                            <div className="col-sm-8">
                                <input className="form-control rounded-pill bg-light border-0 shadow-none"
                                       type="number" id="SalePrice"
                                       value={sale_price}
                                       onChange={(e) => changeSalePrice(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="form-group row mb-4">
                            <label htmlFor="BuyerId"
                                   className="col-sm-4 col-form-label">
                                Buyer Id
                            </label>
                            <div className="col-sm-8">
                                <input className="form-control rounded-pill bg-light border-0 shadow-none"
                                       type="text" id="BuyerId"
                                       value={buyer_id}
                                       onChange={(e) => changeBuyerId(e.target.value)}
                                />
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
                        Delete Listing
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
export default AdminEditListingModal;