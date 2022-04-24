import React from "react";
import OfferModal from "../OfferModal";

const OffersItem = ({offer}) => {

    return (
        <>
            <li className={"row list-group-item border-0"}>
                <OfferModal offer={offer}/>
            </li>
        </>
    )

}

export default OffersItem;