import {Dropdown, DropdownButton} from "react-bootstrap";
import React from "react";
import {addToUserCollection, removeFromUserCollection} from "../../../_actions/collections-actions";
import {useProfile} from "../../../_context/profile-context";
import {useDispatch} from "react-redux";
import CreateListingModal from "../CreateListingModal";
import SecureContent from "../../../_security/secure-content";
import {Link, useNavigate} from "react-router-dom";

const goToUrl = (url) => {
    const navigate = useNavigate
    navigate(url)

}

const ArtistGridMenuItem = (grid_item, profile, dispatch) => {

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
                        alert("Added to your collection")
                    } catch {
                        alert("(not really) removed to your collection")
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


const FavoriteGridMenuItem = (grid_item, profile, dispatch) => {

    return (
        <DropdownButton className={"btn p-0 border-0 float-end shadow-none"} variant={"transparent"}
                        size={"sm"}
                        align={"end"} title={""}>
            <SecureContent>
                <Dropdown.Item>
                    Un-favorite
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
                     try {
                        addToUserCollection(dispatch, profile._id, item_to_add)
                        alert("Added to your collection")
                    } catch (e) {
                        alert("(not really) removed to your collection")
                    }
                }}>
                    Add to Collection
                </Dropdown.Item>
                <Dropdown.Item>
                    <CreateListingModal art_info={grid_item} profile={profile} dispatch={dispatch}/>
                </Dropdown.Item>
            </SecureContent>

            <Dropdown.Item>
                More Details
            </Dropdown.Item>
        </DropdownButton>
    )
}


const CollectionGridMenuItem = (grid_item, profile, dispatch) => {

    return (
        <DropdownButton className={"btn p-0 border-0 float-end shadow-none"} variant={"transparent"}
                        size={"sm"}
                        align={"end"} title={""}>
            <SecureContent>
                <Dropdown.Item>
                    Favorite
                </Dropdown.Item>
                <Dropdown.Item onClick={() => {
                    try {
                        removeFromUserCollection(dispatch, profile._id, grid_item._id)
                        alert("removed from your collection")
                    } catch {
                        alert("couldn't remove from your collection")
                    }
                }}>
                    Remove from Collection
                </Dropdown.Item>
                <Dropdown.Item>
                    <CreateListingModal art_info={grid_item} profile={profile} dispatch={dispatch}/>
                </Dropdown.Item>
            </SecureContent>

            <Dropdown.Item>
                More Details
            </Dropdown.Item>
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
        case "collection":
            return CollectionGridMenuItem(params.grid_item, profile, dispatch);
        case "favorite":
            return FavoriteGridMenuItem(params.grid_item, profile, dispatch);
        default:
            return [];
    }
}

export default GridMenuItem;