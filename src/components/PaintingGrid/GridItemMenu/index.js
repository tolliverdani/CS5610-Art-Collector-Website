import {Dropdown, DropdownButton} from "react-bootstrap";
import {addToUserCollection} from "../../../_actions/collections-actions";
import React from "react";
import {useDispatch} from "react-redux";
import {useProfile} from "../../../_context/profile-context";

const GridItemMenu = (grid_item) => {
    const dispatch = useDispatch();
    const {profile} = useProfile()

    return (
        <DropdownButton className={"btn p-0 border-0 float-end shadow-none"} variant={"transparent"}
                        size={"sm"}
                        align={"end"} title={""}>
            <Dropdown.Item>
                Favorite
            </Dropdown.Item>
            <Dropdown.Item onClick={() => {
                // pack up the image, only pulling out what is needed
                const item_to_add = {
                    "id": grid_item.id,
                    "title": grid_item.title,
                    "url": grid_item.url,
                    "artistUrl": grid_item.artistUrl,
                    "artistName": grid_item.artistName,
                    "artistId": grid_item.artistId,
                    "completionYear": grid_item.completionYear,
                    "image": grid_item.image
                }
                addToUserCollection(dispatch, profile._id, item_to_add)
                alert("Added to your collection")
            }}>
                Add to Collection
            </Dropdown.Item>
            <Dropdown.Item>
                More Details
            </Dropdown.Item>
        </DropdownButton>
    )
}

export default GridItemMenu