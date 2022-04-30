
// list for offers
// list for users
// list for listings

import ArtistListingItem from "../ListingsGrid/ArtistListingItem";
import UserListingItem from "../ListingsGrid/UserListingItem";
import PaintingListingItem from "../ListingsGrid/PaintingListingItem";
import React from "react";
import ComponentHeader from "../ComponentHeader";
import EmptyListings from "../Errors/EmptyListings";
import UserListItem from "./UserListItem";
import OffersListItem from "./OffersListItem";
import ListingsListItem from "./ListingsListItem";

const DataToDisplay = (type, data) => {

    //console.log(data)

    switch (type) {
        case "listings":
            return data.map(listing_item =>
                <ListingsListItem key={listing_item._id} listing={listing_item}/>)
        case "users":
            return data.map(user =>
                <UserListItem key={user._id} user={user} />)
        case "offers":
            return data.map(offer =>
                <OffersListItem key={offer._id} offer={offer}/>)
        default:
            return []
    }
}

const ListingsGrid = ({type, data, header}) => {

    return (
        <>
            {ComponentHeader(header)}
            <div className={"p-2 mb-2"}>
                {data.length === 0 ?
                    <EmptyListings/>
                    : <div className={"list-group"}>
                        {DataToDisplay(type, data)}
                    </div>
                }
            </div>
        </>
    )
}

export default ListingsGrid;