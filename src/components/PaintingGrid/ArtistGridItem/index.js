import React from "react";
import {Link} from "react-router-dom";
import GridItemMenu from "../GridItemMenu";
import {Dropdown, DropdownButton} from "react-bootstrap";
import {addToUserCollection} from "../../../_actions/collections-actions";
import {useProfile} from "../../../_context/profile-context";
import {useDispatch} from "react-redux";

// Reference for content: https://react-bootstrap.github.io/components/dropdowns/

const ArtistGridItem = ({grid_item}) => {

    const {profile} = useProfile()
    const {dispatch} = useDispatch()

    return (
        <div className={"col card border-0 p-1"}>
            <div className={"d-flex"}>
                <Link to={`/artist/${grid_item.url}/${grid_item.id}`}>
                    <img className={'img-thumbnail thumb-post img-responsive border-0 align-self-center p-0 mb-1'}
                         src={grid_item.image}
                         alt={grid_item.title}/>
                </Link>
            </div>

            <div className={'card-title align-items-center'}>
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

                <span className={'card-title'}>
                    <Link className={`small text-decoration-none text-black`}
                          to={`/artist/${grid_item.url}/${grid_item.id}`}>
                        <span className={"m-0"}><strong>{grid_item.title}</strong></span>
                    </Link>
                    <Link className={`text-decoration-none text-dark`}
                          to={`/artist/${grid_item.url}/${grid_item.id}`}>
                        <p>{grid_item.artistName}</p>
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default ArtistGridItem;