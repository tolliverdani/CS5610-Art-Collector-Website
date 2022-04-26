import {Dropdown, DropdownButton} from "react-bootstrap";
import SecureContent from "../../../_security/secure-content";
import React from "react";
import ConfirmationModal from "../ConfirmationModal";

const ListingGridMenuItem = ({grid_item}) => {

    return (
        <DropdownButton className={"btn p-0 border-0 float-end shadow-none"} variant={"transparent"}
                        size={"sm"}
                        align={"end"} title={""}>
            <SecureContent>
                <Dropdown.Item>
                    <ConfirmationModal listing_item={grid_item}/>
                </Dropdown.Item>
            </SecureContent>

            <Dropdown.Item href={`/art/${grid_item.painting_id}`}>
                More Details
            </Dropdown.Item>
        </DropdownButton>
    )
}

export default ListingGridMenuItem;