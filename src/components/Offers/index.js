import React from "react";

import OffersItem from "./OffersItem";
import ComponentHeader from "../ComponentHeader";

const Offers = ({data}) => {

    return (
        <>
            {ComponentHeader("Active Offers")}
            <div className={"p-2 mb-2"}>
                {data.length === 0 ?
                    <div>No active offers</div>
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