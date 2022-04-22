import React from "react";
import {Link} from "react-router-dom";
import {Dropdown, DropdownButton} from "react-bootstrap";
import {addToUserCollection} from "../../../_actions/collections-actions";
import {useProfile} from "../../../_context/profile-context";
import {useDispatch} from "react-redux";
import GridMenuItem from "../GridMenuItem";

// Reference for content: https://react-bootstrap.github.io/components/dropdowns/

const ArtistGridItem = ({grid_item}) => {

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

                <GridMenuItem type={"artist"} grid_item={grid_item}/>

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