import React from "react";

import OffersItem from "./OffersItem";
import ComponentHeader from "../ComponentHeader";
import EmptyOffers from "../Errors/EmptyOffers";

const Offers = ({data}) => {

    return (
        <>
            {ComponentHeader("Active Offers")}
            <div className={"p-2 mb-2"}>
                {data.length === 0 ?
                    <EmptyOffers/>
                    :
                    <div className={'col'}>
                        {data.map(offer_item =>
                            <OffersItem key={offer_item._id} offer={offer_item}/>)}
                    </div>
                }
            </div>
        </>
    )
}

export default Offers;