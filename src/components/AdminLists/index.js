
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

const DataToDisplay = (type, data) => {

    console.log(data)

    switch (type) {
        case "listings":
            return data.map(listing_item =>
                <ArtistListingItem key={listing_item._id} grid_item={listing_item}/>)
        case "users":
            return data.map(user =>
                <UserListItem key={data._id} user={user} />)
        case "offers":
            return data.map(listing_item =>
                <PaintingListingItem key={listing_item._id} grid_item={listing_item}/>)
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