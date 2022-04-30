import {Dropdown, DropdownButton} from "react-bootstrap";
import React from "react";
import {addToUserCollection, removeFromUserCollection} from "../../../_actions/collections-actions";
import {useDispatch, useSelector} from "react-redux";
import CreateListingModal from "../CreateListingModal";
import SecureContent from "../../../_security/secure-content";

const ArtistGridMenuItem = (grid_item) => {

    return (
        <DropdownButton className={"btn p-0 border-0 float-end shadow-none"} variant={"transparent"}
                        size={"sm"}
                        align={"end"} title={""}>
            <Dropdown.Item href={`/artist/${grid_item.url}/${grid_item.id}`}>
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
            <SecureContent>
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
                    // TODO how to handle this?
                    try {
                        addToUserCollection(dispatch, profile._id, item_to_add)
                        alert("Item added to your collection")
                    } catch {
                        alert("Ut oh! Couldn't add this item to your collection")
                    }
                }}>
                    Add to Collection
                </Dropdown.Item>
                <Dropdown.Item>
                    <CreateListingModal art_info={grid_item} profile={profile} dispatch={dispatch}/>
                </Dropdown.Item>
            </SecureContent>

            <Dropdown.Item href={`/art/${grid_item.id}`}>
                More Details
            </Dropdown.Item>
        </DropdownButton>
    )
}

const CollectionGridMenuItem = (grid_item, profile, user, dispatch) => {

    return (
        <DropdownButton className={"btn p-0 border-0 float-end shadow-none"} variant={"transparent"}
                        size={"sm"}
                        align={"end"} title={""}>
            <SecureContent>
                {profile && user && profile._id === user._id ?
                    <>
                        <Dropdown.Item onClick={() => {
                            try {
                                removeFromUserCollection(dispatch, profile._id, grid_item._id)
                                alert("Item removed from your collection")
                            } catch {
                                alert("Ut oh! Couldn't remove this item from your collection")
                            }
                        }}>
                            Remove from Collection
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <CreateListingModal art_info={grid_item}/>
                        </Dropdown.Item>
                    </>
                    :
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
                        try {
                            addToUserCollection(dispatch, profile._id, item_to_add)
                            alert("Item added to your collection")
                        } catch {
                            alert("Ut oh! Couldn't add this item to your collection")
                        }
                    }}>
                        Add to Collection
                    </Dropdown.Item>}
            </SecureContent>

            <Dropdown.Item href={`/art/${grid_item.id}`}>
                More Details
            </Dropdown.Item>
        </DropdownButton>
    )
}

const GridMenuItem = (params) => {

    const profile = useSelector(state => state.profile)
    const user = useSelector(state => state.singleUser)
    const {dispatch} = useDispatch()

    switch (params.type) {
        case "artist":
            return ArtistGridMenuItem(params.grid_item, profile, dispatch);
        case "painting":
            return PaintingGridMenuItem(params.grid_item, profile, dispatch);
        case "collection":
            return CollectionGridMenuItem(params.grid_item, profile, user, dispatch);
        default:
            return [];
    }
}

export default GridMenuItem;