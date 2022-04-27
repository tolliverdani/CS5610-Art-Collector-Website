import {Dropdown, DropdownButton} from "react-bootstrap";
import SecureContent from "../../../_security/secure-content";
import React from "react";
import ConfirmationModal from "../ConfirmationModal";
import {useProfile} from "../../../_context/profile-context";
import {deleteListing, updateListing} from "../../../_actions/listings-actions";
import {useDispatch} from "react-redux";

const ListingGridMenuItem = ({grid_item}) => {

    const {profile} = useProfile();
    const dispatch = useDispatch();

    const handleClick = () => {
        const updated_listing = {...grid_item, active_listing: false, sold: false, date_removed: new Date ()}
        console.log(grid_item._id)
            updateListing(dispatch, updated_listing).then(
                console.log("Listing removed.")
            )

    }

    return (
        <DropdownButton className={"btn p-0 border-0 float-end shadow-none"} variant={"transparent"}
                        size={"sm"}
                        align={"end"} title={""}>
            <SecureContent>
                {profile._id === grid_item.owner_id ?
                    <Dropdown.Item onClick={() => handleClick()}>
                        Remove Listing
                    </Dropdown.Item>
                    :
                <Dropdown.Item>
                    <ConfirmationModal listing_item={grid_item}/>
                </Dropdown.Item>}
            </SecureContent>

            <Dropdown.Item href={`/art/${grid_item.painting_id}`}>
                More Details
            </Dropdown.Item>
        </DropdownButton>
    )
}

export default ListingGridMenuItem;