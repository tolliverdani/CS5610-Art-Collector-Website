import React from "react";

import OffersItem from "./OffersItem";
import ComponentHeader from "../ComponentHeader";

const Offers = ({data, profile}) =>  {
    return (
        <>
            {ComponentHeader("Active Offers")}
            <ul className={"list-group"}>
                {data.map(offer_item => <OffersItem key={offer_item._id} offer={offer_item}/>)}
            </ul>
        </>
    )
}

export default Offers;