import {Dropdown, DropdownButton} from "react-bootstrap";
import SecureContent from "../../../_security/secure-content";
import React from "react";
import ConfirmationModal from "../ConfirmationModal";
import {deleteActiveListing} from "../../../_actions/listings-actions";
import {useDispatch, useSelector} from "react-redux";

const ListingGridMenuItem = ({grid_item}) => {

    const profile = useSelector(state => state.profile)
    const user = useSelector(state => state.singleUser)
    const dispatch = useDispatch();

    const handleClick = async () => {
        const updated_listing = {
            ...grid_item,
            active_listing: false,
            sold: false,
            date_removed: new Date()
        }
        try {
            deleteActiveListing(dispatch, updated_listing)
        } catch (e) {
            alert("Ut oh! We were unable to delete this listing")
        }
    }

    return (
        <DropdownButton className={"btn p-0 border-0 float-end shadow-none"} variant={"transparent"}
                        size={"sm"}
                        align={"end"} title={""}>
            <SecureContent>
                {profile && user && profile._id === user._id && profile._id === grid_item.owner_id ?
                    <Dropdown.Item onClick={() => handleClick()}>
                        Remove Listing
                    </Dropdown.Item>
                    :
                    <Dropdown.Item>
                        <ConfirmationModal listing_item={grid_item}/>
                    </Dropdown.Item>
                }
            </SecureContent>

            <Dropdown.Item href={`/art/${grid_item.painting_id}`}>
                More Details
            </Dropdown.Item>
        </DropdownButton>
    )
}

export default ListingGridMenuItem;