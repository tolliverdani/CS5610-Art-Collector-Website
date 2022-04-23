import {Dropdown, DropdownButton} from "react-bootstrap";
import React from "react";
import {addToUserCollection} from "../../../_actions/collections-actions";
import {useProfile} from "../../../_context/profile-context";
import {useDispatch} from "react-redux";
import CreateListingModal from "../CreateListingModal";
import SecureContent from "../../Security/secure-content";

const ArtistGridMenuItem = (grid_item, profile, dispatch) => {

    return (
        <DropdownButton className={"btn p-0 border-0 float-end shadow-none"} variant={"transparent"}
                        size={"sm"}
                        align={"end"} title={""}>
            <Dropdown.Item onClick={() => {
                alert("Added to favorites")
            }}>
                Favorite
            </Dropdown.Item>
            <Dropdown.Item>
                More Details
            </Dropdown.Item>
        </DropdownButton>
    )
}

const PaintingGridMenuItem = (grid_item, profile, dispatch) => {

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
            <SecureContent>
                <Dropdown.Item>
                    <CreateListingModal art_info={grid_item} profile={profile} dispatch={dispatch}/>
                </Dropdown.Item>
            </SecureContent>
        </DropdownButton>
    )
}

const GridMenuItem = (params) => {

    const {profile} = useProfile()
    const {dispatch} = useDispatch()

    switch (params.type) {
        case "artist":
            return ArtistGridMenuItem(params.grid_item, profile, dispatch);
        case "painting":
            return PaintingGridMenuItem(params.grid_item, profile, dispatch);
        default:
            return [];
    }
}

export default GridMenuItem;