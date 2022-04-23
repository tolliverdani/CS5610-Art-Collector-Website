import React from "react";

const OffersItem = ({
                        offer = {
                            "_id": "626472e4dab08a61db16fc19",
                            "listing_id": "626430ae40d1a44c1b08fda0",
                            "painting_id": "5772716cedc2cb3880c1907f",
                            "painting_name": "The Starry Night",
                            "artist_id": "57726d82edc2cb3880b486a0",
                            "artist_name": "Vincent van Gogh",
                            "seller_id": "6260ab26dcc7a25155430c92",
                            "buyer_id": "6260ab26dcc7a25155430c92",
                            "buyer_name": "collection",
                            "offer_price": 789.65,
                            "date_created": "2022-04-23T21:43:00.838Z",
                            "active_offer": true,
                            "__v": 0
                        }
}) => {


    return (
        <div>
            {/*Container to hold listing item*/}
            <li className={"list-group-item mb-2 bg-light border-0"}>
                {/*Container to hold text of listing, so that bid icon can be right justified*/}
                <div>
                    <p className={"mb-0"}><strong>Artwork Id: </strong>{offer.painting_name}</p>
                    <p className={"mb-0"}><strong>Buyer Id: </strong>{offer.buyer_name}</p>
                    <p className={`mb-0`}><strong>Offer Price: $</strong>{offer.offer_price}</p>
                </div>
                <div className={"d-grid mt-1"}>
                    {/*Bid button*/}
                    <button type={"button"} className={"btn btn-primary mb-1 rounded-pill"}>
                        Accept Offer
                    </button>
                    <button type={"button"} className={"btn btn-danger rounded-pill"}>
                        Reject Offer
                    </button>

                    {/*<a className="btn btn-primary rounded-pill btn-sm" href="/#">{listing.type === 'For Barter' ? 'Trade' : 'Buy'}</a>*/}
                </div>
            </li>
        </div>
    )

}

export default OffersItem;